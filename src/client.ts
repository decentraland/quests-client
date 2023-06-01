import { loadService, RpcClientModule } from '@dcl/rpc/dist/codegen'
import { createRpcClient } from '@dcl/rpc'
import { WebSocketTransport } from '@dcl/rpc/dist/transports/WebSocket'
import deepEqual from 'deep-equal'
import { Action, Quest, QuestsServiceDefinition, QuestState } from './protocol/quests'
import { getHeaders } from '~system/SignedFetch'

/**
 * @param wsUrl - WebSocket URL to connect to the Quests server, example: `wss://quests-rpc.decentraland.{env}`
 * @returns a Quests client that can be used to interact with the server
 */
export async function createQuestsClient(wsUrl: string) {
  async function subscribe() {
    for await (const update of client.subscribe({})) {
      console.log(`[@dcl/quests-client] update received ${update}`)
      if (update.eventIgnored) {
        // TODO: eventIgnored should be a string, .proto is outdated and server is not sending this event yet
        state.processingEvents = state.processingEvents.filter(
          (event) => event.eventId === update.eventIgnored?.toString()
        )
      }

      const questUpdate = update.questStateUpdate
      const newQuest = update.newQuestStarted
      if (newQuest && newQuest.questState) {
        // TODO: check if server should send definition here
        const id = newQuest.questInstanceId
        state.instances[id] = {
          id,
          quest: { name: newQuest.name, description: newQuest.description, definition: undefined },
          state: newQuest.questState
        }
        state.onStarted.forEach((callback) => callback(state.instances[id]))
      } else if (questUpdate && questUpdate.questData) {
        const questData = questUpdate.questData
        if (questData && questData.questState && questData.questInstanceId) {
          const eventId = update.questStateUpdate?.eventId
          state.processingEvents = state.processingEvents.filter((event) => event.eventId !== eventId)

          const { questState, questInstanceId } = questData
          state.instances[questInstanceId].state = questState

          state.onUpdate.forEach((callback) => callback(state.instances[questInstanceId]))
        }
      }
    }
  }

  function isActionValidForQuestStates(action: Action) {
    if (state.processingEvents.some((event) => event.action === action)) {
      return false
    }

    const match = (actionItem: Action) => deepEqual(actionItem, action)
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
    if (event.action && eventResponse.acceptedEventId) {
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

  const state: ClientState = {
    instances: {},
    processingEvents: [],
    onStarted: [],
    onUpdate: []
  }

  const client = await createClient(wsUrl)
  const { startQuest, abortQuest } = client
  const response = await client.getAllQuests({})
  if (response.internalServerError) {
    console.error(`[Quests Client] Error while fetching quests: ${response.internalServerError}`)
    throw new Error(`Couldn't not initialize Quests client`)
  } else if (response.quests) {
    const quests = response.quests.quests
    quests.forEach((quest) => {
      if (quest.quest && quest.state) {
        state.instances[quest.instanceId] = {
          id: quest.instanceId,
          quest: quest.quest,
          state: quest.state
        }
      }
    })
  }

  subscribe().catch((e) => {
    console.error(`[Quests Client] Error while receiving updates: ${e}`)
  })

  return {
    getInstances,
    startQuest,
    abortQuest,
    sendEvent,
    onStarted,
    onUpdate
  }
}

async function createClient(wsUrl: string): Promise<RpcClientModule<QuestsServiceDefinition>> {
  const ws = new WebSocket(wsUrl)
  return new Promise((resolve, reject) => {
    ws.onopen = async () => {
      const headers = await getHeaders({ url: '/' })
      ws.send(JSON.stringify(headers))

      const transport = WebSocketTransport(ws as any)
      const rpcClient = await createRpcClient(transport)
      const port = await rpcClient.createPort('quests-client')
      const client = loadService<NonNullable<unknown>, QuestsServiceDefinition>(port, QuestsServiceDefinition)
      resolve(client)
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
