import { RpcClientModule } from "@dcl/rpc/dist/codegen"
import { QuestsServiceDefinition, QuestState, Action } from "./quests"

/**
 * @public
 */
export type QuestStates = Record<string, QuestState>
/**
 * @public
 */
export type StateUpdateCallback = (state: QuestStates) => void
/**
 * @public
 */
export interface StartClient {
  start: (userAddress: string) => Promise<QuestsClient>
}
/**
 * @public
 */
export type QuestsClient = RpcClientModule<QuestsServiceDefinition> & {
  // Listen to Quest State updates
  onQuestStateUpdate: (callback: StateUpdateCallback) => void
  // Check if an action would make progress in any quest
  checkAction: (action: Action) => boolean
}