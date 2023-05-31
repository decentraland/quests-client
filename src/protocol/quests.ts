/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "decentraland.quests";

/** This is living here during the PoC. After that, this must be downloaded from the protocol repo on Decentraland Github */

/** Errors */
export interface InvalidQuest {
}

export interface NotUUID {
}

export interface InternalServerError {
}

export interface NotFoundQuestInstance {
}

export interface NotOwner {
}

export interface IgnoredEvent {
}

export interface StartQuestRequest {
  questId: string;
}

export interface StartQuestResponse {
  accepted?: StartQuestResponse_Accepted | undefined;
  invalidQuest?: InvalidQuest | undefined;
  notUuidError?: NotUUID | undefined;
  internalServerError?: InternalServerError | undefined;
}

/**
 * There are a few valid reasons to not be accepted:
 *  - Quest is not found
 *  - Quest is deactivated (the owner deleted it)
 *  - User already started the quest
 *  - Internal errors (DB connection failed or something like that)
 */
export interface StartQuestResponse_Accepted {
}

export interface AbortQuestRequest {
  questInstanceId: string;
}

export interface AbortQuestResponse {
  accepted?: AbortQuestResponse_Accepted | undefined;
  notFoundQuestInstance?: NotFoundQuestInstance | undefined;
  notUuidError?: NotUUID | undefined;
  notOwner?: NotOwner | undefined;
  internalServerError?: InternalServerError | undefined;
}

/**
 * There are a few valid reasons to not be accepted:
 *  - Quest instance is not found
 *  - Quest instance is from another user
 *  - Quest instance already aborted
 *  - Internal errors (DB connection failed or something like that)
 */
export interface AbortQuestResponse_Accepted {
}

export interface Event {
  id: string;
  address: string;
  action: Action | undefined;
}

export interface EventRequest {
  action: Action | undefined;
}

export interface EventResponse {
  acceptedEventId?: string | undefined;
  ignoredEvent?: IgnoredEvent | undefined;
  internalServerError?: InternalServerError | undefined;
}

export interface QuestDefinition {
  steps: Step[];
  connections: Connection[];
}

export interface Connection {
  stepFrom: string;
  stepTo: string;
}

export interface Step {
  id: string;
  description: string;
  tasks: Task[];
}

export interface Action {
  type: string;
  parameters: { [key: string]: string };
}

export interface Action_ParametersEntry {
  key: string;
  value: string;
}

export interface Task {
  id: string;
  description: string;
  actionItems: Action[];
}

export interface StepContent {
  toDos: Task[];
  tasksCompleted: Task[];
}

export interface QuestState {
  currentSteps: { [key: string]: StepContent };
  stepsLeft: number;
  stepsCompleted: string[];
  requiredSteps: string[];
}

export interface QuestState_CurrentStepsEntry {
  key: string;
  value: StepContent | undefined;
}

export interface QuestStateWithData {
  questInstanceId: string;
  name: string;
  description: string;
  questState: QuestState | undefined;
}

export interface QuestStateUpdate {
  questData: QuestStateWithData | undefined;
  eventId: string;
}

export interface UserUpdate {
  questStateUpdate?: QuestStateUpdate | undefined;
  newQuestStarted?: QuestStateWithData | undefined;
  eventIgnored?: number | undefined;
}

export interface Quests {
  quests: QuestInstance[];
}

export interface GetAllQuestsResponse {
  quests?: Quests | undefined;
  internalServerError?: InternalServerError | undefined;
}

export interface Quest {
  name: string;
  description: string;
  definition: QuestDefinition | undefined;
}

export interface GetQuestDefinitionRequest {
  questId: string;
}

export interface GetQuestDefinitionResponse {
  quest?: Quest | undefined;
  internalServerError?: InternalServerError | undefined;
}

export interface QuestInstance {
  instanceId: string;
  quest: Quest | undefined;
  state: QuestState | undefined;
}

function createBaseInvalidQuest(): InvalidQuest {
  return {};
}

export const InvalidQuest = {
  encode(_: InvalidQuest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidQuest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): InvalidQuest {
    return {};
  },

  toJSON(_: InvalidQuest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<InvalidQuest>, I>>(base?: I): InvalidQuest {
    return InvalidQuest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InvalidQuest>, I>>(_: I): InvalidQuest {
    const message = createBaseInvalidQuest();
    return message;
  },
};

function createBaseNotUUID(): NotUUID {
  return {};
}

export const NotUUID = {
  encode(_: NotUUID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotUUID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotUUID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NotUUID {
    return {};
  },

  toJSON(_: NotUUID): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NotUUID>, I>>(base?: I): NotUUID {
    return NotUUID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotUUID>, I>>(_: I): NotUUID {
    const message = createBaseNotUUID();
    return message;
  },
};

function createBaseInternalServerError(): InternalServerError {
  return {};
}

export const InternalServerError = {
  encode(_: InternalServerError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalServerError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalServerError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): InternalServerError {
    return {};
  },

  toJSON(_: InternalServerError): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<InternalServerError>, I>>(base?: I): InternalServerError {
    return InternalServerError.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InternalServerError>, I>>(_: I): InternalServerError {
    const message = createBaseInternalServerError();
    return message;
  },
};

function createBaseNotFoundQuestInstance(): NotFoundQuestInstance {
  return {};
}

export const NotFoundQuestInstance = {
  encode(_: NotFoundQuestInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotFoundQuestInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotFoundQuestInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NotFoundQuestInstance {
    return {};
  },

  toJSON(_: NotFoundQuestInstance): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NotFoundQuestInstance>, I>>(base?: I): NotFoundQuestInstance {
    return NotFoundQuestInstance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotFoundQuestInstance>, I>>(_: I): NotFoundQuestInstance {
    const message = createBaseNotFoundQuestInstance();
    return message;
  },
};

function createBaseNotOwner(): NotOwner {
  return {};
}

export const NotOwner = {
  encode(_: NotOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotOwner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NotOwner {
    return {};
  },

  toJSON(_: NotOwner): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NotOwner>, I>>(base?: I): NotOwner {
    return NotOwner.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotOwner>, I>>(_: I): NotOwner {
    const message = createBaseNotOwner();
    return message;
  },
};

function createBaseIgnoredEvent(): IgnoredEvent {
  return {};
}

export const IgnoredEvent = {
  encode(_: IgnoredEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IgnoredEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIgnoredEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): IgnoredEvent {
    return {};
  },

  toJSON(_: IgnoredEvent): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<IgnoredEvent>, I>>(base?: I): IgnoredEvent {
    return IgnoredEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IgnoredEvent>, I>>(_: I): IgnoredEvent {
    const message = createBaseIgnoredEvent();
    return message;
  },
};

function createBaseStartQuestRequest(): StartQuestRequest {
  return { questId: "" };
}

export const StartQuestRequest = {
  encode(message: StartQuestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questId !== "") {
      writer.uint32(10).string(message.questId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartQuestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartQuestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.questId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartQuestRequest {
    return { questId: isSet(object.questId) ? String(object.questId) : "" };
  },

  toJSON(message: StartQuestRequest): unknown {
    const obj: any = {};
    message.questId !== undefined && (obj.questId = message.questId);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartQuestRequest>, I>>(base?: I): StartQuestRequest {
    return StartQuestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartQuestRequest>, I>>(object: I): StartQuestRequest {
    const message = createBaseStartQuestRequest();
    message.questId = object.questId ?? "";
    return message;
  },
};

function createBaseStartQuestResponse(): StartQuestResponse {
  return { accepted: undefined, invalidQuest: undefined, notUuidError: undefined, internalServerError: undefined };
}

export const StartQuestResponse = {
  encode(message: StartQuestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accepted !== undefined) {
      StartQuestResponse_Accepted.encode(message.accepted, writer.uint32(10).fork()).ldelim();
    }
    if (message.invalidQuest !== undefined) {
      InvalidQuest.encode(message.invalidQuest, writer.uint32(18).fork()).ldelim();
    }
    if (message.notUuidError !== undefined) {
      NotUUID.encode(message.notUuidError, writer.uint32(26).fork()).ldelim();
    }
    if (message.internalServerError !== undefined) {
      InternalServerError.encode(message.internalServerError, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartQuestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartQuestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accepted = StartQuestResponse_Accepted.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.invalidQuest = InvalidQuest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.notUuidError = NotUUID.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.internalServerError = InternalServerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartQuestResponse {
    return {
      accepted: isSet(object.accepted) ? StartQuestResponse_Accepted.fromJSON(object.accepted) : undefined,
      invalidQuest: isSet(object.invalidQuest) ? InvalidQuest.fromJSON(object.invalidQuest) : undefined,
      notUuidError: isSet(object.notUuidError) ? NotUUID.fromJSON(object.notUuidError) : undefined,
      internalServerError: isSet(object.internalServerError)
        ? InternalServerError.fromJSON(object.internalServerError)
        : undefined,
    };
  },

  toJSON(message: StartQuestResponse): unknown {
    const obj: any = {};
    message.accepted !== undefined &&
      (obj.accepted = message.accepted ? StartQuestResponse_Accepted.toJSON(message.accepted) : undefined);
    message.invalidQuest !== undefined &&
      (obj.invalidQuest = message.invalidQuest ? InvalidQuest.toJSON(message.invalidQuest) : undefined);
    message.notUuidError !== undefined &&
      (obj.notUuidError = message.notUuidError ? NotUUID.toJSON(message.notUuidError) : undefined);
    message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
      ? InternalServerError.toJSON(message.internalServerError)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartQuestResponse>, I>>(base?: I): StartQuestResponse {
    return StartQuestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartQuestResponse>, I>>(object: I): StartQuestResponse {
    const message = createBaseStartQuestResponse();
    message.accepted = (object.accepted !== undefined && object.accepted !== null)
      ? StartQuestResponse_Accepted.fromPartial(object.accepted)
      : undefined;
    message.invalidQuest = (object.invalidQuest !== undefined && object.invalidQuest !== null)
      ? InvalidQuest.fromPartial(object.invalidQuest)
      : undefined;
    message.notUuidError = (object.notUuidError !== undefined && object.notUuidError !== null)
      ? NotUUID.fromPartial(object.notUuidError)
      : undefined;
    message.internalServerError = (object.internalServerError !== undefined && object.internalServerError !== null)
      ? InternalServerError.fromPartial(object.internalServerError)
      : undefined;
    return message;
  },
};

function createBaseStartQuestResponse_Accepted(): StartQuestResponse_Accepted {
  return {};
}

export const StartQuestResponse_Accepted = {
  encode(_: StartQuestResponse_Accepted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartQuestResponse_Accepted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartQuestResponse_Accepted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): StartQuestResponse_Accepted {
    return {};
  },

  toJSON(_: StartQuestResponse_Accepted): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StartQuestResponse_Accepted>, I>>(base?: I): StartQuestResponse_Accepted {
    return StartQuestResponse_Accepted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartQuestResponse_Accepted>, I>>(_: I): StartQuestResponse_Accepted {
    const message = createBaseStartQuestResponse_Accepted();
    return message;
  },
};

function createBaseAbortQuestRequest(): AbortQuestRequest {
  return { questInstanceId: "" };
}

export const AbortQuestRequest = {
  encode(message: AbortQuestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questInstanceId !== "") {
      writer.uint32(10).string(message.questInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbortQuestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbortQuestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.questInstanceId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AbortQuestRequest {
    return { questInstanceId: isSet(object.questInstanceId) ? String(object.questInstanceId) : "" };
  },

  toJSON(message: AbortQuestRequest): unknown {
    const obj: any = {};
    message.questInstanceId !== undefined && (obj.questInstanceId = message.questInstanceId);
    return obj;
  },

  create<I extends Exact<DeepPartial<AbortQuestRequest>, I>>(base?: I): AbortQuestRequest {
    return AbortQuestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AbortQuestRequest>, I>>(object: I): AbortQuestRequest {
    const message = createBaseAbortQuestRequest();
    message.questInstanceId = object.questInstanceId ?? "";
    return message;
  },
};

function createBaseAbortQuestResponse(): AbortQuestResponse {
  return {
    accepted: undefined,
    notFoundQuestInstance: undefined,
    notUuidError: undefined,
    notOwner: undefined,
    internalServerError: undefined,
  };
}

export const AbortQuestResponse = {
  encode(message: AbortQuestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accepted !== undefined) {
      AbortQuestResponse_Accepted.encode(message.accepted, writer.uint32(10).fork()).ldelim();
    }
    if (message.notFoundQuestInstance !== undefined) {
      NotFoundQuestInstance.encode(message.notFoundQuestInstance, writer.uint32(18).fork()).ldelim();
    }
    if (message.notUuidError !== undefined) {
      NotUUID.encode(message.notUuidError, writer.uint32(26).fork()).ldelim();
    }
    if (message.notOwner !== undefined) {
      NotOwner.encode(message.notOwner, writer.uint32(34).fork()).ldelim();
    }
    if (message.internalServerError !== undefined) {
      InternalServerError.encode(message.internalServerError, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbortQuestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbortQuestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accepted = AbortQuestResponse_Accepted.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.notFoundQuestInstance = NotFoundQuestInstance.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.notUuidError = NotUUID.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.notOwner = NotOwner.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.internalServerError = InternalServerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AbortQuestResponse {
    return {
      accepted: isSet(object.accepted) ? AbortQuestResponse_Accepted.fromJSON(object.accepted) : undefined,
      notFoundQuestInstance: isSet(object.notFoundQuestInstance)
        ? NotFoundQuestInstance.fromJSON(object.notFoundQuestInstance)
        : undefined,
      notUuidError: isSet(object.notUuidError) ? NotUUID.fromJSON(object.notUuidError) : undefined,
      notOwner: isSet(object.notOwner) ? NotOwner.fromJSON(object.notOwner) : undefined,
      internalServerError: isSet(object.internalServerError)
        ? InternalServerError.fromJSON(object.internalServerError)
        : undefined,
    };
  },

  toJSON(message: AbortQuestResponse): unknown {
    const obj: any = {};
    message.accepted !== undefined &&
      (obj.accepted = message.accepted ? AbortQuestResponse_Accepted.toJSON(message.accepted) : undefined);
    message.notFoundQuestInstance !== undefined && (obj.notFoundQuestInstance = message.notFoundQuestInstance
      ? NotFoundQuestInstance.toJSON(message.notFoundQuestInstance)
      : undefined);
    message.notUuidError !== undefined &&
      (obj.notUuidError = message.notUuidError ? NotUUID.toJSON(message.notUuidError) : undefined);
    message.notOwner !== undefined && (obj.notOwner = message.notOwner ? NotOwner.toJSON(message.notOwner) : undefined);
    message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
      ? InternalServerError.toJSON(message.internalServerError)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AbortQuestResponse>, I>>(base?: I): AbortQuestResponse {
    return AbortQuestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AbortQuestResponse>, I>>(object: I): AbortQuestResponse {
    const message = createBaseAbortQuestResponse();
    message.accepted = (object.accepted !== undefined && object.accepted !== null)
      ? AbortQuestResponse_Accepted.fromPartial(object.accepted)
      : undefined;
    message.notFoundQuestInstance =
      (object.notFoundQuestInstance !== undefined && object.notFoundQuestInstance !== null)
        ? NotFoundQuestInstance.fromPartial(object.notFoundQuestInstance)
        : undefined;
    message.notUuidError = (object.notUuidError !== undefined && object.notUuidError !== null)
      ? NotUUID.fromPartial(object.notUuidError)
      : undefined;
    message.notOwner = (object.notOwner !== undefined && object.notOwner !== null)
      ? NotOwner.fromPartial(object.notOwner)
      : undefined;
    message.internalServerError = (object.internalServerError !== undefined && object.internalServerError !== null)
      ? InternalServerError.fromPartial(object.internalServerError)
      : undefined;
    return message;
  },
};

function createBaseAbortQuestResponse_Accepted(): AbortQuestResponse_Accepted {
  return {};
}

export const AbortQuestResponse_Accepted = {
  encode(_: AbortQuestResponse_Accepted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbortQuestResponse_Accepted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbortQuestResponse_Accepted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AbortQuestResponse_Accepted {
    return {};
  },

  toJSON(_: AbortQuestResponse_Accepted): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AbortQuestResponse_Accepted>, I>>(base?: I): AbortQuestResponse_Accepted {
    return AbortQuestResponse_Accepted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AbortQuestResponse_Accepted>, I>>(_: I): AbortQuestResponse_Accepted {
    const message = createBaseAbortQuestResponse_Accepted();
    return message;
  },
};

function createBaseEvent(): Event {
  return { id: "", address: "", action: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.action = Action.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.id = object.id ?? "";
    message.address = object.address ?? "";
    message.action = (object.action !== undefined && object.action !== null)
      ? Action.fromPartial(object.action)
      : undefined;
    return message;
  },
};

function createBaseEventRequest(): EventRequest {
  return { action: undefined };
}

export const EventRequest = {
  encode(message: EventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.action = Action.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRequest {
    return { action: isSet(object.action) ? Action.fromJSON(object.action) : undefined };
  },

  toJSON(message: EventRequest): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventRequest>, I>>(base?: I): EventRequest {
    return EventRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventRequest>, I>>(object: I): EventRequest {
    const message = createBaseEventRequest();
    message.action = (object.action !== undefined && object.action !== null)
      ? Action.fromPartial(object.action)
      : undefined;
    return message;
  },
};

function createBaseEventResponse(): EventResponse {
  return { acceptedEventId: undefined, ignoredEvent: undefined, internalServerError: undefined };
}

export const EventResponse = {
  encode(message: EventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acceptedEventId !== undefined) {
      writer.uint32(10).string(message.acceptedEventId);
    }
    if (message.ignoredEvent !== undefined) {
      IgnoredEvent.encode(message.ignoredEvent, writer.uint32(18).fork()).ldelim();
    }
    if (message.internalServerError !== undefined) {
      InternalServerError.encode(message.internalServerError, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.acceptedEventId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ignoredEvent = IgnoredEvent.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.internalServerError = InternalServerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventResponse {
    return {
      acceptedEventId: isSet(object.acceptedEventId) ? String(object.acceptedEventId) : undefined,
      ignoredEvent: isSet(object.ignoredEvent) ? IgnoredEvent.fromJSON(object.ignoredEvent) : undefined,
      internalServerError: isSet(object.internalServerError)
        ? InternalServerError.fromJSON(object.internalServerError)
        : undefined,
    };
  },

  toJSON(message: EventResponse): unknown {
    const obj: any = {};
    message.acceptedEventId !== undefined && (obj.acceptedEventId = message.acceptedEventId);
    message.ignoredEvent !== undefined &&
      (obj.ignoredEvent = message.ignoredEvent ? IgnoredEvent.toJSON(message.ignoredEvent) : undefined);
    message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
      ? InternalServerError.toJSON(message.internalServerError)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventResponse>, I>>(base?: I): EventResponse {
    return EventResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventResponse>, I>>(object: I): EventResponse {
    const message = createBaseEventResponse();
    message.acceptedEventId = object.acceptedEventId ?? undefined;
    message.ignoredEvent = (object.ignoredEvent !== undefined && object.ignoredEvent !== null)
      ? IgnoredEvent.fromPartial(object.ignoredEvent)
      : undefined;
    message.internalServerError = (object.internalServerError !== undefined && object.internalServerError !== null)
      ? InternalServerError.fromPartial(object.internalServerError)
      : undefined;
    return message;
  },
};

function createBaseQuestDefinition(): QuestDefinition {
  return { steps: [], connections: [] };
}

export const QuestDefinition = {
  encode(message: QuestDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.steps) {
      Step.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.connections) {
      Connection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.steps.push(Step.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.connections.push(Connection.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuestDefinition {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => Step.fromJSON(e)) : [],
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => Connection.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuestDefinition): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map((e) => e ? Step.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    if (message.connections) {
      obj.connections = message.connections.map((e) => e ? Connection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDefinition>, I>>(base?: I): QuestDefinition {
    return QuestDefinition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestDefinition>, I>>(object: I): QuestDefinition {
    const message = createBaseQuestDefinition();
    message.steps = object.steps?.map((e) => Step.fromPartial(e)) || [];
    message.connections = object.connections?.map((e) => Connection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConnection(): Connection {
  return { stepFrom: "", stepTo: "" };
}

export const Connection = {
  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stepFrom !== "") {
      writer.uint32(10).string(message.stepFrom);
    }
    if (message.stepTo !== "") {
      writer.uint32(18).string(message.stepTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.stepFrom = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.stepTo = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connection {
    return {
      stepFrom: isSet(object.stepFrom) ? String(object.stepFrom) : "",
      stepTo: isSet(object.stepTo) ? String(object.stepTo) : "",
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    message.stepFrom !== undefined && (obj.stepFrom = message.stepFrom);
    message.stepTo !== undefined && (obj.stepTo = message.stepTo);
    return obj;
  },

  create<I extends Exact<DeepPartial<Connection>, I>>(base?: I): Connection {
    return Connection.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
    const message = createBaseConnection();
    message.stepFrom = object.stepFrom ?? "";
    message.stepTo = object.stepTo ?? "";
    return message;
  },
};

function createBaseStep(): Step {
  return { id: "", description: "", tasks: [] };
}

export const Step = {
  encode(message: Step, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Step {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tasks.push(Task.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Step {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tasks: Array.isArray(object?.tasks) ? object.tasks.map((e: any) => Task.fromJSON(e)) : [],
    };
  },

  toJSON(message: Step): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    if (message.tasks) {
      obj.tasks = message.tasks.map((e) => e ? Task.toJSON(e) : undefined);
    } else {
      obj.tasks = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Step>, I>>(base?: I): Step {
    return Step.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Step>, I>>(object: I): Step {
    const message = createBaseStep();
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.tasks = object.tasks?.map((e) => Task.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAction(): Action {
  return { type: "", parameters: {} };
}

export const Action = {
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    Object.entries(message.parameters).forEach(([key, value]) => {
      Action_ParametersEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          const entry2 = Action_ParametersEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.parameters[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      parameters: isObject(object.parameters)
        ? Object.entries(object.parameters).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    obj.parameters = {};
    if (message.parameters) {
      Object.entries(message.parameters).forEach(([k, v]) => {
        obj.parameters[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action>, I>>(base?: I): Action {
    return Action.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.type = object.type ?? "";
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseAction_ParametersEntry(): Action_ParametersEntry {
  return { key: "", value: "" };
}

export const Action_ParametersEntry = {
  encode(message: Action_ParametersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_ParametersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_ParametersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_ParametersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Action_ParametersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_ParametersEntry>, I>>(base?: I): Action_ParametersEntry {
    return Action_ParametersEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_ParametersEntry>, I>>(object: I): Action_ParametersEntry {
    const message = createBaseAction_ParametersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTask(): Task {
  return { id: "", description: "", actionItems: [] };
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.actionItems) {
      Action.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.actionItems.push(Action.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Task {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      actionItems: Array.isArray(object?.actionItems) ? object.actionItems.map((e: any) => Action.fromJSON(e)) : [],
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    if (message.actionItems) {
      obj.actionItems = message.actionItems.map((e) => e ? Action.toJSON(e) : undefined);
    } else {
      obj.actionItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Task>, I>>(base?: I): Task {
    return Task.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask();
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.actionItems = object.actionItems?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStepContent(): StepContent {
  return { toDos: [], tasksCompleted: [] };
}

export const StepContent = {
  encode(message: StepContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.toDos) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tasksCompleted) {
      Task.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StepContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStepContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.toDos.push(Task.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tasksCompleted.push(Task.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StepContent {
    return {
      toDos: Array.isArray(object?.toDos) ? object.toDos.map((e: any) => Task.fromJSON(e)) : [],
      tasksCompleted: Array.isArray(object?.tasksCompleted)
        ? object.tasksCompleted.map((e: any) => Task.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StepContent): unknown {
    const obj: any = {};
    if (message.toDos) {
      obj.toDos = message.toDos.map((e) => e ? Task.toJSON(e) : undefined);
    } else {
      obj.toDos = [];
    }
    if (message.tasksCompleted) {
      obj.tasksCompleted = message.tasksCompleted.map((e) => e ? Task.toJSON(e) : undefined);
    } else {
      obj.tasksCompleted = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StepContent>, I>>(base?: I): StepContent {
    return StepContent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StepContent>, I>>(object: I): StepContent {
    const message = createBaseStepContent();
    message.toDos = object.toDos?.map((e) => Task.fromPartial(e)) || [];
    message.tasksCompleted = object.tasksCompleted?.map((e) => Task.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuestState(): QuestState {
  return { currentSteps: {}, stepsLeft: 0, stepsCompleted: [], requiredSteps: [] };
}

export const QuestState = {
  encode(message: QuestState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.currentSteps).forEach(([key, value]) => {
      QuestState_CurrentStepsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.stepsLeft !== 0) {
      writer.uint32(29).fixed32(message.stepsLeft);
    }
    for (const v of message.stepsCompleted) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.requiredSteps) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          const entry2 = QuestState_CurrentStepsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.currentSteps[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.stepsLeft = reader.fixed32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stepsCompleted.push(reader.string());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.requiredSteps.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuestState {
    return {
      currentSteps: isObject(object.currentSteps)
        ? Object.entries(object.currentSteps).reduce<{ [key: string]: StepContent }>((acc, [key, value]) => {
          acc[key] = StepContent.fromJSON(value);
          return acc;
        }, {})
        : {},
      stepsLeft: isSet(object.stepsLeft) ? Number(object.stepsLeft) : 0,
      stepsCompleted: Array.isArray(object?.stepsCompleted) ? object.stepsCompleted.map((e: any) => String(e)) : [],
      requiredSteps: Array.isArray(object?.requiredSteps) ? object.requiredSteps.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: QuestState): unknown {
    const obj: any = {};
    obj.currentSteps = {};
    if (message.currentSteps) {
      Object.entries(message.currentSteps).forEach(([k, v]) => {
        obj.currentSteps[k] = StepContent.toJSON(v);
      });
    }
    message.stepsLeft !== undefined && (obj.stepsLeft = Math.round(message.stepsLeft));
    if (message.stepsCompleted) {
      obj.stepsCompleted = message.stepsCompleted.map((e) => e);
    } else {
      obj.stepsCompleted = [];
    }
    if (message.requiredSteps) {
      obj.requiredSteps = message.requiredSteps.map((e) => e);
    } else {
      obj.requiredSteps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestState>, I>>(base?: I): QuestState {
    return QuestState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestState>, I>>(object: I): QuestState {
    const message = createBaseQuestState();
    message.currentSteps = Object.entries(object.currentSteps ?? {}).reduce<{ [key: string]: StepContent }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = StepContent.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.stepsLeft = object.stepsLeft ?? 0;
    message.stepsCompleted = object.stepsCompleted?.map((e) => e) || [];
    message.requiredSteps = object.requiredSteps?.map((e) => e) || [];
    return message;
  },
};

function createBaseQuestState_CurrentStepsEntry(): QuestState_CurrentStepsEntry {
  return { key: "", value: undefined };
}

export const QuestState_CurrentStepsEntry = {
  encode(message: QuestState_CurrentStepsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      StepContent.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestState_CurrentStepsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestState_CurrentStepsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = StepContent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuestState_CurrentStepsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? StepContent.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: QuestState_CurrentStepsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? StepContent.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestState_CurrentStepsEntry>, I>>(base?: I): QuestState_CurrentStepsEntry {
    return QuestState_CurrentStepsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestState_CurrentStepsEntry>, I>>(object: I): QuestState_CurrentStepsEntry {
    const message = createBaseQuestState_CurrentStepsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? StepContent.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQuestStateWithData(): QuestStateWithData {
  return { questInstanceId: "", name: "", description: "", questState: undefined };
}

export const QuestStateWithData = {
  encode(message: QuestStateWithData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questInstanceId !== "") {
      writer.uint32(10).string(message.questInstanceId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.questState !== undefined) {
      QuestState.encode(message.questState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestStateWithData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestStateWithData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.questInstanceId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.questState = QuestState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuestStateWithData {
    return {
      questInstanceId: isSet(object.questInstanceId) ? String(object.questInstanceId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      questState: isSet(object.questState) ? QuestState.fromJSON(object.questState) : undefined,
    };
  },

  toJSON(message: QuestStateWithData): unknown {
    const obj: any = {};
    message.questInstanceId !== undefined && (obj.questInstanceId = message.questInstanceId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.questState !== undefined &&
      (obj.questState = message.questState ? QuestState.toJSON(message.questState) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestStateWithData>, I>>(base?: I): QuestStateWithData {
    return QuestStateWithData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestStateWithData>, I>>(object: I): QuestStateWithData {
    const message = createBaseQuestStateWithData();
    message.questInstanceId = object.questInstanceId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.questState = (object.questState !== undefined && object.questState !== null)
      ? QuestState.fromPartial(object.questState)
      : undefined;
    return message;
  },
};

function createBaseQuestStateUpdate(): QuestStateUpdate {
  return { questData: undefined, eventId: "" };
}

export const QuestStateUpdate = {
  encode(message: QuestStateUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questData !== undefined) {
      QuestStateWithData.encode(message.questData, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestStateUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestStateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.questData = QuestStateWithData.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.eventId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuestStateUpdate {
    return {
      questData: isSet(object.questData) ? QuestStateWithData.fromJSON(object.questData) : undefined,
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: QuestStateUpdate): unknown {
    const obj: any = {};
    message.questData !== undefined &&
      (obj.questData = message.questData ? QuestStateWithData.toJSON(message.questData) : undefined);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestStateUpdate>, I>>(base?: I): QuestStateUpdate {
    return QuestStateUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestStateUpdate>, I>>(object: I): QuestStateUpdate {
    const message = createBaseQuestStateUpdate();
    message.questData = (object.questData !== undefined && object.questData !== null)
      ? QuestStateWithData.fromPartial(object.questData)
      : undefined;
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseUserUpdate(): UserUpdate {
  return { questStateUpdate: undefined, newQuestStarted: undefined, eventIgnored: undefined };
}

export const UserUpdate = {
  encode(message: UserUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questStateUpdate !== undefined) {
      QuestStateUpdate.encode(message.questStateUpdate, writer.uint32(10).fork()).ldelim();
    }
    if (message.newQuestStarted !== undefined) {
      QuestStateWithData.encode(message.newQuestStarted, writer.uint32(18).fork()).ldelim();
    }
    if (message.eventIgnored !== undefined) {
      writer.uint32(37).fixed32(message.eventIgnored);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.questStateUpdate = QuestStateUpdate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.newQuestStarted = QuestStateWithData.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.eventIgnored = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdate {
    return {
      questStateUpdate: isSet(object.questStateUpdate) ? QuestStateUpdate.fromJSON(object.questStateUpdate) : undefined,
      newQuestStarted: isSet(object.newQuestStarted) ? QuestStateWithData.fromJSON(object.newQuestStarted) : undefined,
      eventIgnored: isSet(object.eventIgnored) ? Number(object.eventIgnored) : undefined,
    };
  },

  toJSON(message: UserUpdate): unknown {
    const obj: any = {};
    message.questStateUpdate !== undefined &&
      (obj.questStateUpdate = message.questStateUpdate ? QuestStateUpdate.toJSON(message.questStateUpdate) : undefined);
    message.newQuestStarted !== undefined &&
      (obj.newQuestStarted = message.newQuestStarted ? QuestStateWithData.toJSON(message.newQuestStarted) : undefined);
    message.eventIgnored !== undefined && (obj.eventIgnored = Math.round(message.eventIgnored));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUpdate>, I>>(base?: I): UserUpdate {
    return UserUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserUpdate>, I>>(object: I): UserUpdate {
    const message = createBaseUserUpdate();
    message.questStateUpdate = (object.questStateUpdate !== undefined && object.questStateUpdate !== null)
      ? QuestStateUpdate.fromPartial(object.questStateUpdate)
      : undefined;
    message.newQuestStarted = (object.newQuestStarted !== undefined && object.newQuestStarted !== null)
      ? QuestStateWithData.fromPartial(object.newQuestStarted)
      : undefined;
    message.eventIgnored = object.eventIgnored ?? undefined;
    return message;
  },
};

function createBaseQuests(): Quests {
  return { quests: [] };
}

export const Quests = {
  encode(message: Quests, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.quests) {
      QuestInstance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quests {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuests();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.quests.push(QuestInstance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quests {
    return { quests: Array.isArray(object?.quests) ? object.quests.map((e: any) => QuestInstance.fromJSON(e)) : [] };
  },

  toJSON(message: Quests): unknown {
    const obj: any = {};
    if (message.quests) {
      obj.quests = message.quests.map((e) => e ? QuestInstance.toJSON(e) : undefined);
    } else {
      obj.quests = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Quests>, I>>(base?: I): Quests {
    return Quests.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Quests>, I>>(object: I): Quests {
    const message = createBaseQuests();
    message.quests = object.quests?.map((e) => QuestInstance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetAllQuestsResponse(): GetAllQuestsResponse {
  return { quests: undefined, internalServerError: undefined };
}

export const GetAllQuestsResponse = {
  encode(message: GetAllQuestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quests !== undefined) {
      Quests.encode(message.quests, writer.uint32(10).fork()).ldelim();
    }
    if (message.internalServerError !== undefined) {
      InternalServerError.encode(message.internalServerError, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllQuestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllQuestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.quests = Quests.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.internalServerError = InternalServerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllQuestsResponse {
    return {
      quests: isSet(object.quests) ? Quests.fromJSON(object.quests) : undefined,
      internalServerError: isSet(object.internalServerError)
        ? InternalServerError.fromJSON(object.internalServerError)
        : undefined,
    };
  },

  toJSON(message: GetAllQuestsResponse): unknown {
    const obj: any = {};
    message.quests !== undefined && (obj.quests = message.quests ? Quests.toJSON(message.quests) : undefined);
    message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
      ? InternalServerError.toJSON(message.internalServerError)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllQuestsResponse>, I>>(base?: I): GetAllQuestsResponse {
    return GetAllQuestsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllQuestsResponse>, I>>(object: I): GetAllQuestsResponse {
    const message = createBaseGetAllQuestsResponse();
    message.quests = (object.quests !== undefined && object.quests !== null)
      ? Quests.fromPartial(object.quests)
      : undefined;
    message.internalServerError = (object.internalServerError !== undefined && object.internalServerError !== null)
      ? InternalServerError.fromPartial(object.internalServerError)
      : undefined;
    return message;
  },
};

function createBaseQuest(): Quest {
  return { name: "", description: "", definition: undefined };
}

export const Quest = {
  encode(message: Quest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.definition !== undefined) {
      QuestDefinition.encode(message.definition, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.definition = QuestDefinition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      definition: isSet(object.definition) ? QuestDefinition.fromJSON(object.definition) : undefined,
    };
  },

  toJSON(message: Quest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.definition !== undefined &&
      (obj.definition = message.definition ? QuestDefinition.toJSON(message.definition) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Quest>, I>>(base?: I): Quest {
    return Quest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Quest>, I>>(object: I): Quest {
    const message = createBaseQuest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.definition = (object.definition !== undefined && object.definition !== null)
      ? QuestDefinition.fromPartial(object.definition)
      : undefined;
    return message;
  },
};

function createBaseGetQuestDefinitionRequest(): GetQuestDefinitionRequest {
  return { questId: "" };
}

export const GetQuestDefinitionRequest = {
  encode(message: GetQuestDefinitionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questId !== "") {
      writer.uint32(10).string(message.questId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQuestDefinitionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQuestDefinitionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.questId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetQuestDefinitionRequest {
    return { questId: isSet(object.questId) ? String(object.questId) : "" };
  },

  toJSON(message: GetQuestDefinitionRequest): unknown {
    const obj: any = {};
    message.questId !== undefined && (obj.questId = message.questId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetQuestDefinitionRequest>, I>>(base?: I): GetQuestDefinitionRequest {
    return GetQuestDefinitionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetQuestDefinitionRequest>, I>>(object: I): GetQuestDefinitionRequest {
    const message = createBaseGetQuestDefinitionRequest();
    message.questId = object.questId ?? "";
    return message;
  },
};

function createBaseGetQuestDefinitionResponse(): GetQuestDefinitionResponse {
  return { quest: undefined, internalServerError: undefined };
}

export const GetQuestDefinitionResponse = {
  encode(message: GetQuestDefinitionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quest !== undefined) {
      Quest.encode(message.quest, writer.uint32(10).fork()).ldelim();
    }
    if (message.internalServerError !== undefined) {
      InternalServerError.encode(message.internalServerError, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQuestDefinitionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQuestDefinitionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.quest = Quest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.internalServerError = InternalServerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetQuestDefinitionResponse {
    return {
      quest: isSet(object.quest) ? Quest.fromJSON(object.quest) : undefined,
      internalServerError: isSet(object.internalServerError)
        ? InternalServerError.fromJSON(object.internalServerError)
        : undefined,
    };
  },

  toJSON(message: GetQuestDefinitionResponse): unknown {
    const obj: any = {};
    message.quest !== undefined && (obj.quest = message.quest ? Quest.toJSON(message.quest) : undefined);
    message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
      ? InternalServerError.toJSON(message.internalServerError)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetQuestDefinitionResponse>, I>>(base?: I): GetQuestDefinitionResponse {
    return GetQuestDefinitionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetQuestDefinitionResponse>, I>>(object: I): GetQuestDefinitionResponse {
    const message = createBaseGetQuestDefinitionResponse();
    message.quest = (object.quest !== undefined && object.quest !== null) ? Quest.fromPartial(object.quest) : undefined;
    message.internalServerError = (object.internalServerError !== undefined && object.internalServerError !== null)
      ? InternalServerError.fromPartial(object.internalServerError)
      : undefined;
    return message;
  },
};

function createBaseQuestInstance(): QuestInstance {
  return { instanceId: "", quest: undefined, state: undefined };
}

export const QuestInstance = {
  encode(message: QuestInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.quest !== undefined) {
      Quest.encode(message.quest, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== undefined) {
      QuestState.encode(message.state, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.quest = Quest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.state = QuestState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuestInstance {
    return {
      instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
      quest: isSet(object.quest) ? Quest.fromJSON(object.quest) : undefined,
      state: isSet(object.state) ? QuestState.fromJSON(object.state) : undefined,
    };
  },

  toJSON(message: QuestInstance): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.quest !== undefined && (obj.quest = message.quest ? Quest.toJSON(message.quest) : undefined);
    message.state !== undefined && (obj.state = message.state ? QuestState.toJSON(message.state) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestInstance>, I>>(base?: I): QuestInstance {
    return QuestInstance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestInstance>, I>>(object: I): QuestInstance {
    const message = createBaseQuestInstance();
    message.instanceId = object.instanceId ?? "";
    message.quest = (object.quest !== undefined && object.quest !== null) ? Quest.fromPartial(object.quest) : undefined;
    message.state = (object.state !== undefined && object.state !== null)
      ? QuestState.fromPartial(object.state)
      : undefined;
    return message;
  },
};

export type QuestsServiceDefinition = typeof QuestsServiceDefinition;
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
      requestType: EventRequest,
      requestStream: false,
      responseType: EventResponse,
      responseStream: false,
      options: {},
    },
    /** Listen to changes in quest states and event processing updates */
    subscribe: {
      name: "Subscribe",
      requestType: Empty,
      requestStream: false,
      responseType: UserUpdate,
      responseStream: true,
      options: {},
    },
    /** Query quest information */
    getAllQuests: {
      name: "GetAllQuests",
      requestType: Empty,
      requestStream: false,
      responseType: GetAllQuestsResponse,
      responseStream: false,
      options: {},
    },
    getQuestDefinition: {
      name: "GetQuestDefinition",
      requestType: GetQuestDefinitionRequest,
      requestStream: false,
      responseType: GetQuestDefinitionResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
