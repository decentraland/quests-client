import { loadService, RpcClientModule } from '@dcl/rpc/dist/codegen'
import { createRpcClient } from '@dcl/rpc'
import { WebSocketTransport } from '@dcl/rpc/dist/transports/WebSocket'
import {
  Action,
  EventResponse,
  QuestInstance,
  QuestsServiceDefinition,
  QuestStateUpdate,
  UserUpdate
} from './protocol/decentraland/quests/definitions.gen'
import { getHeaders } from '~system/SignedFetch'

type QuestsClient = {
  startQuest: () => Promise<boolean>
  abortQuest: () => Promise<boolean>
  sendEvent: (event: { action: Action }) => Promise<EventResponse | undefined>
  onStarted: (callback: OnStartedCallback) => void
  onUpdate: (callback: OnUpdateCallback) => void
  isQuestStarted: () => boolean
  getQuestInstance: () => QuestInstanceRequired | null
  getInstances: () => QuestInstanceRequired[]
}

/**
 * @param wsUrl - WebSocket URL to connect to the Quests server, example: `wss://quests-rpc.decentraland.{env}`
 * @param questId - ID of your Quest
 * @returns a Quests client that can be used to interact with the server
 */
export async function createQuestsClient(wsUrl: string, questId: string): Promise<QuestsClient> {
  function handleNewQuestStarted(newQuest: QuestInstanceRequired) {
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
    state.processingEvents = state.processingEvents.filter((event) => event.eventId !== eventIgnored)
  }

  async function listenToSubscription(subscription: AsyncGenerator<UserUpdate, any, unknown>) {
    for await (const update of subscription) {
      console.log(`[@dcl/quests-client] update received ${JSON.stringify(update)}`)
      if (update.eventIgnored) {
        handleEventIgnored(update.eventIgnored)
      } else if (update.questStateUpdate) {
        handleQuestUpdate(update.questStateUpdate)
      } else if (update.newQuestStarted) {
        handleNewQuestStarted(update.newQuestStarted as QuestInstanceRequired)
      }
    }
  }

  async function sendEvent(event: { action: Action }) {
    const eventResponse = await client.sendEvent(event)
    if (eventResponse.acceptedEventId) {
      state.processingEvents.push({ eventId: eventResponse.acceptedEventId, action: event.action })
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
    if (response.accepted) {
      return true
    } else if (response.internalServerError) {
      console.error(`[@dcl/quests-client] Internal Server Error while starting quests`)
      return false
    } else if (response.invalidQuest) {
      console.error(`[@dcl/quests-client] Unable to start the Quest because it's an invalid Quest`)
      return false
    } else if (response.notUuidError) {
      console.error(`[@dcl/quests-client] Provided ID is invalid`)
      return false
    } else if (response.questAlreadyStarted) {
      console.error(`[@dcl/quests-client] The user has already started the Quest`)
      return false
    }
    return false
  }

  async function abort(): Promise<boolean> {
    const questInstanceIdForQuestID = getInstances().find((instance) => instance.quest.id === questId)
    if (questInstanceIdForQuestID) {
      const response = await abortQuest({ questInstanceId: questInstanceIdForQuestID.id })
      if (response.accepted) {
        return true
      } else if (response.internalServerError) {
        console.error(`[@dcl/quests-client] Internal Server Error while aborting quests`)
        return false
      } else if (response.notFoundQuestInstance) {
        console.error(`[@dcl/quests-client] Quest Instance ID was not found`)
        return false
      } else if (response.notOwner) {
        console.error(`[@dcl/quests-client] Not Instance Owner`)
        return false
      } else if (response.notUuidError) {
        console.error(`[@dcl/quests-client] Instance ID is invalid`)
        return false
      }
    }
    console.error(`[@dcl/quests-client] Trying to abort a Quest that is not started`)
    return false
  }

  const allQuestsResponse = await client.getAllQuests({})
  if (allQuestsResponse.internalServerError) {
    console.error(`[@dcl/quests-client] Internal Server Error while fetching quests`)
    throw new Error(`Couldn't not initialize Quests client`)
  } else if (allQuestsResponse.quests) {
    const instances = allQuestsResponse.quests.instances
    instances.forEach((instance) => {
      state.instances[instance.id] = instance as QuestInstanceRequired
    })
    const subscription = client.subscribe({})

    const response = await subscription.next()

    if (!response.done) {
      if (response.value.subscribed) {
        console.log(`[@dcl/quests-client] subscription to updates was confirmed`)
        listenToSubscription(subscription).catch((e) => {
          console.error(`[@dcl/quests-client] Error while receiving updates: ${e}`)
        })
      } else {
        console.error(`[@dcl/quests-client] First message wasn't subscribe confirmation: ${response.value}`)
        connection.close()
        throw new Error('[@dcl/quests-client] Connection broken')
      }
    } else {
      console.error(`[@dcl/quests-client] Error while subscribing to updates: ${response.value}`)
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
  instances: Record<string, QuestInstanceRequired>
  processingEvents: Array<{ eventId: string; action: Action }>
  onStarted: Array<OnStartedCallback>
  onUpdate: Array<OnUpdateCallback>
}

type Required<T> = T & {
  [P in keyof T]: NonNullable<T[P]>
}

export type QuestInstanceRequired = Required<QuestInstance>

export type OnStartedCallback = (instance: QuestInstanceRequired) => void
export type OnUpdateCallback = (instance: QuestInstanceRequired) => void
