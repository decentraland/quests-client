/* eslint-disable */
import _m0 from "protobufjs/minimal"

export const protobufPackage = "decentraland.quests"

/** This is living here during the PoC. After that, this must be downloaded from the protocol repo on Decentraland Github */

export interface UserAddress {
  userAddress: string
}

export interface StartQuestRequest {
  userAddress: string
  questId: string
}

export interface StartQuestResponse {
  /**
   * There are a few valid reasons to not be accepted:
   *  - Quest is not found
   *  - Quest is deactivated (the owner deleted it)
   *  - User already started the quest
   *  - Internal errors (DB connection failed or something like that)
   */
  accepted: boolean
}

export interface AbortQuestRequest {
  userAddress: string
  questInstanceId: string
}

export interface AbortQuestResponse {
  /**
   * There are a few valid reasons to not be accepted:
   *  - Quest instance is not found
   *  - Quest instance is from another user
   *  - Quest instance already aborted
   *  - Internal errors (DB connection failed or something like that)
   */
  accepted: boolean
}

export interface Event {
  address: string
  action: Action | undefined
}

export interface EventResponse {
  eventId?: number | undefined
  accepted: boolean
}

export interface QuestDefinition {
  steps: Step[]
  /**
   * / Connections between steps
   * /
   * / First position in the tuple is for `from` and second one `to`
   */
  connections: Connection[]
}

export interface Connection {
  stepFrom: string
  stepTo: string
}

export interface Step {
  id: string
  description: string
  tasks: Task[]
  /** / Allow hooks on every completed step */
  onCompleteHook?: string | undefined
}

export interface Action {
  type: string
  parameters: { [key: string]: string }
}

export interface Action_ParametersEntry {
  key: string
  value: string
}

export interface Task {
  id: string
  description?: string | undefined
  actionItems: Action[]
}

export interface StepContent {
  toDos: Task[]
  tasksCompleted: Task[]
}

export interface QuestState {
  currentSteps: { [key: string]: StepContent }
  stepsLeft: number
  stepsCompleted: string[]
  requiredSteps: string[]
}

export interface QuestState_CurrentStepsEntry {
  key: string
  value: StepContent | undefined
}

export interface QuestStateUpdate {
  questInstanceId: string
  name: string
  description: string
  questState: QuestState | undefined
}

export interface UserUpdate {
  questState?: QuestStateUpdate | undefined
  eventIgnored?: number | undefined
}

function createBaseUserAddress(): UserAddress {
  return { userAddress: "" }
}

export const UserAddress = {
  encode(message: UserAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUserAddress()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.userAddress = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): UserAddress {
    return { userAddress: isSet(object.userAddress) ? String(object.userAddress) : "" }
  },

  toJSON(message: UserAddress): unknown {
    const obj: any = {}
    message.userAddress !== undefined && (obj.userAddress = message.userAddress)
    return obj
  },

  create<I extends Exact<DeepPartial<UserAddress>, I>>(base?: I): UserAddress {
    return UserAddress.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<UserAddress>, I>>(object: I): UserAddress {
    const message = createBaseUserAddress()
    message.userAddress = object.userAddress ?? ""
    return message
  },
}

function createBaseStartQuestRequest(): StartQuestRequest {
  return { userAddress: "", questId: "" }
}

export const StartQuestRequest = {
  encode(message: StartQuestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress)
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartQuestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseStartQuestRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.userAddress = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.questId = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): StartQuestRequest {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      questId: isSet(object.questId) ? String(object.questId) : "",
    }
  },

  toJSON(message: StartQuestRequest): unknown {
    const obj: any = {}
    message.userAddress !== undefined && (obj.userAddress = message.userAddress)
    message.questId !== undefined && (obj.questId = message.questId)
    return obj
  },

  create<I extends Exact<DeepPartial<StartQuestRequest>, I>>(base?: I): StartQuestRequest {
    return StartQuestRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<StartQuestRequest>, I>>(object: I): StartQuestRequest {
    const message = createBaseStartQuestRequest()
    message.userAddress = object.userAddress ?? ""
    message.questId = object.questId ?? ""
    return message
  },
}

function createBaseStartQuestResponse(): StartQuestResponse {
  return { accepted: false }
}

export const StartQuestResponse = {
  encode(message: StartQuestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accepted === true) {
      writer.uint32(8).bool(message.accepted)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartQuestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseStartQuestResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break
          }

          message.accepted = reader.bool()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): StartQuestResponse {
    return { accepted: isSet(object.accepted) ? Boolean(object.accepted) : false }
  },

  toJSON(message: StartQuestResponse): unknown {
    const obj: any = {}
    message.accepted !== undefined && (obj.accepted = message.accepted)
    return obj
  },

  create<I extends Exact<DeepPartial<StartQuestResponse>, I>>(base?: I): StartQuestResponse {
    return StartQuestResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<StartQuestResponse>, I>>(object: I): StartQuestResponse {
    const message = createBaseStartQuestResponse()
    message.accepted = object.accepted ?? false
    return message
  },
}

function createBaseAbortQuestRequest(): AbortQuestRequest {
  return { userAddress: "", questInstanceId: "" }
}

export const AbortQuestRequest = {
  encode(message: AbortQuestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress)
    }
    if (message.questInstanceId !== "") {
      writer.uint32(18).string(message.questInstanceId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbortQuestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAbortQuestRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.userAddress = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.questInstanceId = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AbortQuestRequest {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      questInstanceId: isSet(object.questInstanceId) ? String(object.questInstanceId) : "",
    }
  },

  toJSON(message: AbortQuestRequest): unknown {
    const obj: any = {}
    message.userAddress !== undefined && (obj.userAddress = message.userAddress)
    message.questInstanceId !== undefined && (obj.questInstanceId = message.questInstanceId)
    return obj
  },

  create<I extends Exact<DeepPartial<AbortQuestRequest>, I>>(base?: I): AbortQuestRequest {
    return AbortQuestRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<AbortQuestRequest>, I>>(object: I): AbortQuestRequest {
    const message = createBaseAbortQuestRequest()
    message.userAddress = object.userAddress ?? ""
    message.questInstanceId = object.questInstanceId ?? ""
    return message
  },
}

function createBaseAbortQuestResponse(): AbortQuestResponse {
  return { accepted: false }
}

export const AbortQuestResponse = {
  encode(message: AbortQuestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accepted === true) {
      writer.uint32(8).bool(message.accepted)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbortQuestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAbortQuestResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break
          }

          message.accepted = reader.bool()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AbortQuestResponse {
    return { accepted: isSet(object.accepted) ? Boolean(object.accepted) : false }
  },

  toJSON(message: AbortQuestResponse): unknown {
    const obj: any = {}
    message.accepted !== undefined && (obj.accepted = message.accepted)
    return obj
  },

  create<I extends Exact<DeepPartial<AbortQuestResponse>, I>>(base?: I): AbortQuestResponse {
    return AbortQuestResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<AbortQuestResponse>, I>>(object: I): AbortQuestResponse {
    const message = createBaseAbortQuestResponse()
    message.accepted = object.accepted ?? false
    return message
  },
}

function createBaseEvent(): Event {
  return { address: "", action: undefined }
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address)
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEvent()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.address = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.action = Action.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Event {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
    }
  },

  toJSON(message: Event): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent()
    message.address = object.address ?? ""
    message.action =
      object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined
    return message
  },
}

function createBaseEventResponse(): EventResponse {
  return { eventId: undefined, accepted: false }
}

export const EventResponse = {
  encode(message: EventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== undefined) {
      writer.uint32(13).fixed32(message.eventId)
    }
    if (message.accepted === true) {
      writer.uint32(16).bool(message.accepted)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break
          }

          message.eventId = reader.fixed32()
          continue
        case 2:
          if (tag != 16) {
            break
          }

          message.accepted = reader.bool()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventResponse {
    return {
      eventId: isSet(object.eventId) ? Number(object.eventId) : undefined,
      accepted: isSet(object.accepted) ? Boolean(object.accepted) : false,
    }
  },

  toJSON(message: EventResponse): unknown {
    const obj: any = {}
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId))
    message.accepted !== undefined && (obj.accepted = message.accepted)
    return obj
  },

  create<I extends Exact<DeepPartial<EventResponse>, I>>(base?: I): EventResponse {
    return EventResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventResponse>, I>>(object: I): EventResponse {
    const message = createBaseEventResponse()
    message.eventId = object.eventId ?? undefined
    message.accepted = object.accepted ?? false
    return message
  },
}

function createBaseQuestDefinition(): QuestDefinition {
  return { steps: [], connections: [] }
}

export const QuestDefinition = {
  encode(message: QuestDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.steps) {
      Step.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.connections) {
      Connection.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuestDefinition()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.steps.push(Step.decode(reader, reader.uint32()))
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.connections.push(Connection.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuestDefinition {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => Step.fromJSON(e)) : [],
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => Connection.fromJSON(e)) : [],
    }
  },

  toJSON(message: QuestDefinition): unknown {
    const obj: any = {}
    if (message.steps) {
      obj.steps = message.steps.map((e) => (e ? Step.toJSON(e) : undefined))
    } else {
      obj.steps = []
    }
    if (message.connections) {
      obj.connections = message.connections.map((e) => (e ? Connection.toJSON(e) : undefined))
    } else {
      obj.connections = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QuestDefinition>, I>>(base?: I): QuestDefinition {
    return QuestDefinition.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuestDefinition>, I>>(object: I): QuestDefinition {
    const message = createBaseQuestDefinition()
    message.steps = object.steps?.map((e) => Step.fromPartial(e)) || []
    message.connections = object.connections?.map((e) => Connection.fromPartial(e)) || []
    return message
  },
}

function createBaseConnection(): Connection {
  return { stepFrom: "", stepTo: "" }
}

export const Connection = {
  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stepFrom !== "") {
      writer.uint32(10).string(message.stepFrom)
    }
    if (message.stepTo !== "") {
      writer.uint32(18).string(message.stepTo)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseConnection()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.stepFrom = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.stepTo = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Connection {
    return {
      stepFrom: isSet(object.stepFrom) ? String(object.stepFrom) : "",
      stepTo: isSet(object.stepTo) ? String(object.stepTo) : "",
    }
  },

  toJSON(message: Connection): unknown {
    const obj: any = {}
    message.stepFrom !== undefined && (obj.stepFrom = message.stepFrom)
    message.stepTo !== undefined && (obj.stepTo = message.stepTo)
    return obj
  },

  create<I extends Exact<DeepPartial<Connection>, I>>(base?: I): Connection {
    return Connection.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
    const message = createBaseConnection()
    message.stepFrom = object.stepFrom ?? ""
    message.stepTo = object.stepTo ?? ""
    return message
  },
}

function createBaseStep(): Step {
  return { id: "", description: "", tasks: [], onCompleteHook: undefined }
}

export const Step = {
  encode(message: Step, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id)
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description)
    }
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.onCompleteHook !== undefined) {
      writer.uint32(34).string(message.onCompleteHook)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Step {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseStep()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.id = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.description = reader.string()
          continue
        case 3:
          if (tag != 26) {
            break
          }

          message.tasks.push(Task.decode(reader, reader.uint32()))
          continue
        case 4:
          if (tag != 34) {
            break
          }

          message.onCompleteHook = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Step {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tasks: Array.isArray(object?.tasks) ? object.tasks.map((e: any) => Task.fromJSON(e)) : [],
      onCompleteHook: isSet(object.onCompleteHook) ? String(object.onCompleteHook) : undefined,
    }
  },

  toJSON(message: Step): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.description !== undefined && (obj.description = message.description)
    if (message.tasks) {
      obj.tasks = message.tasks.map((e) => (e ? Task.toJSON(e) : undefined))
    } else {
      obj.tasks = []
    }
    message.onCompleteHook !== undefined && (obj.onCompleteHook = message.onCompleteHook)
    return obj
  },

  create<I extends Exact<DeepPartial<Step>, I>>(base?: I): Step {
    return Step.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Step>, I>>(object: I): Step {
    const message = createBaseStep()
    message.id = object.id ?? ""
    message.description = object.description ?? ""
    message.tasks = object.tasks?.map((e) => Task.fromPartial(e)) || []
    message.onCompleteHook = object.onCompleteHook ?? undefined
    return message
  },
}

function createBaseAction(): Action {
  return { type: "", parameters: {} }
}

export const Action = {
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type)
    }
    Object.entries(message.parameters).forEach(([key, value]) => {
      Action_ParametersEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim()
    })
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAction()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.type = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          const entry2 = Action_ParametersEntry.decode(reader, reader.uint32())
          if (entry2.value !== undefined) {
            message.parameters[entry2.key] = entry2.value
          }
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Action {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      parameters: isObject(object.parameters)
        ? Object.entries(object.parameters).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value)
          return acc
        }, {})
        : {},
    }
  },

  toJSON(message: Action): unknown {
    const obj: any = {}
    message.type !== undefined && (obj.type = message.type)
    obj.parameters = {}
    if (message.parameters) {
      Object.entries(message.parameters).forEach(([k, v]) => {
        obj.parameters[k] = v
      })
    }
    return obj
  },

  create<I extends Exact<DeepPartial<Action>, I>>(base?: I): Action {
    return Action.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction()
    message.type = object.type ?? ""
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value)
        }
        return acc
      },
      {}
    )
    return message
  },
}

function createBaseAction_ParametersEntry(): Action_ParametersEntry {
  return { key: "", value: "" }
}

export const Action_ParametersEntry = {
  encode(message: Action_ParametersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_ParametersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAction_ParametersEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.key = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.value = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Action_ParametersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" }
  },

  toJSON(message: Action_ParametersEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  create<I extends Exact<DeepPartial<Action_ParametersEntry>, I>>(base?: I): Action_ParametersEntry {
    return Action_ParametersEntry.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Action_ParametersEntry>, I>>(object: I): Action_ParametersEntry {
    const message = createBaseAction_ParametersEntry()
    message.key = object.key ?? ""
    message.value = object.value ?? ""
    return message
  },
}

function createBaseTask(): Task {
  return { id: "", description: undefined, actionItems: [] }
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id)
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description)
    }
    for (const v of message.actionItems) {
      Action.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseTask()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.id = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.description = reader.string()
          continue
        case 3:
          if (tag != 26) {
            break
          }

          message.actionItems.push(Action.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Task {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      actionItems: Array.isArray(object?.actionItems) ? object.actionItems.map((e: any) => Action.fromJSON(e)) : [],
    }
  },

  toJSON(message: Task): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.description !== undefined && (obj.description = message.description)
    if (message.actionItems) {
      obj.actionItems = message.actionItems.map((e) => (e ? Action.toJSON(e) : undefined))
    } else {
      obj.actionItems = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<Task>, I>>(base?: I): Task {
    return Task.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask()
    message.id = object.id ?? ""
    message.description = object.description ?? undefined
    message.actionItems = object.actionItems?.map((e) => Action.fromPartial(e)) || []
    return message
  },
}

function createBaseStepContent(): StepContent {
  return { toDos: [], tasksCompleted: [] }
}

export const StepContent = {
  encode(message: StepContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.toDos) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.tasksCompleted) {
      Task.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StepContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseStepContent()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.toDos.push(Task.decode(reader, reader.uint32()))
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.tasksCompleted.push(Task.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): StepContent {
    return {
      toDos: Array.isArray(object?.toDos) ? object.toDos.map((e: any) => Task.fromJSON(e)) : [],
      tasksCompleted: Array.isArray(object?.tasksCompleted)
        ? object.tasksCompleted.map((e: any) => Task.fromJSON(e))
        : [],
    }
  },

  toJSON(message: StepContent): unknown {
    const obj: any = {}
    if (message.toDos) {
      obj.toDos = message.toDos.map((e) => (e ? Task.toJSON(e) : undefined))
    } else {
      obj.toDos = []
    }
    if (message.tasksCompleted) {
      obj.tasksCompleted = message.tasksCompleted.map((e) => (e ? Task.toJSON(e) : undefined))
    } else {
      obj.tasksCompleted = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<StepContent>, I>>(base?: I): StepContent {
    return StepContent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<StepContent>, I>>(object: I): StepContent {
    const message = createBaseStepContent()
    message.toDos = object.toDos?.map((e) => Task.fromPartial(e)) || []
    message.tasksCompleted = object.tasksCompleted?.map((e) => Task.fromPartial(e)) || []
    return message
  },
}

function createBaseQuestState(): QuestState {
  return { currentSteps: {}, stepsLeft: 0, stepsCompleted: [], requiredSteps: [] }
}

export const QuestState = {
  encode(message: QuestState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.currentSteps).forEach(([key, value]) => {
      QuestState_CurrentStepsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim()
    })
    if (message.stepsLeft !== 0) {
      writer.uint32(29).fixed32(message.stepsLeft)
    }
    for (const v of message.stepsCompleted) {
      writer.uint32(34).string(v!)
    }
    for (const v of message.requiredSteps) {
      writer.uint32(42).string(v!)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuestState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break
          }

          const entry2 = QuestState_CurrentStepsEntry.decode(reader, reader.uint32())
          if (entry2.value !== undefined) {
            message.currentSteps[entry2.key] = entry2.value
          }
          continue
        case 3:
          if (tag != 29) {
            break
          }

          message.stepsLeft = reader.fixed32()
          continue
        case 4:
          if (tag != 34) {
            break
          }

          message.stepsCompleted.push(reader.string())
          continue
        case 5:
          if (tag != 42) {
            break
          }

          message.requiredSteps.push(reader.string())
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuestState {
    return {
      currentSteps: isObject(object.currentSteps)
        ? Object.entries(object.currentSteps).reduce<{ [key: string]: StepContent }>((acc, [key, value]) => {
          acc[key] = StepContent.fromJSON(value)
          return acc
        }, {})
        : {},
      stepsLeft: isSet(object.stepsLeft) ? Number(object.stepsLeft) : 0,
      stepsCompleted: Array.isArray(object?.stepsCompleted) ? object.stepsCompleted.map((e: any) => String(e)) : [],
      requiredSteps: Array.isArray(object?.requiredSteps) ? object.requiredSteps.map((e: any) => String(e)) : [],
    }
  },

  toJSON(message: QuestState): unknown {
    const obj: any = {}
    obj.currentSteps = {}
    if (message.currentSteps) {
      Object.entries(message.currentSteps).forEach(([k, v]) => {
        obj.currentSteps[k] = StepContent.toJSON(v)
      })
    }
    message.stepsLeft !== undefined && (obj.stepsLeft = Math.round(message.stepsLeft))
    if (message.stepsCompleted) {
      obj.stepsCompleted = message.stepsCompleted.map((e) => e)
    } else {
      obj.stepsCompleted = []
    }
    if (message.requiredSteps) {
      obj.requiredSteps = message.requiredSteps.map((e) => e)
    } else {
      obj.requiredSteps = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QuestState>, I>>(base?: I): QuestState {
    return QuestState.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuestState>, I>>(object: I): QuestState {
    const message = createBaseQuestState()
    message.currentSteps = Object.entries(object.currentSteps ?? {}).reduce<{ [key: string]: StepContent }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = StepContent.fromPartial(value)
        }
        return acc
      },
      {}
    )
    message.stepsLeft = object.stepsLeft ?? 0
    message.stepsCompleted = object.stepsCompleted?.map((e) => e) || []
    message.requiredSteps = object.requiredSteps?.map((e) => e) || []
    return message
  },
}

function createBaseQuestState_CurrentStepsEntry(): QuestState_CurrentStepsEntry {
  return { key: "", value: undefined }
}

export const QuestState_CurrentStepsEntry = {
  encode(message: QuestState_CurrentStepsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== undefined) {
      StepContent.encode(message.value, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestState_CurrentStepsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuestState_CurrentStepsEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.key = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.value = StepContent.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuestState_CurrentStepsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? StepContent.fromJSON(object.value) : undefined,
    }
  },

  toJSON(message: QuestState_CurrentStepsEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined && (obj.value = message.value ? StepContent.toJSON(message.value) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QuestState_CurrentStepsEntry>, I>>(base?: I): QuestState_CurrentStepsEntry {
    return QuestState_CurrentStepsEntry.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuestState_CurrentStepsEntry>, I>>(object: I): QuestState_CurrentStepsEntry {
    const message = createBaseQuestState_CurrentStepsEntry()
    message.key = object.key ?? ""
    message.value =
      object.value !== undefined && object.value !== null ? StepContent.fromPartial(object.value) : undefined
    return message
  },
}

function createBaseQuestStateUpdate(): QuestStateUpdate {
  return { questInstanceId: "", name: "", description: "", questState: undefined }
}

export const QuestStateUpdate = {
  encode(message: QuestStateUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questInstanceId !== "") {
      writer.uint32(10).string(message.questInstanceId)
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name)
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description)
    }
    if (message.questState !== undefined) {
      QuestState.encode(message.questState, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestStateUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuestStateUpdate()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.questInstanceId = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.name = reader.string()
          continue
        case 3:
          if (tag != 26) {
            break
          }

          message.description = reader.string()
          continue
        case 4:
          if (tag != 34) {
            break
          }

          message.questState = QuestState.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuestStateUpdate {
    return {
      questInstanceId: isSet(object.questInstanceId) ? String(object.questInstanceId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      questState: isSet(object.questState) ? QuestState.fromJSON(object.questState) : undefined,
    }
  },

  toJSON(message: QuestStateUpdate): unknown {
    const obj: any = {}
    message.questInstanceId !== undefined && (obj.questInstanceId = message.questInstanceId)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.questState !== undefined &&
      (obj.questState = message.questState ? QuestState.toJSON(message.questState) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QuestStateUpdate>, I>>(base?: I): QuestStateUpdate {
    return QuestStateUpdate.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuestStateUpdate>, I>>(object: I): QuestStateUpdate {
    const message = createBaseQuestStateUpdate()
    message.questInstanceId = object.questInstanceId ?? ""
    message.name = object.name ?? ""
    message.description = object.description ?? ""
    message.questState =
      object.questState !== undefined && object.questState !== null
        ? QuestState.fromPartial(object.questState)
        : undefined
    return message
  },
}

function createBaseUserUpdate(): UserUpdate {
  return { questState: undefined, eventIgnored: undefined }
}

export const UserUpdate = {
  encode(message: UserUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questState !== undefined) {
      QuestStateUpdate.encode(message.questState, writer.uint32(10).fork()).ldelim()
    }
    if (message.eventIgnored !== undefined) {
      writer.uint32(21).fixed32(message.eventIgnored)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUserUpdate()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.questState = QuestStateUpdate.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag != 21) {
            break
          }

          message.eventIgnored = reader.fixed32()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): UserUpdate {
    return {
      questState: isSet(object.questState) ? QuestStateUpdate.fromJSON(object.questState) : undefined,
      eventIgnored: isSet(object.eventIgnored) ? Number(object.eventIgnored) : undefined,
    }
  },

  toJSON(message: UserUpdate): unknown {
    const obj: any = {}
    message.questState !== undefined &&
      (obj.questState = message.questState ? QuestStateUpdate.toJSON(message.questState) : undefined)
    message.eventIgnored !== undefined && (obj.eventIgnored = Math.round(message.eventIgnored))
    return obj
  },

  create<I extends Exact<DeepPartial<UserUpdate>, I>>(base?: I): UserUpdate {
    return UserUpdate.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<UserUpdate>, I>>(object: I): UserUpdate {
    const message = createBaseUserUpdate()
    message.questState =
      object.questState !== undefined && object.questState !== null
        ? QuestStateUpdate.fromPartial(object.questState)
        : undefined
    message.eventIgnored = object.eventIgnored ?? undefined
    return message
  },
}

export type QuestsServiceDefinition = typeof QuestsServiceDefinition
export const QuestsServiceDefinition = {
  name: "QuestsService",
  fullName: "decentraland.quests.QuestsService",
  methods: {
    /** User actions */
    startQuest: {
      name: "StartQuest",
      requestType: StartQuestRequest,
      requestStream: false,
      responseType: StartQuestResponse,
      responseStream: false,
      options: {},
    },
    abortQuest: {
      name: "AbortQuest",
      requestType: AbortQuestRequest,
      requestStream: false,
      responseType: AbortQuestResponse,
      responseStream: false,
      options: {},
    },
    sendEvent: {
      name: "SendEvent",
      requestType: Event,
      requestStream: false,
      responseType: EventResponse,
      responseStream: false,
      options: {},
    },
    /** Listen to changes in quest states and event processing updates */
    subscribe: {
      name: "Subscribe",
      requestType: UserAddress,
      requestStream: false,
      responseType: UserUpdate,
      responseStream: true,
      options: {},
    },
  },
} as const

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never }

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
