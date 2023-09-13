import { Action, Quest, Step, Task } from './protocol/decentraland/quests/definitions.gen'

export type RawQuest = Omit<Quest, 'id' | 'creatorAddress' | 'active' | 'createdAt'>

export type CreateQuest = Partial<RawQuest> & {
  reward?: {
    hook: {
      webhookUrl: string
      requestBody?: Record<string, string>
    }
    items: { name: string; imageLink: string }[]
  }
}

export const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm

export function validateStep(step: Partial<Step>): boolean {
  if (!step?.id?.length) {
    throw new Error(`Step: ${JSON.stringify(step)} is missing an ID`)
  }

  if (!step?.description?.length) {
    throw new Error(`Step: ${step.id} is missing its description`)
  }

  if (!step.tasks?.length || !Array.isArray(step.tasks)) {
    throw new Error(`Step: ${step.id} contains invalid tasks`)
  }

  const ids = new Set()

  for (const task of step.tasks) {
    validateTask(task)

    if (ids.has(task.id)) {
      throw new Error(`${step.id} is repeated. Each Task's id must be unique`)
    } else {
      ids.add(task.id)
    }
  }

  return true
}

export function validateTask(task: Partial<Task>): boolean {
  if (!task?.id?.length) {
    throw new Error(`Task: ${JSON.stringify(task)} is missing an ID`)
  }

  if (!task?.description?.length) {
    throw new Error(`Task: ${task.id} is missing its description`)
  }

  if (!task?.actionItems?.length || !Array.isArray(task.actionItems)) {
    throw new Error(`Task: ${task.id} contains invalid action items`)
  }

  for (const at of task.actionItems) {
    validateActionItem(at)
  }

  return true
}

export function validateActionItem(action: Partial<Action>): boolean {
  switch (action.type) {
    case 'CUSTOM': {
      const keys = Object.keys(action.parameters || {})
      if (!keys.length) {
        throw new Error(`Custom Action must contain at least an ID parameter`)
      }
      return true
    }
    case 'LOCATION': {
      const keys = Object.keys(action.parameters || {})
      if (!keys.includes('X') || !keys.includes('Y')) {
        throw new Error(`Location Action must contain X and Y parameters`)
      }
      return true
    }
    case 'EMOTE': {
      const keys = Object.keys(action.parameters || {})
      if (!keys.includes('X') || !keys.includes('Y') || !keys.includes('id')) {
        throw new Error(`Emote Action must contain X, Y, and ID parameters`)
      }
      return true
    }
    case 'JUMP': {
      const keys = Object.keys(action.parameters || {})
      if (!keys.includes('X') || !keys.includes('Y')) {
        throw new Error(`Jump Action must contain X, Y, and ID parameters`)
      }
      return true
    }
    default:
      throw new Error(`Invalid Action: ${JSON.stringify(action)}`)
  }
}

export function validateStepsAndConnections(quest: Pick<CreateQuest, 'definition'>): boolean {
  if (!quest.definition) {
    throw new Error('Quest must have a definition')
  }

  if (!quest.definition.connections?.length || !Array.isArray(quest.definition.connections)) {
    throw new Error("Quest's definition must have its connections defined")
  }

  if (!quest.definition.connections.every((connection) => connection.stepFrom?.length && connection.stepTo?.length)) {
    throw new Error("Quest's definition must have valid connections")
  }

  if (!quest.definition.steps?.length || !Array.isArray(quest.definition.steps)) {
    throw new Error("Quest's definition must have its steps defined")
  }

  const ids = new Set()
  for (const step of quest.definition.steps) {
    validateStep(step)
    if (ids.has(step.id)) {
      throw new Error(`${step.id} is repeated. Each Step's id must be unique`)
    } else {
      ids.add(step.id)
    }
  }

  return true
}

export function validateCreateQuest(quest: CreateQuest): boolean {
  if (!quest.name || !(quest.name.length >= 5)) {
    throw new Error("Quest's name must be at least 5 chars")
  }

  if (!quest.description || !(quest.description.length >= 5)) {
    throw new Error("Quest's description must be at least 5 chars")
  }

  if (!quest.imageUrl?.length || !new RegExp(urlRegex).test(quest.imageUrl)) {
    throw new Error("Quest's image URL must be a valid URL")
  }

  validateStepsAndConnections(quest)

  if (quest.reward) {
    if (!quest.reward.hook) {
      throw new Error("Quest's reward must have its webhook defined")
    } else {
      if (
        !quest.reward.hook.webhookUrl ||
        !quest.reward.hook.webhookUrl?.length ||
        !new RegExp(urlRegex).test(quest.reward.hook.webhookUrl)
      ) {
        throw new Error("Quest's reward must have a valid Webhook URL")
      }
    }

    if (!quest.reward.items || !quest.reward.items?.length || !Array.isArray(quest.reward.items)) {
      throw new Error("Quest's reward must have its items defined")
    }

    if (
      !quest.reward.items.every((item) => new RegExp(urlRegex).test(item.imageLink || '') && item.name?.length >= 3)
    ) {
      throw new Error("Quest's reward must have valid items")
    }
  }

  return true
}
