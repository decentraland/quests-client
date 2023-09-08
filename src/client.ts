import { loadService, RpcClientModule } from '@dcl/rpc/dist/codegen'
import { createRpcClient } from '@dcl/rpc'
import { WebSocketTransport } from '@dcl/rpc/dist/transports/WebSocket'
import deepEqual from 'deep-equal'
import { Action, QuestState } from '.'
import { EventResponse, Quest, QuestsServiceDefinition, QuestStateUpdate, UserUpdate } from './protocol/quests.gen'
import { getHeaders } from '~system/SignedFetch'

type QuestsClient = {
  startQuest: () => Promise<boolean>
  abortQuest: () => Promise<boolean>
  sendEvent: (event: { action: Action }) => Promise<EventResponse | undefined>
  onStarted: (callback: OnStartedCallback) => void
  onUpdate: (callback: OnUpdateCallback) => void
  isQuestStarted: () => boolean
  getQuestInstance: () => QuestInstance | null
  getInstances: () => QuestInstance[]
}

/**
 * @param wsUrl - WebSocket URL to connect to the Quests server, example: `wss://quests-rpc.decentraland.{env}`
 * @param questId - ID of your Quest
 * @returns a Quests client that can be used to interact with the server
 */
export async function createQuestsClient(wsUrl: string, questId: string): Promise<QuestsClient> {
  function handleNewQuestStarted(newQuest: QuestInstance) {
    state.instances[newQuest.id] = newQuest
    if (newQuest.quest.id === questId) {
      state.onStarted.forEach((callback) => callback(newQuest))
    }
  }

  function handleQuestUpdate(questUpdate: QuestStateUpdate) {
    const questIdOfInstance = state.instances[questUpdate.instanceId].quest.id
    if (questIdOfInstance === questId) {
      if (questUpdate.questState) {
        const eventId = questUpdate.eventId
        state.processingEvents = state.processingEvents.filter((event) => event.eventId !== eventId)

        const { questState, instanceId } = questUpdate
        state.instances[instanceId].state = questState

        state.onUpdate.forEach((callback) => callback(state.instances[instanceId]))
      }
    }
  }

  function handleEventIgnored(eventIgnored: string) {
    // TODO: eventIgnored should be a string, .proto is outdated and server is not sending this event yet
    state.processingEvents = state.processingEvents.filter((event) => event.eventId === eventIgnored)
  }

  async function listenToSubscription(subscription: AsyncGenerator<UserUpdate, any, unknown>) {
    for await (const update of subscription) {
      console.log(`[@dcl/quests-client] update received ${JSON.stringify(update)}`)
      if (update.message?.$case === 'eventIgnored') {
        handleEventIgnored(update.message.eventIgnored)
      } else if (update.message?.$case === 'questStateUpdate') {
        handleQuestUpdate(update.message.questStateUpdate)
      } else if (update.message?.$case === 'newQuestStarted') {
        handleNewQuestStarted(update.message.newQuestStarted as QuestInstance)
      }
    }
  }

  function isActionValidForQuestStates(action: Action) {
    const match = (actionItem: Action) => deepEqual(actionItem, action)

    if (state.processingEvents.some((event) => match(event.action))) {
      return false
    }

    const quests = Object.values(state.instances)
    return quests
      .map((quest) => quest.state)
      .some((questState) =>
        Object.values(questState.currentSteps)
          .flatMap((step) => step.toDos)
          .flatMap((task) => task.actionItems)
          .some(match)
      )
  }

  async function sendEvent(event: { action: Action }) {
    if (!isActionValidForQuestStates(event.action)) {
      return
    }

    const eventResponse = await client.sendEvent(event)
    if (eventResponse.response?.$case === 'acceptedEventId') {
      state.processingEvents.push({ eventId: eventResponse.response.acceptedEventId, action: event.action })
    }

    return eventResponse
  }

  function onStarted(callback: OnStartedCallback) {
    state.onStarted.push(callback)
  }

  function onUpdate(callback: OnUpdateCallback) {
    state.onUpdate.push(callback)
  }

  function getInstances() {
    return Object.values(state.instances)
  }

  function isQuestStarted() {
    return !!getInstances().find((instance) => instance.quest.id === questId)
  }

  function getQuestInstance() {
    const quest = getInstances().find((instance) => instance.quest.id === questId)
    if (quest) return quest

    return null
  }

  const state: ClientState = {
    instances: {},
    processingEvents: [],
    onStarted: [],
    onUpdate: []
  }

  const { client, connection } = await createClient(wsUrl)
  const { startQuest, abortQuest } = client

  async function start(): Promise<boolean> {
    const response = await startQuest({ questId })
    if (response.response?.$case === 'accepted') {
      return true
    } else if (response.response?.$case === 'internalServerError') {
      console.error(`[@dcl/quests-client] Error while starting quests: ${response.response.internalServerError}`)
      return false
    } else if (response.response?.$case === 'invalidQuest') {
      console.error(`[@dcl/quests-client] Inavld Quest: ${response.response.invalidQuest}`)
      return false
    } else if (response.response?.$case === 'notUuidError') {
      console.error(`[@dcl/quests-client] Provided ID is invalid`)
      return false
    }
    return false
  }

  async function abort(): Promise<boolean> {
    const questInstanceIdForQuestID = getInstances().find((instance) => instance.quest.id === questId)
    if (questInstanceIdForQuestID) {
      const response = await abortQuest({ questInstanceId: questInstanceIdForQuestID.id })
      if (response.response?.$case === 'accepted') {
        return true
      } else if (response.response?.$case === 'internalServerError') {
        console.error(`[@dcl/quests-client] Error while aborting quests: ${response.response.internalServerError}`)
        return false
      } else if (response.response?.$case === 'notFoundQuestInstance') {
        console.error(`[@dcl/quests-client] Quest Instance ID was not found`)
        return false
      } else if (response.response?.$case === 'notOwner') {
        console.error(`[@dcl/quests-client] Not Instance Owner`)
        return false
      } else if (response.response?.$case === 'notUuidError') {
        console.error(`[@dcl/quests-client] Instance ID is invalid`)
        return false
      }
    }
    return false
  }

  const allQuestsResponse = await client.getAllQuests({})
  if (allQuestsResponse.response?.$case === 'internalServerError') {
    console.error(`[@dcl/quests-client] Error while fetching quests: ${allQuestsResponse.response.internalServerError}`)
    throw new Error(`Couldn't not initialize Quests client`)
  } else if (allQuestsResponse.response?.$case === 'quests') {
    const instances = allQuestsResponse.response.quests.instances
    instances.forEach((instance) => {
      state.instances[instance.id] = instance as QuestInstance
    })
    const subscription = client.subscribe({})

    const {
      value: { message }
    } = await subscription.next()

    if (message?.$case === 'subscribed') {
      console.log(`[@dcl/quests-client] subscription to updates was confirmed`)
      listenToSubscription(subscription).catch((e) => {
        console.error(`[@dcl/quests-client] Error while receiving updates: ${e}`)
      })
    } else {
      console.error(`[@dcl/quests-client] Error while subscribing to updates: ${message}`)
      connection.close()
      throw new Error('[@dcl/quests-client] Connection broken')
    }
  }

  return {
    startQuest: start,
    abortQuest: abort,
    isQuestStarted,
    getQuestInstance,
    sendEvent,
    onStarted,
    onUpdate,
    getInstances
  }
}

async function createClient(
  wsUrl: string
): Promise<{ client: RpcClientModule<QuestsServiceDefinition>; connection: WebSocket }> {
  const ws = new WebSocket(wsUrl)
  return new Promise((resolve, reject) => {
    ws.onopen = async () => {
      const response = await getHeaders({ url: wsUrl })
      ws.send(JSON.stringify(response.headers))

      const transport = WebSocketTransport(ws as any)
      const rpcClient = await createRpcClient(transport)
      const port = await rpcClient.createPort('quests-client')
      const client = loadService<NonNullable<unknown>, QuestsServiceDefinition>(port, QuestsServiceDefinition)
      resolve({ client, connection: ws })
    }
    ws.onclose = () => {
      reject(`Couldn't connect to Quests server`)
    }
  })
}

type ClientState = {
  instances: Record<string, QuestInstance>
  processingEvents: Array<{ eventId: string; action: Action }>
  onStarted: Array<OnStartedCallback>
  onUpdate: Array<OnUpdateCallback>
}

export type QuestInstance = {
  id: string
  quest: Quest
  state: QuestState
}
export type OnStartedCallback = (instance: QuestInstance) => void
export type OnUpdateCallback = (instance: QuestInstance) => void
export type Quests = ReturnType<typeof createQuestsClient>
