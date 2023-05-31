import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
export const protobufPackage = "decentraland.quests";
function createBaseInvalidQuest() {
    return {};
}
export const InvalidQuest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return InvalidQuest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseInvalidQuest();
        return message;
    },
};
function createBaseNotUUID() {
    return {};
}
export const NotUUID = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return NotUUID.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseNotUUID();
        return message;
    },
};
function createBaseInternalServerError() {
    return {};
}
export const InternalServerError = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return InternalServerError.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseInternalServerError();
        return message;
    },
};
function createBaseNotFoundQuestInstance() {
    return {};
}
export const NotFoundQuestInstance = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return NotFoundQuestInstance.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseNotFoundQuestInstance();
        return message;
    },
};
function createBaseNotOwner() {
    return {};
}
export const NotOwner = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return NotOwner.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseNotOwner();
        return message;
    },
};
function createBaseIgnoredEvent() {
    return {};
}
export const IgnoredEvent = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return IgnoredEvent.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseIgnoredEvent();
        return message;
    },
};
function createBaseStartQuestRequest() {
    return { questId: "" };
}
export const StartQuestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.questId !== "") {
            writer.uint32(10).string(message.questId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { questId: isSet(object.questId) ? String(object.questId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.questId !== undefined && (obj.questId = message.questId);
        return obj;
    },
    create(base) {
        return StartQuestRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStartQuestRequest();
        message.questId = object.questId ?? "";
        return message;
    },
};
function createBaseStartQuestResponse() {
    return { accepted: undefined, invalidQuest: undefined, notUuidError: undefined, internalServerError: undefined };
}
export const StartQuestResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            accepted: isSet(object.accepted) ? StartQuestResponse_Accepted.fromJSON(object.accepted) : undefined,
            invalidQuest: isSet(object.invalidQuest) ? InvalidQuest.fromJSON(object.invalidQuest) : undefined,
            notUuidError: isSet(object.notUuidError) ? NotUUID.fromJSON(object.notUuidError) : undefined,
            internalServerError: isSet(object.internalServerError)
                ? InternalServerError.fromJSON(object.internalServerError)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return StartQuestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseStartQuestResponse_Accepted() {
    return {};
}
export const StartQuestResponse_Accepted = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return StartQuestResponse_Accepted.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseStartQuestResponse_Accepted();
        return message;
    },
};
function createBaseAbortQuestRequest() {
    return { questInstanceId: "" };
}
export const AbortQuestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.questInstanceId !== "") {
            writer.uint32(10).string(message.questInstanceId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { questInstanceId: isSet(object.questInstanceId) ? String(object.questInstanceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.questInstanceId !== undefined && (obj.questInstanceId = message.questInstanceId);
        return obj;
    },
    create(base) {
        return AbortQuestRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAbortQuestRequest();
        message.questInstanceId = object.questInstanceId ?? "";
        return message;
    },
};
function createBaseAbortQuestResponse() {
    return {
        accepted: undefined,
        notFoundQuestInstance: undefined,
        notUuidError: undefined,
        notOwner: undefined,
        internalServerError: undefined,
    };
}
export const AbortQuestResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return AbortQuestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseAbortQuestResponse_Accepted() {
    return {};
}
export const AbortQuestResponse_Accepted = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return AbortQuestResponse_Accepted.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAbortQuestResponse_Accepted();
        return message;
    },
};
function createBaseEvent() {
    return { id: "", address: "", action: undefined };
}
export const Event = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            address: isSet(object.address) ? String(object.address) : "",
            action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.address !== undefined && (obj.address = message.address);
        message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
        return obj;
    },
    create(base) {
        return Event.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.id = object.id ?? "";
        message.address = object.address ?? "";
        message.action = (object.action !== undefined && object.action !== null)
            ? Action.fromPartial(object.action)
            : undefined;
        return message;
    },
};
function createBaseEventRequest() {
    return { action: undefined };
}
export const EventRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.action !== undefined) {
            Action.encode(message.action, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { action: isSet(object.action) ? Action.fromJSON(object.action) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
        return obj;
    },
    create(base) {
        return EventRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventRequest();
        message.action = (object.action !== undefined && object.action !== null)
            ? Action.fromPartial(object.action)
            : undefined;
        return message;
    },
};
function createBaseEventResponse() {
    return { acceptedEventId: undefined, ignoredEvent: undefined, internalServerError: undefined };
}
export const EventResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            acceptedEventId: isSet(object.acceptedEventId) ? String(object.acceptedEventId) : undefined,
            ignoredEvent: isSet(object.ignoredEvent) ? IgnoredEvent.fromJSON(object.ignoredEvent) : undefined,
            internalServerError: isSet(object.internalServerError)
                ? InternalServerError.fromJSON(object.internalServerError)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.acceptedEventId !== undefined && (obj.acceptedEventId = message.acceptedEventId);
        message.ignoredEvent !== undefined &&
            (obj.ignoredEvent = message.ignoredEvent ? IgnoredEvent.toJSON(message.ignoredEvent) : undefined);
        message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
            ? InternalServerError.toJSON(message.internalServerError)
            : undefined);
        return obj;
    },
    create(base) {
        return EventResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseQuestDefinition() {
    return { steps: [], connections: [] };
}
export const QuestDefinition = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.steps) {
            Step.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.connections) {
            Connection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            steps: Array.isArray(object?.steps) ? object.steps.map((e) => Step.fromJSON(e)) : [],
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => Connection.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.steps) {
            obj.steps = message.steps.map((e) => e ? Step.toJSON(e) : undefined);
        }
        else {
            obj.steps = [];
        }
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? Connection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        return obj;
    },
    create(base) {
        return QuestDefinition.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuestDefinition();
        message.steps = object.steps?.map((e) => Step.fromPartial(e)) || [];
        message.connections = object.connections?.map((e) => Connection.fromPartial(e)) || [];
        return message;
    },
};
function createBaseConnection() {
    return { stepFrom: "", stepTo: "" };
}
export const Connection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stepFrom !== "") {
            writer.uint32(10).string(message.stepFrom);
        }
        if (message.stepTo !== "") {
            writer.uint32(18).string(message.stepTo);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            stepFrom: isSet(object.stepFrom) ? String(object.stepFrom) : "",
            stepTo: isSet(object.stepTo) ? String(object.stepTo) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.stepFrom !== undefined && (obj.stepFrom = message.stepFrom);
        message.stepTo !== undefined && (obj.stepTo = message.stepTo);
        return obj;
    },
    create(base) {
        return Connection.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConnection();
        message.stepFrom = object.stepFrom ?? "";
        message.stepTo = object.stepTo ?? "";
        return message;
    },
};
function createBaseStep() {
    return { id: "", description: "", tasks: [] };
}
export const Step = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.tasks) {
            Task.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            description: isSet(object.description) ? String(object.description) : "",
            tasks: Array.isArray(object?.tasks) ? object.tasks.map((e) => Task.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined && (obj.description = message.description);
        if (message.tasks) {
            obj.tasks = message.tasks.map((e) => e ? Task.toJSON(e) : undefined);
        }
        else {
            obj.tasks = [];
        }
        return obj;
    },
    create(base) {
        return Step.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStep();
        message.id = object.id ?? "";
        message.description = object.description ?? "";
        message.tasks = object.tasks?.map((e) => Task.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAction() {
    return { type: "", parameters: {} };
}
export const Action = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        Object.entries(message.parameters).forEach(([key, value]) => {
            Action_ParametersEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            type: isSet(object.type) ? String(object.type) : "",
            parameters: isObject(object.parameters)
                ? Object.entries(object.parameters).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        obj.parameters = {};
        if (message.parameters) {
            Object.entries(message.parameters).forEach(([k, v]) => {
                obj.parameters[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return Action.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction();
        message.type = object.type ?? "";
        message.parameters = Object.entries(object.parameters ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseAction_ParametersEntry() {
    return { key: "", value: "" };
}
export const Action_ParametersEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return Action_ParametersEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction_ParametersEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseTask() {
    return { id: "", description: "", actionItems: [] };
}
export const Task = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.actionItems) {
            Action.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            description: isSet(object.description) ? String(object.description) : "",
            actionItems: Array.isArray(object?.actionItems) ? object.actionItems.map((e) => Action.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined && (obj.description = message.description);
        if (message.actionItems) {
            obj.actionItems = message.actionItems.map((e) => e ? Action.toJSON(e) : undefined);
        }
        else {
            obj.actionItems = [];
        }
        return obj;
    },
    create(base) {
        return Task.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTask();
        message.id = object.id ?? "";
        message.description = object.description ?? "";
        message.actionItems = object.actionItems?.map((e) => Action.fromPartial(e)) || [];
        return message;
    },
};
function createBaseStepContent() {
    return { toDos: [], tasksCompleted: [] };
}
export const StepContent = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.toDos) {
            Task.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tasksCompleted) {
            Task.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            toDos: Array.isArray(object?.toDos) ? object.toDos.map((e) => Task.fromJSON(e)) : [],
            tasksCompleted: Array.isArray(object?.tasksCompleted)
                ? object.tasksCompleted.map((e) => Task.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.toDos) {
            obj.toDos = message.toDos.map((e) => e ? Task.toJSON(e) : undefined);
        }
        else {
            obj.toDos = [];
        }
        if (message.tasksCompleted) {
            obj.tasksCompleted = message.tasksCompleted.map((e) => e ? Task.toJSON(e) : undefined);
        }
        else {
            obj.tasksCompleted = [];
        }
        return obj;
    },
    create(base) {
        return StepContent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStepContent();
        message.toDos = object.toDos?.map((e) => Task.fromPartial(e)) || [];
        message.tasksCompleted = object.tasksCompleted?.map((e) => Task.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQuestState() {
    return { currentSteps: {}, stepsLeft: 0, stepsCompleted: [], requiredSteps: [] };
}
export const QuestState = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.currentSteps).forEach(([key, value]) => {
            QuestState_CurrentStepsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.stepsLeft !== 0) {
            writer.uint32(29).fixed32(message.stepsLeft);
        }
        for (const v of message.stepsCompleted) {
            writer.uint32(34).string(v);
        }
        for (const v of message.requiredSteps) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            currentSteps: isObject(object.currentSteps)
                ? Object.entries(object.currentSteps).reduce((acc, [key, value]) => {
                    acc[key] = StepContent.fromJSON(value);
                    return acc;
                }, {})
                : {},
            stepsLeft: isSet(object.stepsLeft) ? Number(object.stepsLeft) : 0,
            stepsCompleted: Array.isArray(object?.stepsCompleted) ? object.stepsCompleted.map((e) => String(e)) : [],
            requiredSteps: Array.isArray(object?.requiredSteps) ? object.requiredSteps.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        obj.currentSteps = {};
        if (message.currentSteps) {
            Object.entries(message.currentSteps).forEach(([k, v]) => {
                obj.currentSteps[k] = StepContent.toJSON(v);
            });
        }
        message.stepsLeft !== undefined && (obj.stepsLeft = Math.round(message.stepsLeft));
        if (message.stepsCompleted) {
            obj.stepsCompleted = message.stepsCompleted.map((e) => e);
        }
        else {
            obj.stepsCompleted = [];
        }
        if (message.requiredSteps) {
            obj.requiredSteps = message.requiredSteps.map((e) => e);
        }
        else {
            obj.requiredSteps = [];
        }
        return obj;
    },
    create(base) {
        return QuestState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuestState();
        message.currentSteps = Object.entries(object.currentSteps ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = StepContent.fromPartial(value);
            }
            return acc;
        }, {});
        message.stepsLeft = object.stepsLeft ?? 0;
        message.stepsCompleted = object.stepsCompleted?.map((e) => e) || [];
        message.requiredSteps = object.requiredSteps?.map((e) => e) || [];
        return message;
    },
};
function createBaseQuestState_CurrentStepsEntry() {
    return { key: "", value: undefined };
}
export const QuestState_CurrentStepsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            StepContent.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? StepContent.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? StepContent.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return QuestState_CurrentStepsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuestState_CurrentStepsEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? StepContent.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQuestStateWithData() {
    return { questInstanceId: "", name: "", description: "", questState: undefined };
}
export const QuestStateWithData = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            questInstanceId: isSet(object.questInstanceId) ? String(object.questInstanceId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            questState: isSet(object.questState) ? QuestState.fromJSON(object.questState) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.questInstanceId !== undefined && (obj.questInstanceId = message.questInstanceId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.questState !== undefined &&
            (obj.questState = message.questState ? QuestState.toJSON(message.questState) : undefined);
        return obj;
    },
    create(base) {
        return QuestStateWithData.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseQuestStateUpdate() {
    return { questData: undefined, eventId: "" };
}
export const QuestStateUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.questData !== undefined) {
            QuestStateWithData.encode(message.questData, writer.uint32(10).fork()).ldelim();
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            questData: isSet(object.questData) ? QuestStateWithData.fromJSON(object.questData) : undefined,
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.questData !== undefined &&
            (obj.questData = message.questData ? QuestStateWithData.toJSON(message.questData) : undefined);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        return obj;
    },
    create(base) {
        return QuestStateUpdate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuestStateUpdate();
        message.questData = (object.questData !== undefined && object.questData !== null)
            ? QuestStateWithData.fromPartial(object.questData)
            : undefined;
        message.eventId = object.eventId ?? "";
        return message;
    },
};
function createBaseUserUpdate() {
    return { questStateUpdate: undefined, newQuestStarted: undefined, eventIgnored: undefined };
}
export const UserUpdate = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            questStateUpdate: isSet(object.questStateUpdate) ? QuestStateUpdate.fromJSON(object.questStateUpdate) : undefined,
            newQuestStarted: isSet(object.newQuestStarted) ? QuestStateWithData.fromJSON(object.newQuestStarted) : undefined,
            eventIgnored: isSet(object.eventIgnored) ? Number(object.eventIgnored) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.questStateUpdate !== undefined &&
            (obj.questStateUpdate = message.questStateUpdate ? QuestStateUpdate.toJSON(message.questStateUpdate) : undefined);
        message.newQuestStarted !== undefined &&
            (obj.newQuestStarted = message.newQuestStarted ? QuestStateWithData.toJSON(message.newQuestStarted) : undefined);
        message.eventIgnored !== undefined && (obj.eventIgnored = Math.round(message.eventIgnored));
        return obj;
    },
    create(base) {
        return UserUpdate.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseQuests() {
    return { quests: [] };
}
export const Quests = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.quests) {
            QuestInstance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { quests: Array.isArray(object?.quests) ? object.quests.map((e) => QuestInstance.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.quests) {
            obj.quests = message.quests.map((e) => e ? QuestInstance.toJSON(e) : undefined);
        }
        else {
            obj.quests = [];
        }
        return obj;
    },
    create(base) {
        return Quests.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuests();
        message.quests = object.quests?.map((e) => QuestInstance.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetAllQuestsResponse() {
    return { quests: undefined, internalServerError: undefined };
}
export const GetAllQuestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.quests !== undefined) {
            Quests.encode(message.quests, writer.uint32(10).fork()).ldelim();
        }
        if (message.internalServerError !== undefined) {
            InternalServerError.encode(message.internalServerError, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            quests: isSet(object.quests) ? Quests.fromJSON(object.quests) : undefined,
            internalServerError: isSet(object.internalServerError)
                ? InternalServerError.fromJSON(object.internalServerError)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.quests !== undefined && (obj.quests = message.quests ? Quests.toJSON(message.quests) : undefined);
        message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
            ? InternalServerError.toJSON(message.internalServerError)
            : undefined);
        return obj;
    },
    create(base) {
        return GetAllQuestsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseQuest() {
    return { name: "", description: "", definition: undefined };
}
export const Quest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            definition: isSet(object.definition) ? QuestDefinition.fromJSON(object.definition) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.definition !== undefined &&
            (obj.definition = message.definition ? QuestDefinition.toJSON(message.definition) : undefined);
        return obj;
    },
    create(base) {
        return Quest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuest();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.definition = (object.definition !== undefined && object.definition !== null)
            ? QuestDefinition.fromPartial(object.definition)
            : undefined;
        return message;
    },
};
function createBaseGetQuestDefinitionRequest() {
    return { questId: "" };
}
export const GetQuestDefinitionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.questId !== "") {
            writer.uint32(10).string(message.questId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { questId: isSet(object.questId) ? String(object.questId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.questId !== undefined && (obj.questId = message.questId);
        return obj;
    },
    create(base) {
        return GetQuestDefinitionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetQuestDefinitionRequest();
        message.questId = object.questId ?? "";
        return message;
    },
};
function createBaseGetQuestDefinitionResponse() {
    return { quest: undefined, internalServerError: undefined };
}
export const GetQuestDefinitionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.quest !== undefined) {
            Quest.encode(message.quest, writer.uint32(10).fork()).ldelim();
        }
        if (message.internalServerError !== undefined) {
            InternalServerError.encode(message.internalServerError, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            quest: isSet(object.quest) ? Quest.fromJSON(object.quest) : undefined,
            internalServerError: isSet(object.internalServerError)
                ? InternalServerError.fromJSON(object.internalServerError)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.quest !== undefined && (obj.quest = message.quest ? Quest.toJSON(message.quest) : undefined);
        message.internalServerError !== undefined && (obj.internalServerError = message.internalServerError
            ? InternalServerError.toJSON(message.internalServerError)
            : undefined);
        return obj;
    },
    create(base) {
        return GetQuestDefinitionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetQuestDefinitionResponse();
        message.quest = (object.quest !== undefined && object.quest !== null) ? Quest.fromPartial(object.quest) : undefined;
        message.internalServerError = (object.internalServerError !== undefined && object.internalServerError !== null)
            ? InternalServerError.fromPartial(object.internalServerError)
            : undefined;
        return message;
    },
};
function createBaseQuestInstance() {
    return { instanceId: "", quest: undefined, state: undefined };
}
export const QuestInstance = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            quest: isSet(object.quest) ? Quest.fromJSON(object.quest) : undefined,
            state: isSet(object.state) ? QuestState.fromJSON(object.state) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.quest !== undefined && (obj.quest = message.quest ? Quest.toJSON(message.quest) : undefined);
        message.state !== undefined && (obj.state = message.state ? QuestState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QuestInstance.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuestInstance();
        message.instanceId = object.instanceId ?? "";
        message.quest = (object.quest !== undefined && object.quest !== null) ? Quest.fromPartial(object.quest) : undefined;
        message.state = (object.state !== undefined && object.state !== null)
            ? QuestState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
export const QuestsServiceDefinition = {
    name: "QuestsService",
    fullName: "decentraland.quests.QuestsService",
    methods: {
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
        subscribe: {
            name: "Subscribe",
            requestType: Empty,
            requestStream: false,
            responseType: UserUpdate,
            responseStream: true,
            options: {},
        },
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
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sR0FBRyxNQUFNLG9CQUFvQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcscUJBQXFCLENBQUM7QUFtTHJELFNBQVMsc0JBQXNCO0lBQzdCLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRztJQUMxQixNQUFNLENBQUMsQ0FBZSxFQUFFLFNBQXFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzlELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLHNCQUFzQixFQUFFLENBQUM7UUFDekMsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFO2FBQ2xCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsTUFBTTth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RUFBRTtZQUNULElBQUksRUFBRSxXQUFXO1lBQ2pCLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFlBQVksRUFBRSxhQUFhO1lBQzNCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLE9BQU8sRUFBRSxFQUFFO1NBQ1o7UUFFRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsV0FBVztZQUNqQixXQUFXLEVBQUUsS0FBSztZQUNsQixhQUFhLEVBQUUsS0FBSztZQUNwQixZQUFZLEVBQUUsVUFBVTtZQUN4QixjQUFjLEVBQUUsSUFBSTtZQUNwQixPQUFPLEVBQUUsRUFBRTtTQUNaO1FBRUQsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLGNBQWM7WUFDcEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxjQUFjLEVBQUUsS0FBSztZQUNyQixPQUFPLEVBQUUsRUFBRTtTQUNaO1FBQ0Qsa0JBQWtCLEVBQUU7WUFDbEIsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFlBQVksRUFBRSwwQkFBMEI7WUFDeEMsY0FBYyxFQUFFLEtBQUs7WUFDckIsT0FBTyxFQUFFLEVBQUU7U0FDWjtLQUNGO0NBQ08sQ0FBQztBQWFYLFNBQVMsUUFBUSxDQUFDLEtBQVU7SUFDMUIsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztBQUNyRCxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsS0FBVTtJQUN2QixPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBfbTAgZnJvbSBcInByb3RvYnVmanMvbWluaW1hbFwiO1xuaW1wb3J0IHsgRW1wdHkgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvZW1wdHlcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZGVjZW50cmFsYW5kLnF1ZXN0c1wiO1xuXG4vKiogVGhpcyBpcyBsaXZpbmcgaGVyZSBkdXJpbmcgdGhlIFBvQy4gQWZ0ZXIgdGhhdCwgdGhpcyBtdXN0IGJlIGRvd25sb2FkZWQgZnJvbSB0aGUgcHJvdG9jb2wgcmVwbyBvbiBEZWNlbnRyYWxhbmQgR2l0aHViICovXG5cbi8qKiBFcnJvcnMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW52YWxpZFF1ZXN0IHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RVVUlEIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbFNlcnZlckVycm9yIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RGb3VuZFF1ZXN0SW5zdGFuY2Uge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdE93bmVyIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZ25vcmVkRXZlbnQge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJ0UXVlc3RSZXF1ZXN0IHtcbiAgcXVlc3RJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJ0UXVlc3RSZXNwb25zZSB7XG4gIGFjY2VwdGVkPzogU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkIHwgdW5kZWZpbmVkO1xuICBpbnZhbGlkUXVlc3Q/OiBJbnZhbGlkUXVlc3QgfCB1bmRlZmluZWQ7XG4gIG5vdFV1aWRFcnJvcj86IE5vdFVVSUQgfCB1bmRlZmluZWQ7XG4gIGludGVybmFsU2VydmVyRXJyb3I/OiBJbnRlcm5hbFNlcnZlckVycm9yIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoZXJlIGFyZSBhIGZldyB2YWxpZCByZWFzb25zIHRvIG5vdCBiZSBhY2NlcHRlZDpcbiAqICAtIFF1ZXN0IGlzIG5vdCBmb3VuZFxuICogIC0gUXVlc3QgaXMgZGVhY3RpdmF0ZWQgKHRoZSBvd25lciBkZWxldGVkIGl0KVxuICogIC0gVXNlciBhbHJlYWR5IHN0YXJ0ZWQgdGhlIHF1ZXN0XG4gKiAgLSBJbnRlcm5hbCBlcnJvcnMgKERCIGNvbm5lY3Rpb24gZmFpbGVkIG9yIHNvbWV0aGluZyBsaWtlIHRoYXQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBYm9ydFF1ZXN0UmVxdWVzdCB7XG4gIHF1ZXN0SW5zdGFuY2VJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFib3J0UXVlc3RSZXNwb25zZSB7XG4gIGFjY2VwdGVkPzogQWJvcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkIHwgdW5kZWZpbmVkO1xuICBub3RGb3VuZFF1ZXN0SW5zdGFuY2U/OiBOb3RGb3VuZFF1ZXN0SW5zdGFuY2UgfCB1bmRlZmluZWQ7XG4gIG5vdFV1aWRFcnJvcj86IE5vdFVVSUQgfCB1bmRlZmluZWQ7XG4gIG5vdE93bmVyPzogTm90T3duZXIgfCB1bmRlZmluZWQ7XG4gIGludGVybmFsU2VydmVyRXJyb3I/OiBJbnRlcm5hbFNlcnZlckVycm9yIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoZXJlIGFyZSBhIGZldyB2YWxpZCByZWFzb25zIHRvIG5vdCBiZSBhY2NlcHRlZDpcbiAqICAtIFF1ZXN0IGluc3RhbmNlIGlzIG5vdCBmb3VuZFxuICogIC0gUXVlc3QgaW5zdGFuY2UgaXMgZnJvbSBhbm90aGVyIHVzZXJcbiAqICAtIFF1ZXN0IGluc3RhbmNlIGFscmVhZHkgYWJvcnRlZFxuICogIC0gSW50ZXJuYWwgZXJyb3JzIChEQiBjb25uZWN0aW9uIGZhaWxlZCBvciBzb21ldGhpbmcgbGlrZSB0aGF0KVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnQge1xuICBpZDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGFjdGlvbjogQWN0aW9uIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UmVxdWVzdCB7XG4gIGFjdGlvbjogQWN0aW9uIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UmVzcG9uc2Uge1xuICBhY2NlcHRlZEV2ZW50SWQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGlnbm9yZWRFdmVudD86IElnbm9yZWRFdmVudCB8IHVuZGVmaW5lZDtcbiAgaW50ZXJuYWxTZXJ2ZXJFcnJvcj86IEludGVybmFsU2VydmVyRXJyb3IgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlc3REZWZpbml0aW9uIHtcbiAgc3RlcHM6IFN0ZXBbXTtcbiAgY29ubmVjdGlvbnM6IENvbm5lY3Rpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0aW9uIHtcbiAgc3RlcEZyb206IHN0cmluZztcbiAgc3RlcFRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcCB7XG4gIGlkOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHRhc2tzOiBUYXNrW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uIHtcbiAgdHlwZTogc3RyaW5nO1xuICBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbl9QYXJhbWV0ZXJzRW50cnkge1xuICBrZXk6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcbiAgaWQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYWN0aW9uSXRlbXM6IEFjdGlvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBDb250ZW50IHtcbiAgdG9Eb3M6IFRhc2tbXTtcbiAgdGFza3NDb21wbGV0ZWQ6IFRhc2tbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVzdFN0YXRlIHtcbiAgY3VycmVudFN0ZXBzOiB7IFtrZXk6IHN0cmluZ106IFN0ZXBDb250ZW50IH07XG4gIHN0ZXBzTGVmdDogbnVtYmVyO1xuICBzdGVwc0NvbXBsZXRlZDogc3RyaW5nW107XG4gIHJlcXVpcmVkU3RlcHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkge1xuICBrZXk6IHN0cmluZztcbiAgdmFsdWU6IFN0ZXBDb250ZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXN0U3RhdGVXaXRoRGF0YSB7XG4gIHF1ZXN0SW5zdGFuY2VJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHF1ZXN0U3RhdGU6IFF1ZXN0U3RhdGUgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlc3RTdGF0ZVVwZGF0ZSB7XG4gIHF1ZXN0RGF0YTogUXVlc3RTdGF0ZVdpdGhEYXRhIHwgdW5kZWZpbmVkO1xuICBldmVudElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclVwZGF0ZSB7XG4gIHF1ZXN0U3RhdGVVcGRhdGU/OiBRdWVzdFN0YXRlVXBkYXRlIHwgdW5kZWZpbmVkO1xuICBuZXdRdWVzdFN0YXJ0ZWQ/OiBRdWVzdFN0YXRlV2l0aERhdGEgfCB1bmRlZmluZWQ7XG4gIGV2ZW50SWdub3JlZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVzdHMge1xuICBxdWVzdHM6IFF1ZXN0SW5zdGFuY2VbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRBbGxRdWVzdHNSZXNwb25zZSB7XG4gIHF1ZXN0cz86IFF1ZXN0cyB8IHVuZGVmaW5lZDtcbiAgaW50ZXJuYWxTZXJ2ZXJFcnJvcj86IEludGVybmFsU2VydmVyRXJyb3IgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlc3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRlZmluaXRpb246IFF1ZXN0RGVmaW5pdGlvbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRRdWVzdERlZmluaXRpb25SZXF1ZXN0IHtcbiAgcXVlc3RJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFF1ZXN0RGVmaW5pdGlvblJlc3BvbnNlIHtcbiAgcXVlc3Q/OiBRdWVzdCB8IHVuZGVmaW5lZDtcbiAgaW50ZXJuYWxTZXJ2ZXJFcnJvcj86IEludGVybmFsU2VydmVyRXJyb3IgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlc3RJbnN0YW5jZSB7XG4gIGluc3RhbmNlSWQ6IHN0cmluZztcbiAgcXVlc3Q6IFF1ZXN0IHwgdW5kZWZpbmVkO1xuICBzdGF0ZTogUXVlc3RTdGF0ZSB8IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzZUludmFsaWRRdWVzdCgpOiBJbnZhbGlkUXVlc3Qge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBJbnZhbGlkUXVlc3QgPSB7XG4gIGVuY29kZShfOiBJbnZhbGlkUXVlc3QsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEludmFsaWRRdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VJbnZhbGlkUXVlc3QoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogSW52YWxpZFF1ZXN0IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IEludmFsaWRRdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEludmFsaWRRdWVzdD4sIEk+PihiYXNlPzogSSk6IEludmFsaWRRdWVzdCB7XG4gICAgcmV0dXJuIEludmFsaWRRdWVzdC5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8SW52YWxpZFF1ZXN0PiwgST4+KF86IEkpOiBJbnZhbGlkUXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlSW52YWxpZFF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTm90VVVJRCgpOiBOb3RVVUlEIHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgTm90VVVJRCA9IHtcbiAgZW5jb2RlKF86IE5vdFVVSUQsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IE5vdFVVSUQge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTm90VVVJRCgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBOb3RVVUlEIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE5vdFVVSUQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxOb3RVVUlEPiwgST4+KGJhc2U/OiBJKTogTm90VVVJRCB7XG4gICAgcmV0dXJuIE5vdFVVSUQuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPE5vdFVVSUQ+LCBJPj4oXzogSSk6IE5vdFVVSUQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTm90VVVJRCgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUludGVybmFsU2VydmVyRXJyb3IoKTogSW50ZXJuYWxTZXJ2ZXJFcnJvciB7XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGNvbnN0IEludGVybmFsU2VydmVyRXJyb3IgPSB7XG4gIGVuY29kZShfOiBJbnRlcm5hbFNlcnZlckVycm9yLCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBJbnRlcm5hbFNlcnZlckVycm9yIHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUludGVybmFsU2VydmVyRXJyb3IoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogSW50ZXJuYWxTZXJ2ZXJFcnJvciB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBJbnRlcm5hbFNlcnZlckVycm9yKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8SW50ZXJuYWxTZXJ2ZXJFcnJvcj4sIEk+PihiYXNlPzogSSk6IEludGVybmFsU2VydmVyRXJyb3Ige1xuICAgIHJldHVybiBJbnRlcm5hbFNlcnZlckVycm9yLmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxJbnRlcm5hbFNlcnZlckVycm9yPiwgST4+KF86IEkpOiBJbnRlcm5hbFNlcnZlckVycm9yIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUludGVybmFsU2VydmVyRXJyb3IoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VOb3RGb3VuZFF1ZXN0SW5zdGFuY2UoKTogTm90Rm91bmRRdWVzdEluc3RhbmNlIHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgTm90Rm91bmRRdWVzdEluc3RhbmNlID0ge1xuICBlbmNvZGUoXzogTm90Rm91bmRRdWVzdEluc3RhbmNlLCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBOb3RGb3VuZFF1ZXN0SW5zdGFuY2Uge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTm90Rm91bmRRdWVzdEluc3RhbmNlKCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IE5vdEZvdW5kUXVlc3RJbnN0YW5jZSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBOb3RGb3VuZFF1ZXN0SW5zdGFuY2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxOb3RGb3VuZFF1ZXN0SW5zdGFuY2U+LCBJPj4oYmFzZT86IEkpOiBOb3RGb3VuZFF1ZXN0SW5zdGFuY2Uge1xuICAgIHJldHVybiBOb3RGb3VuZFF1ZXN0SW5zdGFuY2UuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPE5vdEZvdW5kUXVlc3RJbnN0YW5jZT4sIEk+PihfOiBJKTogTm90Rm91bmRRdWVzdEluc3RhbmNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU5vdEZvdW5kUXVlc3RJbnN0YW5jZSgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU5vdE93bmVyKCk6IE5vdE93bmVyIHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgTm90T3duZXIgPSB7XG4gIGVuY29kZShfOiBOb3RPd25lciwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogTm90T3duZXIge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTm90T3duZXIoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTm90T3duZXIge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogTm90T3duZXIpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxOb3RPd25lcj4sIEk+PihiYXNlPzogSSk6IE5vdE93bmVyIHtcbiAgICByZXR1cm4gTm90T3duZXIuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPE5vdE93bmVyPiwgST4+KF86IEkpOiBOb3RPd25lciB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VOb3RPd25lcigpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUlnbm9yZWRFdmVudCgpOiBJZ25vcmVkRXZlbnQge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBJZ25vcmVkRXZlbnQgPSB7XG4gIGVuY29kZShfOiBJZ25vcmVkRXZlbnQsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IElnbm9yZWRFdmVudCB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VJZ25vcmVkRXZlbnQoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogSWdub3JlZEV2ZW50IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IElnbm9yZWRFdmVudCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPElnbm9yZWRFdmVudD4sIEk+PihiYXNlPzogSSk6IElnbm9yZWRFdmVudCB7XG4gICAgcmV0dXJuIElnbm9yZWRFdmVudC5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8SWdub3JlZEV2ZW50PiwgST4+KF86IEkpOiBJZ25vcmVkRXZlbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlSWdub3JlZEV2ZW50KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlU3RhcnRRdWVzdFJlcXVlc3QoKTogU3RhcnRRdWVzdFJlcXVlc3Qge1xuICByZXR1cm4geyBxdWVzdElkOiBcIlwiIH07XG59XG5cbmV4cG9ydCBjb25zdCBTdGFydFF1ZXN0UmVxdWVzdCA9IHtcbiAgZW5jb2RlKG1lc3NhZ2U6IFN0YXJ0UXVlc3RSZXF1ZXN0LCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UucXVlc3RJZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UucXVlc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogU3RhcnRRdWVzdFJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlU3RhcnRRdWVzdFJlcXVlc3QoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UucXVlc3RJZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBTdGFydFF1ZXN0UmVxdWVzdCB7XG4gICAgcmV0dXJuIHsgcXVlc3RJZDogaXNTZXQob2JqZWN0LnF1ZXN0SWQpID8gU3RyaW5nKG9iamVjdC5xdWVzdElkKSA6IFwiXCIgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogU3RhcnRRdWVzdFJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucXVlc3RJZCAhPT0gdW5kZWZpbmVkICYmIChvYmoucXVlc3RJZCA9IG1lc3NhZ2UucXVlc3RJZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFN0YXJ0UXVlc3RSZXF1ZXN0PiwgST4+KGJhc2U/OiBJKTogU3RhcnRRdWVzdFJlcXVlc3Qge1xuICAgIHJldHVybiBTdGFydFF1ZXN0UmVxdWVzdC5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8U3RhcnRRdWVzdFJlcXVlc3Q+LCBJPj4ob2JqZWN0OiBJKTogU3RhcnRRdWVzdFJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlU3RhcnRRdWVzdFJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLnF1ZXN0SWQgPSBvYmplY3QucXVlc3RJZCA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVN0YXJ0UXVlc3RSZXNwb25zZSgpOiBTdGFydFF1ZXN0UmVzcG9uc2Uge1xuICByZXR1cm4geyBhY2NlcHRlZDogdW5kZWZpbmVkLCBpbnZhbGlkUXVlc3Q6IHVuZGVmaW5lZCwgbm90VXVpZEVycm9yOiB1bmRlZmluZWQsIGludGVybmFsU2VydmVyRXJyb3I6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgY29uc3QgU3RhcnRRdWVzdFJlc3BvbnNlID0ge1xuICBlbmNvZGUobWVzc2FnZTogU3RhcnRRdWVzdFJlc3BvbnNlLCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWNjZXB0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkLmVuY29kZShtZXNzYWdlLmFjY2VwdGVkLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5pbnZhbGlkUXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgSW52YWxpZFF1ZXN0LmVuY29kZShtZXNzYWdlLmludmFsaWRRdWVzdCwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uubm90VXVpZEVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE5vdFVVSUQuZW5jb2RlKG1lc3NhZ2Uubm90VXVpZEVycm9yLCB3cml0ZXIudWludDMyKDI2KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEludGVybmFsU2VydmVyRXJyb3IuZW5jb2RlKG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciwgd3JpdGVyLnVpbnQzMigzNCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBTdGFydFF1ZXN0UmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlU3RhcnRRdWVzdFJlc3BvbnNlKCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGFnICE9IDEwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmFjY2VwdGVkID0gU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAodGFnICE9IDE4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmludmFsaWRRdWVzdCA9IEludmFsaWRRdWVzdC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaWYgKHRhZyAhPSAyNikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5ub3RVdWlkRXJyb3IgPSBOb3RVVUlELmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpZiAodGFnICE9IDM0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmludGVybmFsU2VydmVyRXJyb3IgPSBJbnRlcm5hbFNlcnZlckVycm9yLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogU3RhcnRRdWVzdFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjZXB0ZWQ6IGlzU2V0KG9iamVjdC5hY2NlcHRlZCkgPyBTdGFydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQuZnJvbUpTT04ob2JqZWN0LmFjY2VwdGVkKSA6IHVuZGVmaW5lZCxcbiAgICAgIGludmFsaWRRdWVzdDogaXNTZXQob2JqZWN0LmludmFsaWRRdWVzdCkgPyBJbnZhbGlkUXVlc3QuZnJvbUpTT04ob2JqZWN0LmludmFsaWRRdWVzdCkgOiB1bmRlZmluZWQsXG4gICAgICBub3RVdWlkRXJyb3I6IGlzU2V0KG9iamVjdC5ub3RVdWlkRXJyb3IpID8gTm90VVVJRC5mcm9tSlNPTihvYmplY3Qubm90VXVpZEVycm9yKSA6IHVuZGVmaW5lZCxcbiAgICAgIGludGVybmFsU2VydmVyRXJyb3I6IGlzU2V0KG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yKVxuICAgICAgICA/IEludGVybmFsU2VydmVyRXJyb3IuZnJvbUpTT04ob2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFN0YXJ0UXVlc3RSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hY2NlcHRlZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmFjY2VwdGVkID0gbWVzc2FnZS5hY2NlcHRlZCA/IFN0YXJ0UXVlc3RSZXNwb25zZV9BY2NlcHRlZC50b0pTT04obWVzc2FnZS5hY2NlcHRlZCkgOiB1bmRlZmluZWQpO1xuICAgIG1lc3NhZ2UuaW52YWxpZFF1ZXN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaW52YWxpZFF1ZXN0ID0gbWVzc2FnZS5pbnZhbGlkUXVlc3QgPyBJbnZhbGlkUXVlc3QudG9KU09OKG1lc3NhZ2UuaW52YWxpZFF1ZXN0KSA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5ub3RVdWlkRXJyb3IgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ub3RVdWlkRXJyb3IgPSBtZXNzYWdlLm5vdFV1aWRFcnJvciA/IE5vdFVVSUQudG9KU09OKG1lc3NhZ2Uubm90VXVpZEVycm9yKSA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQgJiYgKG9iai5pbnRlcm5hbFNlcnZlckVycm9yID0gbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yXG4gICAgICA/IEludGVybmFsU2VydmVyRXJyb3IudG9KU09OKG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8U3RhcnRRdWVzdFJlc3BvbnNlPiwgST4+KGJhc2U/OiBJKTogU3RhcnRRdWVzdFJlc3BvbnNlIHtcbiAgICByZXR1cm4gU3RhcnRRdWVzdFJlc3BvbnNlLmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxTdGFydFF1ZXN0UmVzcG9uc2U+LCBJPj4ob2JqZWN0OiBJKTogU3RhcnRRdWVzdFJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVN0YXJ0UXVlc3RSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuYWNjZXB0ZWQgPSAob2JqZWN0LmFjY2VwdGVkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFjY2VwdGVkICE9PSBudWxsKVxuICAgICAgPyBTdGFydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQuZnJvbVBhcnRpYWwob2JqZWN0LmFjY2VwdGVkKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgbWVzc2FnZS5pbnZhbGlkUXVlc3QgPSAob2JqZWN0LmludmFsaWRRdWVzdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pbnZhbGlkUXVlc3QgIT09IG51bGwpXG4gICAgICA/IEludmFsaWRRdWVzdC5mcm9tUGFydGlhbChvYmplY3QuaW52YWxpZFF1ZXN0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgbWVzc2FnZS5ub3RVdWlkRXJyb3IgPSAob2JqZWN0Lm5vdFV1aWRFcnJvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub3RVdWlkRXJyb3IgIT09IG51bGwpXG4gICAgICA/IE5vdFVVSUQuZnJvbVBhcnRpYWwob2JqZWN0Lm5vdFV1aWRFcnJvcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciA9IChvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yICE9PSBudWxsKVxuICAgICAgPyBJbnRlcm5hbFNlcnZlckVycm9yLmZyb21QYXJ0aWFsKG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkKCk6IFN0YXJ0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCB7XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGNvbnN0IFN0YXJ0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCA9IHtcbiAgZW5jb2RlKF86IFN0YXJ0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkIHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVN0YXJ0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBTdGFydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8U3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkPiwgST4+KGJhc2U/OiBJKTogU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkIHtcbiAgICByZXR1cm4gU3RhcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkLmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxTdGFydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQ+LCBJPj4oXzogSSk6IFN0YXJ0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VTdGFydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VBYm9ydFF1ZXN0UmVxdWVzdCgpOiBBYm9ydFF1ZXN0UmVxdWVzdCB7XG4gIHJldHVybiB7IHF1ZXN0SW5zdGFuY2VJZDogXCJcIiB9O1xufVxuXG5leHBvcnQgY29uc3QgQWJvcnRRdWVzdFJlcXVlc3QgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBBYm9ydFF1ZXN0UmVxdWVzdCwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnF1ZXN0SW5zdGFuY2VJZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UucXVlc3RJbnN0YW5jZUlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBBYm9ydFF1ZXN0UmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VBYm9ydFF1ZXN0UmVxdWVzdCgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5xdWVzdEluc3RhbmNlSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogQWJvcnRRdWVzdFJlcXVlc3Qge1xuICAgIHJldHVybiB7IHF1ZXN0SW5zdGFuY2VJZDogaXNTZXQob2JqZWN0LnF1ZXN0SW5zdGFuY2VJZCkgPyBTdHJpbmcob2JqZWN0LnF1ZXN0SW5zdGFuY2VJZCkgOiBcIlwiIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEFib3J0UXVlc3RSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnF1ZXN0SW5zdGFuY2VJZCAhPT0gdW5kZWZpbmVkICYmIChvYmoucXVlc3RJbnN0YW5jZUlkID0gbWVzc2FnZS5xdWVzdEluc3RhbmNlSWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxBYm9ydFF1ZXN0UmVxdWVzdD4sIEk+PihiYXNlPzogSSk6IEFib3J0UXVlc3RSZXF1ZXN0IHtcbiAgICByZXR1cm4gQWJvcnRRdWVzdFJlcXVlc3QuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEFib3J0UXVlc3RSZXF1ZXN0PiwgST4+KG9iamVjdDogSSk6IEFib3J0UXVlc3RSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUFib3J0UXVlc3RSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5xdWVzdEluc3RhbmNlSWQgPSBvYmplY3QucXVlc3RJbnN0YW5jZUlkID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlQWJvcnRRdWVzdFJlc3BvbnNlKCk6IEFib3J0UXVlc3RSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYWNjZXB0ZWQ6IHVuZGVmaW5lZCxcbiAgICBub3RGb3VuZFF1ZXN0SW5zdGFuY2U6IHVuZGVmaW5lZCxcbiAgICBub3RVdWlkRXJyb3I6IHVuZGVmaW5lZCxcbiAgICBub3RPd25lcjogdW5kZWZpbmVkLFxuICAgIGludGVybmFsU2VydmVyRXJyb3I6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEFib3J0UXVlc3RSZXNwb25zZSA9IHtcbiAgZW5jb2RlKG1lc3NhZ2U6IEFib3J0UXVlc3RSZXNwb25zZSwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmFjY2VwdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZC5lbmNvZGUobWVzc2FnZS5hY2NlcHRlZCwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uubm90Rm91bmRRdWVzdEluc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE5vdEZvdW5kUXVlc3RJbnN0YW5jZS5lbmNvZGUobWVzc2FnZS5ub3RGb3VuZFF1ZXN0SW5zdGFuY2UsIHdyaXRlci51aW50MzIoMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm5vdFV1aWRFcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBOb3RVVUlELmVuY29kZShtZXNzYWdlLm5vdFV1aWRFcnJvciwgd3JpdGVyLnVpbnQzMigyNikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uubm90T3duZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgTm90T3duZXIuZW5jb2RlKG1lc3NhZ2Uubm90T3duZXIsIHdyaXRlci51aW50MzIoMzQpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmludGVybmFsU2VydmVyRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgSW50ZXJuYWxTZXJ2ZXJFcnJvci5lbmNvZGUobWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yLCB3cml0ZXIudWludDMyKDQyKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEFib3J0UXVlc3RSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VBYm9ydFF1ZXN0UmVzcG9uc2UoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuYWNjZXB0ZWQgPSBBYm9ydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2Uubm90Rm91bmRRdWVzdEluc3RhbmNlID0gTm90Rm91bmRRdWVzdEluc3RhbmNlLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpZiAodGFnICE9IDI2KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLm5vdFV1aWRFcnJvciA9IE5vdFVVSUQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGlmICh0YWcgIT0gMzQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2Uubm90T3duZXIgPSBOb3RPd25lci5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaWYgKHRhZyAhPSA0Mikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yID0gSW50ZXJuYWxTZXJ2ZXJFcnJvci5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEFib3J0UXVlc3RSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY2VwdGVkOiBpc1NldChvYmplY3QuYWNjZXB0ZWQpID8gQWJvcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkLmZyb21KU09OKG9iamVjdC5hY2NlcHRlZCkgOiB1bmRlZmluZWQsXG4gICAgICBub3RGb3VuZFF1ZXN0SW5zdGFuY2U6IGlzU2V0KG9iamVjdC5ub3RGb3VuZFF1ZXN0SW5zdGFuY2UpXG4gICAgICAgID8gTm90Rm91bmRRdWVzdEluc3RhbmNlLmZyb21KU09OKG9iamVjdC5ub3RGb3VuZFF1ZXN0SW5zdGFuY2UpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbm90VXVpZEVycm9yOiBpc1NldChvYmplY3Qubm90VXVpZEVycm9yKSA/IE5vdFVVSUQuZnJvbUpTT04ob2JqZWN0Lm5vdFV1aWRFcnJvcikgOiB1bmRlZmluZWQsXG4gICAgICBub3RPd25lcjogaXNTZXQob2JqZWN0Lm5vdE93bmVyKSA/IE5vdE93bmVyLmZyb21KU09OKG9iamVjdC5ub3RPd25lcikgOiB1bmRlZmluZWQsXG4gICAgICBpbnRlcm5hbFNlcnZlckVycm9yOiBpc1NldChvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgICAgPyBJbnRlcm5hbFNlcnZlckVycm9yLmZyb21KU09OKG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBBYm9ydFF1ZXN0UmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuYWNjZXB0ZWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hY2NlcHRlZCA9IG1lc3NhZ2UuYWNjZXB0ZWQgPyBBYm9ydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQudG9KU09OKG1lc3NhZ2UuYWNjZXB0ZWQpIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLm5vdEZvdW5kUXVlc3RJbnN0YW5jZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubm90Rm91bmRRdWVzdEluc3RhbmNlID0gbWVzc2FnZS5ub3RGb3VuZFF1ZXN0SW5zdGFuY2VcbiAgICAgID8gTm90Rm91bmRRdWVzdEluc3RhbmNlLnRvSlNPTihtZXNzYWdlLm5vdEZvdW5kUXVlc3RJbnN0YW5jZSlcbiAgICAgIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLm5vdFV1aWRFcnJvciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vdFV1aWRFcnJvciA9IG1lc3NhZ2Uubm90VXVpZEVycm9yID8gTm90VVVJRC50b0pTT04obWVzc2FnZS5ub3RVdWlkRXJyb3IpIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLm5vdE93bmVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub3RPd25lciA9IG1lc3NhZ2Uubm90T3duZXIgPyBOb3RPd25lci50b0pTT04obWVzc2FnZS5ub3RPd25lcikgOiB1bmRlZmluZWQpO1xuICAgIG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciAhPT0gdW5kZWZpbmVkICYmIChvYmouaW50ZXJuYWxTZXJ2ZXJFcnJvciA9IG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvclxuICAgICAgPyBJbnRlcm5hbFNlcnZlckVycm9yLnRvSlNPTihtZXNzYWdlLmludGVybmFsU2VydmVyRXJyb3IpXG4gICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEFib3J0UXVlc3RSZXNwb25zZT4sIEk+PihiYXNlPzogSSk6IEFib3J0UXVlc3RSZXNwb25zZSB7XG4gICAgcmV0dXJuIEFib3J0UXVlc3RSZXNwb25zZS5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8QWJvcnRRdWVzdFJlc3BvbnNlPiwgST4+KG9iamVjdDogSSk6IEFib3J0UXVlc3RSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VBYm9ydFF1ZXN0UmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmFjY2VwdGVkID0gKG9iamVjdC5hY2NlcHRlZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY2NlcHRlZCAhPT0gbnVsbClcbiAgICAgID8gQWJvcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkLmZyb21QYXJ0aWFsKG9iamVjdC5hY2NlcHRlZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2Uubm90Rm91bmRRdWVzdEluc3RhbmNlID1cbiAgICAgIChvYmplY3Qubm90Rm91bmRRdWVzdEluc3RhbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vdEZvdW5kUXVlc3RJbnN0YW5jZSAhPT0gbnVsbClcbiAgICAgICAgPyBOb3RGb3VuZFF1ZXN0SW5zdGFuY2UuZnJvbVBhcnRpYWwob2JqZWN0Lm5vdEZvdW5kUXVlc3RJbnN0YW5jZSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgbWVzc2FnZS5ub3RVdWlkRXJyb3IgPSAob2JqZWN0Lm5vdFV1aWRFcnJvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub3RVdWlkRXJyb3IgIT09IG51bGwpXG4gICAgICA/IE5vdFVVSUQuZnJvbVBhcnRpYWwob2JqZWN0Lm5vdFV1aWRFcnJvcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2Uubm90T3duZXIgPSAob2JqZWN0Lm5vdE93bmVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vdE93bmVyICE9PSBudWxsKVxuICAgICAgPyBOb3RPd25lci5mcm9tUGFydGlhbChvYmplY3Qubm90T3duZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLmludGVybmFsU2VydmVyRXJyb3IgPSAob2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvciAhPT0gbnVsbClcbiAgICAgID8gSW50ZXJuYWxTZXJ2ZXJFcnJvci5mcm9tUGFydGlhbChvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCgpOiBBYm9ydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBBYm9ydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQgPSB7XG4gIGVuY29kZShfOiBBYm9ydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VBYm9ydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogQWJvcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IEFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZD4sIEk+PihiYXNlPzogSSk6IEFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZCB7XG4gICAgcmV0dXJuIEFib3J0UXVlc3RSZXNwb25zZV9BY2NlcHRlZC5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8QWJvcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkPiwgST4+KF86IEkpOiBBYm9ydFF1ZXN0UmVzcG9uc2VfQWNjZXB0ZWQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQWJvcnRRdWVzdFJlc3BvbnNlX0FjY2VwdGVkKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnQoKTogRXZlbnQge1xuICByZXR1cm4geyBpZDogXCJcIiwgYWRkcmVzczogXCJcIiwgYWN0aW9uOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50ID0ge1xuICBlbmNvZGUobWVzc2FnZTogRXZlbnQsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5pZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuaWQpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5hZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5hZGRyZXNzKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEFjdGlvbi5lbmNvZGUobWVzc2FnZS5hY3Rpb24sIHdyaXRlci51aW50MzIoMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogRXZlbnQge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnQoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuaWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAodGFnICE9IDE4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpZiAodGFnICE9IDI2KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmFjdGlvbiA9IEFjdGlvbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGlzU2V0KG9iamVjdC5pZCkgPyBTdHJpbmcob2JqZWN0LmlkKSA6IFwiXCIsXG4gICAgICBhZGRyZXNzOiBpc1NldChvYmplY3QuYWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmFkZHJlc3MpIDogXCJcIixcbiAgICAgIGFjdGlvbjogaXNTZXQob2JqZWN0LmFjdGlvbikgPyBBY3Rpb24uZnJvbUpTT04ob2JqZWN0LmFjdGlvbikgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRXZlbnQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gbWVzc2FnZS5pZCk7XG4gICAgbWVzc2FnZS5hZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgKG9iai5hZGRyZXNzID0gbWVzc2FnZS5hZGRyZXNzKTtcbiAgICBtZXNzYWdlLmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIChvYmouYWN0aW9uID0gbWVzc2FnZS5hY3Rpb24gPyBBY3Rpb24udG9KU09OKG1lc3NhZ2UuYWN0aW9uKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEV2ZW50PiwgST4+KGJhc2U/OiBJKTogRXZlbnQge1xuICAgIHJldHVybiBFdmVudC5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8RXZlbnQ+LCBJPj4ob2JqZWN0OiBJKTogRXZlbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnQoKTtcbiAgICBtZXNzYWdlLmlkID0gb2JqZWN0LmlkID8/IFwiXCI7XG4gICAgbWVzc2FnZS5hZGRyZXNzID0gb2JqZWN0LmFkZHJlc3MgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmFjdGlvbiA9IChvYmplY3QuYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFjdGlvbiAhPT0gbnVsbClcbiAgICAgID8gQWN0aW9uLmZyb21QYXJ0aWFsKG9iamVjdC5hY3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFJlcXVlc3QoKTogRXZlbnRSZXF1ZXN0IHtcbiAgcmV0dXJuIHsgYWN0aW9uOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50UmVxdWVzdCA9IHtcbiAgZW5jb2RlKG1lc3NhZ2U6IEV2ZW50UmVxdWVzdCwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBBY3Rpb24uZW5jb2RlKG1lc3NhZ2UuYWN0aW9uLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEV2ZW50UmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFJlcXVlc3QoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuYWN0aW9uID0gQWN0aW9uLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRXZlbnRSZXF1ZXN0IHtcbiAgICByZXR1cm4geyBhY3Rpb246IGlzU2V0KG9iamVjdC5hY3Rpb24pID8gQWN0aW9uLmZyb21KU09OKG9iamVjdC5hY3Rpb24pIDogdW5kZWZpbmVkIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50UmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiAob2JqLmFjdGlvbiA9IG1lc3NhZ2UuYWN0aW9uID8gQWN0aW9uLnRvSlNPTihtZXNzYWdlLmFjdGlvbikgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxFdmVudFJlcXVlc3Q+LCBJPj4oYmFzZT86IEkpOiBFdmVudFJlcXVlc3Qge1xuICAgIHJldHVybiBFdmVudFJlcXVlc3QuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEV2ZW50UmVxdWVzdD4sIEk+PihvYmplY3Q6IEkpOiBFdmVudFJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5hY3Rpb24gPSAob2JqZWN0LmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY3Rpb24gIT09IG51bGwpXG4gICAgICA/IEFjdGlvbi5mcm9tUGFydGlhbChvYmplY3QuYWN0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnRSZXNwb25zZSgpOiBFdmVudFJlc3BvbnNlIHtcbiAgcmV0dXJuIHsgYWNjZXB0ZWRFdmVudElkOiB1bmRlZmluZWQsIGlnbm9yZWRFdmVudDogdW5kZWZpbmVkLCBpbnRlcm5hbFNlcnZlckVycm9yOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50UmVzcG9uc2UgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBFdmVudFJlc3BvbnNlLCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWNjZXB0ZWRFdmVudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmFjY2VwdGVkRXZlbnRJZCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmlnbm9yZWRFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBJZ25vcmVkRXZlbnQuZW5jb2RlKG1lc3NhZ2UuaWdub3JlZEV2ZW50LCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEludGVybmFsU2VydmVyRXJyb3IuZW5jb2RlKG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciwgd3JpdGVyLnVpbnQzMigyNikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFdmVudFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50UmVzcG9uc2UoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuYWNjZXB0ZWRFdmVudElkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5pZ25vcmVkRXZlbnQgPSBJZ25vcmVkRXZlbnQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGlmICh0YWcgIT0gMjYpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciA9IEludGVybmFsU2VydmVyRXJyb3IuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjZXB0ZWRFdmVudElkOiBpc1NldChvYmplY3QuYWNjZXB0ZWRFdmVudElkKSA/IFN0cmluZyhvYmplY3QuYWNjZXB0ZWRFdmVudElkKSA6IHVuZGVmaW5lZCxcbiAgICAgIGlnbm9yZWRFdmVudDogaXNTZXQob2JqZWN0Lmlnbm9yZWRFdmVudCkgPyBJZ25vcmVkRXZlbnQuZnJvbUpTT04ob2JqZWN0Lmlnbm9yZWRFdmVudCkgOiB1bmRlZmluZWQsXG4gICAgICBpbnRlcm5hbFNlcnZlckVycm9yOiBpc1NldChvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgICAgPyBJbnRlcm5hbFNlcnZlckVycm9yLmZyb21KU09OKG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdmVudFJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFjY2VwdGVkRXZlbnRJZCAhPT0gdW5kZWZpbmVkICYmIChvYmouYWNjZXB0ZWRFdmVudElkID0gbWVzc2FnZS5hY2NlcHRlZEV2ZW50SWQpO1xuICAgIG1lc3NhZ2UuaWdub3JlZEV2ZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaWdub3JlZEV2ZW50ID0gbWVzc2FnZS5pZ25vcmVkRXZlbnQgPyBJZ25vcmVkRXZlbnQudG9KU09OKG1lc3NhZ2UuaWdub3JlZEV2ZW50KSA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQgJiYgKG9iai5pbnRlcm5hbFNlcnZlckVycm9yID0gbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yXG4gICAgICA/IEludGVybmFsU2VydmVyRXJyb3IudG9KU09OKG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8RXZlbnRSZXNwb25zZT4sIEk+PihiYXNlPzogSSk6IEV2ZW50UmVzcG9uc2Uge1xuICAgIHJldHVybiBFdmVudFJlc3BvbnNlLmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxFdmVudFJlc3BvbnNlPiwgST4+KG9iamVjdDogSSk6IEV2ZW50UmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuYWNjZXB0ZWRFdmVudElkID0gb2JqZWN0LmFjY2VwdGVkRXZlbnRJZCA/PyB1bmRlZmluZWQ7XG4gICAgbWVzc2FnZS5pZ25vcmVkRXZlbnQgPSAob2JqZWN0Lmlnbm9yZWRFdmVudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pZ25vcmVkRXZlbnQgIT09IG51bGwpXG4gICAgICA/IElnbm9yZWRFdmVudC5mcm9tUGFydGlhbChvYmplY3QuaWdub3JlZEV2ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yID0gKG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IgIT09IG51bGwpXG4gICAgICA/IEludGVybmFsU2VydmVyRXJyb3IuZnJvbVBhcnRpYWwob2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVzdERlZmluaXRpb24oKTogUXVlc3REZWZpbml0aW9uIHtcbiAgcmV0dXJuIHsgc3RlcHM6IFtdLCBjb25uZWN0aW9uczogW10gfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXN0RGVmaW5pdGlvbiA9IHtcbiAgZW5jb2RlKG1lc3NhZ2U6IFF1ZXN0RGVmaW5pdGlvbiwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnN0ZXBzKSB7XG4gICAgICBTdGVwLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuY29ubmVjdGlvbnMpIHtcbiAgICAgIENvbm5lY3Rpb24uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFF1ZXN0RGVmaW5pdGlvbiB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVzdERlZmluaXRpb24oKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2Uuc3RlcHMucHVzaChTdGVwLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5jb25uZWN0aW9ucy5wdXNoKENvbm5lY3Rpb24uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlc3REZWZpbml0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RlcHM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5zdGVwcykgPyBvYmplY3Quc3RlcHMubWFwKChlOiBhbnkpID0+IFN0ZXAuZnJvbUpTT04oZSkpIDogW10sXG4gICAgICBjb25uZWN0aW9uczogQXJyYXkuaXNBcnJheShvYmplY3Q/LmNvbm5lY3Rpb25zKSA/IG9iamVjdC5jb25uZWN0aW9ucy5tYXAoKGU6IGFueSkgPT4gQ29ubmVjdGlvbi5mcm9tSlNPTihlKSkgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVzdERlZmluaXRpb24pOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIGlmIChtZXNzYWdlLnN0ZXBzKSB7XG4gICAgICBvYmouc3RlcHMgPSBtZXNzYWdlLnN0ZXBzLm1hcCgoZSkgPT4gZSA/IFN0ZXAudG9KU09OKGUpIDogdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnN0ZXBzID0gW107XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmNvbm5lY3Rpb25zKSB7XG4gICAgICBvYmouY29ubmVjdGlvbnMgPSBtZXNzYWdlLmNvbm5lY3Rpb25zLm1hcCgoZSkgPT4gZSA/IENvbm5lY3Rpb24udG9KU09OKGUpIDogdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmNvbm5lY3Rpb25zID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxRdWVzdERlZmluaXRpb24+LCBJPj4oYmFzZT86IEkpOiBRdWVzdERlZmluaXRpb24ge1xuICAgIHJldHVybiBRdWVzdERlZmluaXRpb24uZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFF1ZXN0RGVmaW5pdGlvbj4sIEk+PihvYmplY3Q6IEkpOiBRdWVzdERlZmluaXRpb24ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlc3REZWZpbml0aW9uKCk7XG4gICAgbWVzc2FnZS5zdGVwcyA9IG9iamVjdC5zdGVwcz8ubWFwKChlKSA9PiBTdGVwLmZyb21QYXJ0aWFsKGUpKSB8fCBbXTtcbiAgICBtZXNzYWdlLmNvbm5lY3Rpb25zID0gb2JqZWN0LmNvbm5lY3Rpb25zPy5tYXAoKGUpID0+IENvbm5lY3Rpb24uZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUNvbm5lY3Rpb24oKTogQ29ubmVjdGlvbiB7XG4gIHJldHVybiB7IHN0ZXBGcm9tOiBcIlwiLCBzdGVwVG86IFwiXCIgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENvbm5lY3Rpb24gPSB7XG4gIGVuY29kZShtZXNzYWdlOiBDb25uZWN0aW9uLCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uuc3RlcEZyb20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnN0ZXBGcm9tKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uuc3RlcFRvICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5zdGVwVG8pO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IENvbm5lY3Rpb24ge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQ29ubmVjdGlvbigpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5zdGVwRnJvbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2Uuc3RlcFRvID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IENvbm5lY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGVwRnJvbTogaXNTZXQob2JqZWN0LnN0ZXBGcm9tKSA/IFN0cmluZyhvYmplY3Quc3RlcEZyb20pIDogXCJcIixcbiAgICAgIHN0ZXBUbzogaXNTZXQob2JqZWN0LnN0ZXBUbykgPyBTdHJpbmcob2JqZWN0LnN0ZXBUbykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IENvbm5lY3Rpb24pOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uuc3RlcEZyb20gIT09IHVuZGVmaW5lZCAmJiAob2JqLnN0ZXBGcm9tID0gbWVzc2FnZS5zdGVwRnJvbSk7XG4gICAgbWVzc2FnZS5zdGVwVG8gIT09IHVuZGVmaW5lZCAmJiAob2JqLnN0ZXBUbyA9IG1lc3NhZ2Uuc3RlcFRvKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8Q29ubmVjdGlvbj4sIEk+PihiYXNlPzogSSk6IENvbm5lY3Rpb24ge1xuICAgIHJldHVybiBDb25uZWN0aW9uLmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxDb25uZWN0aW9uPiwgST4+KG9iamVjdDogSSk6IENvbm5lY3Rpb24ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQ29ubmVjdGlvbigpO1xuICAgIG1lc3NhZ2Uuc3RlcEZyb20gPSBvYmplY3Quc3RlcEZyb20gPz8gXCJcIjtcbiAgICBtZXNzYWdlLnN0ZXBUbyA9IG9iamVjdC5zdGVwVG8gPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VTdGVwKCk6IFN0ZXAge1xuICByZXR1cm4geyBpZDogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIsIHRhc2tzOiBbXSB9O1xufVxuXG5leHBvcnQgY29uc3QgU3RlcCA9IHtcbiAgZW5jb2RlKG1lc3NhZ2U6IFN0ZXAsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5pZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuaWQpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS50YXNrcykge1xuICAgICAgVGFzay5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogU3RlcCB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VTdGVwKCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGFnICE9IDEwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmlkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGlmICh0YWcgIT0gMjYpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UudGFza3MucHVzaChUYXNrLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFN0ZXAge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogaXNTZXQob2JqZWN0LmlkKSA/IFN0cmluZyhvYmplY3QuaWQpIDogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBpc1NldChvYmplY3QuZGVzY3JpcHRpb24pID8gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbikgOiBcIlwiLFxuICAgICAgdGFza3M6IEFycmF5LmlzQXJyYXkob2JqZWN0Py50YXNrcykgPyBvYmplY3QudGFza3MubWFwKChlOiBhbnkpID0+IFRhc2suZnJvbUpTT04oZSkpIDogW10sXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogU3RlcCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5pZCAhPT0gdW5kZWZpbmVkICYmIChvYmouaWQgPSBtZXNzYWdlLmlkKTtcbiAgICBtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgKG9iai5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIGlmIChtZXNzYWdlLnRhc2tzKSB7XG4gICAgICBvYmoudGFza3MgPSBtZXNzYWdlLnRhc2tzLm1hcCgoZSkgPT4gZSA/IFRhc2sudG9KU09OKGUpIDogdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnRhc2tzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxTdGVwPiwgST4+KGJhc2U/OiBJKTogU3RlcCB7XG4gICAgcmV0dXJuIFN0ZXAuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFN0ZXA+LCBJPj4ob2JqZWN0OiBJKTogU3RlcCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VTdGVwKCk7XG4gICAgbWVzc2FnZS5pZCA9IG9iamVjdC5pZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBvYmplY3QuZGVzY3JpcHRpb24gPz8gXCJcIjtcbiAgICBtZXNzYWdlLnRhc2tzID0gb2JqZWN0LnRhc2tzPy5tYXAoKGUpID0+IFRhc2suZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUFjdGlvbigpOiBBY3Rpb24ge1xuICByZXR1cm4geyB0eXBlOiBcIlwiLCBwYXJhbWV0ZXJzOiB7fSB9O1xufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uID0ge1xuICBlbmNvZGUobWVzc2FnZTogQWN0aW9uLCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudHlwZSk7XG4gICAgfVxuICAgIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2UucGFyYW1ldGVycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBBY3Rpb25fUGFyYW1ldGVyc0VudHJ5LmVuY29kZSh7IGtleToga2V5IGFzIGFueSwgdmFsdWUgfSwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEFjdGlvbiB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VBY3Rpb24oKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UudHlwZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGVudHJ5MiA9IEFjdGlvbl9QYXJhbWV0ZXJzRW50cnkuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBpZiAoZW50cnkyLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UucGFyYW1ldGVyc1tlbnRyeTIua2V5XSA9IGVudHJ5Mi52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogaXNTZXQob2JqZWN0LnR5cGUpID8gU3RyaW5nKG9iamVjdC50eXBlKSA6IFwiXCIsXG4gICAgICBwYXJhbWV0ZXJzOiBpc09iamVjdChvYmplY3QucGFyYW1ldGVycylcbiAgICAgICAgPyBPYmplY3QuZW50cmllcyhvYmplY3QucGFyYW1ldGVycykucmVkdWNlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+KChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGFjY1trZXldID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSlcbiAgICAgICAgOiB7fSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBBY3Rpb24pOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudHlwZSAhPT0gdW5kZWZpbmVkICYmIChvYmoudHlwZSA9IG1lc3NhZ2UudHlwZSk7XG4gICAgb2JqLnBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5wYXJhbWV0ZXJzKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhtZXNzYWdlLnBhcmFtZXRlcnMpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgICBvYmoucGFyYW1ldGVyc1trXSA9IHY7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEFjdGlvbj4sIEk+PihiYXNlPzogSSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIEFjdGlvbi5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8QWN0aW9uPiwgST4+KG9iamVjdDogSSk6IEFjdGlvbiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VBY3Rpb24oKTtcbiAgICBtZXNzYWdlLnR5cGUgPSBvYmplY3QudHlwZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UucGFyYW1ldGVycyA9IE9iamVjdC5lbnRyaWVzKG9iamVjdC5wYXJhbWV0ZXJzID8/IHt9KS5yZWR1Y2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4oXG4gICAgICAoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY2Nba2V5XSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sXG4gICAgICB7fSxcbiAgICApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUFjdGlvbl9QYXJhbWV0ZXJzRW50cnkoKTogQWN0aW9uX1BhcmFtZXRlcnNFbnRyeSB7XG4gIHJldHVybiB7IGtleTogXCJcIiwgdmFsdWU6IFwiXCIgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGlvbl9QYXJhbWV0ZXJzRW50cnkgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBBY3Rpb25fUGFyYW1ldGVyc0VudHJ5LCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uua2V5ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5rZXkpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEFjdGlvbl9QYXJhbWV0ZXJzRW50cnkge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQWN0aW9uX1BhcmFtZXRlcnNFbnRyeSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5rZXkgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAodGFnICE9IDE4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLnZhbHVlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEFjdGlvbl9QYXJhbWV0ZXJzRW50cnkge1xuICAgIHJldHVybiB7IGtleTogaXNTZXQob2JqZWN0LmtleSkgPyBTdHJpbmcob2JqZWN0LmtleSkgOiBcIlwiLCB2YWx1ZTogaXNTZXQob2JqZWN0LnZhbHVlKSA/IFN0cmluZyhvYmplY3QudmFsdWUpIDogXCJcIiB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBBY3Rpb25fUGFyYW1ldGVyc0VudHJ5KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmtleSAhPT0gdW5kZWZpbmVkICYmIChvYmoua2V5ID0gbWVzc2FnZS5rZXkpO1xuICAgIG1lc3NhZ2UudmFsdWUgIT09IHVuZGVmaW5lZCAmJiAob2JqLnZhbHVlID0gbWVzc2FnZS52YWx1ZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEFjdGlvbl9QYXJhbWV0ZXJzRW50cnk+LCBJPj4oYmFzZT86IEkpOiBBY3Rpb25fUGFyYW1ldGVyc0VudHJ5IHtcbiAgICByZXR1cm4gQWN0aW9uX1BhcmFtZXRlcnNFbnRyeS5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8QWN0aW9uX1BhcmFtZXRlcnNFbnRyeT4sIEk+PihvYmplY3Q6IEkpOiBBY3Rpb25fUGFyYW1ldGVyc0VudHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUFjdGlvbl9QYXJhbWV0ZXJzRW50cnkoKTtcbiAgICBtZXNzYWdlLmtleSA9IG9iamVjdC5rZXkgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnZhbHVlID0gb2JqZWN0LnZhbHVlID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlVGFzaygpOiBUYXNrIHtcbiAgcmV0dXJuIHsgaWQ6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBhY3Rpb25JdGVtczogW10gfTtcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2sgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBUYXNrLCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuaWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmlkKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYWN0aW9uSXRlbXMpIHtcbiAgICAgIEFjdGlvbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogVGFzayB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VUYXNrKCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGFnICE9IDEwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmlkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGlmICh0YWcgIT0gMjYpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuYWN0aW9uSXRlbXMucHVzaChBY3Rpb24uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogVGFzayB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpc1NldChvYmplY3QuaWQpID8gU3RyaW5nKG9iamVjdC5pZCkgOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IGlzU2V0KG9iamVjdC5kZXNjcmlwdGlvbikgPyBTdHJpbmcob2JqZWN0LmRlc2NyaXB0aW9uKSA6IFwiXCIsXG4gICAgICBhY3Rpb25JdGVtczogQXJyYXkuaXNBcnJheShvYmplY3Q/LmFjdGlvbkl0ZW1zKSA/IG9iamVjdC5hY3Rpb25JdGVtcy5tYXAoKGU6IGFueSkgPT4gQWN0aW9uLmZyb21KU09OKGUpKSA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFRhc2spOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gbWVzc2FnZS5pZCk7XG4gICAgbWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIChvYmouZGVzY3JpcHRpb24gPSBtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICBpZiAobWVzc2FnZS5hY3Rpb25JdGVtcykge1xuICAgICAgb2JqLmFjdGlvbkl0ZW1zID0gbWVzc2FnZS5hY3Rpb25JdGVtcy5tYXAoKGUpID0+IGUgPyBBY3Rpb24udG9KU09OKGUpIDogdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmFjdGlvbkl0ZW1zID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxUYXNrPiwgST4+KGJhc2U/OiBJKTogVGFzayB7XG4gICAgcmV0dXJuIFRhc2suZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFRhc2s+LCBJPj4ob2JqZWN0OiBJKTogVGFzayB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VUYXNrKCk7XG4gICAgbWVzc2FnZS5pZCA9IG9iamVjdC5pZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBvYmplY3QuZGVzY3JpcHRpb24gPz8gXCJcIjtcbiAgICBtZXNzYWdlLmFjdGlvbkl0ZW1zID0gb2JqZWN0LmFjdGlvbkl0ZW1zPy5tYXAoKGUpID0+IEFjdGlvbi5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlU3RlcENvbnRlbnQoKTogU3RlcENvbnRlbnQge1xuICByZXR1cm4geyB0b0RvczogW10sIHRhc2tzQ29tcGxldGVkOiBbXSB9O1xufVxuXG5leHBvcnQgY29uc3QgU3RlcENvbnRlbnQgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBTdGVwQ29udGVudCwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnRvRG9zKSB7XG4gICAgICBUYXNrLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UudGFza3NDb21wbGV0ZWQpIHtcbiAgICAgIFRhc2suZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFN0ZXBDb250ZW50IHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVN0ZXBDb250ZW50KCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGFnICE9IDEwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLnRvRG9zLnB1c2goVGFzay5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UudGFza3NDb21wbGV0ZWQucHVzaChUYXNrLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFN0ZXBDb250ZW50IHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9Eb3M6IEFycmF5LmlzQXJyYXkob2JqZWN0Py50b0RvcykgPyBvYmplY3QudG9Eb3MubWFwKChlOiBhbnkpID0+IFRhc2suZnJvbUpTT04oZSkpIDogW10sXG4gICAgICB0YXNrc0NvbXBsZXRlZDogQXJyYXkuaXNBcnJheShvYmplY3Q/LnRhc2tzQ29tcGxldGVkKVxuICAgICAgICA/IG9iamVjdC50YXNrc0NvbXBsZXRlZC5tYXAoKGU6IGFueSkgPT4gVGFzay5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBTdGVwQ29udGVudCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgaWYgKG1lc3NhZ2UudG9Eb3MpIHtcbiAgICAgIG9iai50b0RvcyA9IG1lc3NhZ2UudG9Eb3MubWFwKChlKSA9PiBlID8gVGFzay50b0pTT04oZSkgOiB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudG9Eb3MgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudGFza3NDb21wbGV0ZWQpIHtcbiAgICAgIG9iai50YXNrc0NvbXBsZXRlZCA9IG1lc3NhZ2UudGFza3NDb21wbGV0ZWQubWFwKChlKSA9PiBlID8gVGFzay50b0pTT04oZSkgOiB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudGFza3NDb21wbGV0ZWQgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFN0ZXBDb250ZW50PiwgST4+KGJhc2U/OiBJKTogU3RlcENvbnRlbnQge1xuICAgIHJldHVybiBTdGVwQ29udGVudC5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8U3RlcENvbnRlbnQ+LCBJPj4ob2JqZWN0OiBJKTogU3RlcENvbnRlbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlU3RlcENvbnRlbnQoKTtcbiAgICBtZXNzYWdlLnRvRG9zID0gb2JqZWN0LnRvRG9zPy5tYXAoKGUpID0+IFRhc2suZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UudGFza3NDb21wbGV0ZWQgPSBvYmplY3QudGFza3NDb21wbGV0ZWQ/Lm1hcCgoZSkgPT4gVGFzay5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlc3RTdGF0ZSgpOiBRdWVzdFN0YXRlIHtcbiAgcmV0dXJuIHsgY3VycmVudFN0ZXBzOiB7fSwgc3RlcHNMZWZ0OiAwLCBzdGVwc0NvbXBsZXRlZDogW10sIHJlcXVpcmVkU3RlcHM6IFtdIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVzdFN0YXRlID0ge1xuICBlbmNvZGUobWVzc2FnZTogUXVlc3RTdGF0ZSwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2UuY3VycmVudFN0ZXBzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIFF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkuZW5jb2RlKHsga2V5OiBrZXkgYXMgYW55LCB2YWx1ZSB9LCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH0pO1xuICAgIGlmIChtZXNzYWdlLnN0ZXBzTGVmdCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyOSkuZml4ZWQzMihtZXNzYWdlLnN0ZXBzTGVmdCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnN0ZXBzQ29tcGxldGVkKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcodiEpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5yZXF1aXJlZFN0ZXBzKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQyKS5zdHJpbmcodiEpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFF1ZXN0U3RhdGUge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlc3RTdGF0ZSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZW50cnkyID0gUXVlc3RTdGF0ZV9DdXJyZW50U3RlcHNFbnRyeS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGlmIChlbnRyeTIudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWVzc2FnZS5jdXJyZW50U3RlcHNbZW50cnkyLmtleV0gPSBlbnRyeTIudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaWYgKHRhZyAhPSAyOSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5zdGVwc0xlZnQgPSByZWFkZXIuZml4ZWQzMigpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaWYgKHRhZyAhPSAzNCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5zdGVwc0NvbXBsZXRlZC5wdXNoKHJlYWRlci5zdHJpbmcoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpZiAodGFnICE9IDQyKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLnJlcXVpcmVkU3RlcHMucHVzaChyZWFkZXIuc3RyaW5nKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXN0U3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U3RlcHM6IGlzT2JqZWN0KG9iamVjdC5jdXJyZW50U3RlcHMpXG4gICAgICAgID8gT2JqZWN0LmVudHJpZXMob2JqZWN0LmN1cnJlbnRTdGVwcykucmVkdWNlPHsgW2tleTogc3RyaW5nXTogU3RlcENvbnRlbnQgfT4oKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgYWNjW2tleV0gPSBTdGVwQ29udGVudC5mcm9tSlNPTih2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pXG4gICAgICAgIDoge30sXG4gICAgICBzdGVwc0xlZnQ6IGlzU2V0KG9iamVjdC5zdGVwc0xlZnQpID8gTnVtYmVyKG9iamVjdC5zdGVwc0xlZnQpIDogMCxcbiAgICAgIHN0ZXBzQ29tcGxldGVkOiBBcnJheS5pc0FycmF5KG9iamVjdD8uc3RlcHNDb21wbGV0ZWQpID8gb2JqZWN0LnN0ZXBzQ29tcGxldGVkLm1hcCgoZTogYW55KSA9PiBTdHJpbmcoZSkpIDogW10sXG4gICAgICByZXF1aXJlZFN0ZXBzOiBBcnJheS5pc0FycmF5KG9iamVjdD8ucmVxdWlyZWRTdGVwcykgPyBvYmplY3QucmVxdWlyZWRTdGVwcy5tYXAoKGU6IGFueSkgPT4gU3RyaW5nKGUpKSA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXN0U3RhdGUpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG9iai5jdXJyZW50U3RlcHMgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5jdXJyZW50U3RlcHMpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2UuY3VycmVudFN0ZXBzKS5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICAgICAgb2JqLmN1cnJlbnRTdGVwc1trXSA9IFN0ZXBDb250ZW50LnRvSlNPTih2KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBtZXNzYWdlLnN0ZXBzTGVmdCAhPT0gdW5kZWZpbmVkICYmIChvYmouc3RlcHNMZWZ0ID0gTWF0aC5yb3VuZChtZXNzYWdlLnN0ZXBzTGVmdCkpO1xuICAgIGlmIChtZXNzYWdlLnN0ZXBzQ29tcGxldGVkKSB7XG4gICAgICBvYmouc3RlcHNDb21wbGV0ZWQgPSBtZXNzYWdlLnN0ZXBzQ29tcGxldGVkLm1hcCgoZSkgPT4gZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5zdGVwc0NvbXBsZXRlZCA9IFtdO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5yZXF1aXJlZFN0ZXBzKSB7XG4gICAgICBvYmoucmVxdWlyZWRTdGVwcyA9IG1lc3NhZ2UucmVxdWlyZWRTdGVwcy5tYXAoKGUpID0+IGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoucmVxdWlyZWRTdGVwcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8UXVlc3RTdGF0ZT4sIEk+PihiYXNlPzogSSk6IFF1ZXN0U3RhdGUge1xuICAgIHJldHVybiBRdWVzdFN0YXRlLmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxRdWVzdFN0YXRlPiwgST4+KG9iamVjdDogSSk6IFF1ZXN0U3RhdGUge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlc3RTdGF0ZSgpO1xuICAgIG1lc3NhZ2UuY3VycmVudFN0ZXBzID0gT2JqZWN0LmVudHJpZXMob2JqZWN0LmN1cnJlbnRTdGVwcyA/PyB7fSkucmVkdWNlPHsgW2tleTogc3RyaW5nXTogU3RlcENvbnRlbnQgfT4oXG4gICAgICAoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY2Nba2V5XSA9IFN0ZXBDb250ZW50LmZyb21QYXJ0aWFsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSxcbiAgICAgIHt9LFxuICAgICk7XG4gICAgbWVzc2FnZS5zdGVwc0xlZnQgPSBvYmplY3Quc3RlcHNMZWZ0ID8/IDA7XG4gICAgbWVzc2FnZS5zdGVwc0NvbXBsZXRlZCA9IG9iamVjdC5zdGVwc0NvbXBsZXRlZD8ubWFwKChlKSA9PiBlKSB8fCBbXTtcbiAgICBtZXNzYWdlLnJlcXVpcmVkU3RlcHMgPSBvYmplY3QucmVxdWlyZWRTdGVwcz8ubWFwKChlKSA9PiBlKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVzdFN0YXRlX0N1cnJlbnRTdGVwc0VudHJ5KCk6IFF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkge1xuICByZXR1cm4geyBrZXk6IFwiXCIsIHZhbHVlOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBRdWVzdFN0YXRlX0N1cnJlbnRTdGVwc0VudHJ5LCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uua2V5ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5rZXkpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBTdGVwQ29udGVudC5lbmNvZGUobWVzc2FnZS52YWx1ZSwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBRdWVzdFN0YXRlX0N1cnJlbnRTdGVwc0VudHJ5IHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2Uua2V5ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS52YWx1ZSA9IFN0ZXBDb250ZW50LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlc3RTdGF0ZV9DdXJyZW50U3RlcHNFbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogaXNTZXQob2JqZWN0LmtleSkgPyBTdHJpbmcob2JqZWN0LmtleSkgOiBcIlwiLFxuICAgICAgdmFsdWU6IGlzU2V0KG9iamVjdC52YWx1ZSkgPyBTdGVwQ29udGVudC5mcm9tSlNPTihvYmplY3QudmFsdWUpIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uua2V5ICE9PSB1bmRlZmluZWQgJiYgKG9iai5rZXkgPSBtZXNzYWdlLmtleSk7XG4gICAgbWVzc2FnZS52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIChvYmoudmFsdWUgPSBtZXNzYWdlLnZhbHVlID8gU3RlcENvbnRlbnQudG9KU09OKG1lc3NhZ2UudmFsdWUpIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8UXVlc3RTdGF0ZV9DdXJyZW50U3RlcHNFbnRyeT4sIEk+PihiYXNlPzogSSk6IFF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkge1xuICAgIHJldHVybiBRdWVzdFN0YXRlX0N1cnJlbnRTdGVwc0VudHJ5LmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxRdWVzdFN0YXRlX0N1cnJlbnRTdGVwc0VudHJ5PiwgST4+KG9iamVjdDogSSk6IFF1ZXN0U3RhdGVfQ3VycmVudFN0ZXBzRW50cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlc3RTdGF0ZV9DdXJyZW50U3RlcHNFbnRyeSgpO1xuICAgIG1lc3NhZ2Uua2V5ID0gb2JqZWN0LmtleSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UudmFsdWUgPSAob2JqZWN0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbHVlICE9PSBudWxsKVxuICAgICAgPyBTdGVwQ29udGVudC5mcm9tUGFydGlhbChvYmplY3QudmFsdWUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVzdFN0YXRlV2l0aERhdGEoKTogUXVlc3RTdGF0ZVdpdGhEYXRhIHtcbiAgcmV0dXJuIHsgcXVlc3RJbnN0YW5jZUlkOiBcIlwiLCBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgcXVlc3RTdGF0ZTogdW5kZWZpbmVkIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVzdFN0YXRlV2l0aERhdGEgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBRdWVzdFN0YXRlV2l0aERhdGEsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5xdWVzdEluc3RhbmNlSWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnF1ZXN0SW5zdGFuY2VJZCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5xdWVzdFN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFF1ZXN0U3RhdGUuZW5jb2RlKG1lc3NhZ2UucXVlc3RTdGF0ZSwgd3JpdGVyLnVpbnQzMigzNCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBRdWVzdFN0YXRlV2l0aERhdGEge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlc3RTdGF0ZVdpdGhEYXRhKCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGFnICE9IDEwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLnF1ZXN0SW5zdGFuY2VJZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGlmICh0YWcgIT0gMjYpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpZiAodGFnICE9IDM0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLnF1ZXN0U3RhdGUgPSBRdWVzdFN0YXRlLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlc3RTdGF0ZVdpdGhEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3RJbnN0YW5jZUlkOiBpc1NldChvYmplY3QucXVlc3RJbnN0YW5jZUlkKSA/IFN0cmluZyhvYmplY3QucXVlc3RJbnN0YW5jZUlkKSA6IFwiXCIsXG4gICAgICBuYW1lOiBpc1NldChvYmplY3QubmFtZSkgPyBTdHJpbmcob2JqZWN0Lm5hbWUpIDogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBpc1NldChvYmplY3QuZGVzY3JpcHRpb24pID8gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbikgOiBcIlwiLFxuICAgICAgcXVlc3RTdGF0ZTogaXNTZXQob2JqZWN0LnF1ZXN0U3RhdGUpID8gUXVlc3RTdGF0ZS5mcm9tSlNPTihvYmplY3QucXVlc3RTdGF0ZSkgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlc3RTdGF0ZVdpdGhEYXRhKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnF1ZXN0SW5zdGFuY2VJZCAhPT0gdW5kZWZpbmVkICYmIChvYmoucXVlc3RJbnN0YW5jZUlkID0gbWVzc2FnZS5xdWVzdEluc3RhbmNlSWQpO1xuICAgIG1lc3NhZ2UubmFtZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubmFtZSA9IG1lc3NhZ2UubmFtZSk7XG4gICAgbWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIChvYmouZGVzY3JpcHRpb24gPSBtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICBtZXNzYWdlLnF1ZXN0U3RhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5xdWVzdFN0YXRlID0gbWVzc2FnZS5xdWVzdFN0YXRlID8gUXVlc3RTdGF0ZS50b0pTT04obWVzc2FnZS5xdWVzdFN0YXRlKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFF1ZXN0U3RhdGVXaXRoRGF0YT4sIEk+PihiYXNlPzogSSk6IFF1ZXN0U3RhdGVXaXRoRGF0YSB7XG4gICAgcmV0dXJuIFF1ZXN0U3RhdGVXaXRoRGF0YS5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8UXVlc3RTdGF0ZVdpdGhEYXRhPiwgST4+KG9iamVjdDogSSk6IFF1ZXN0U3RhdGVXaXRoRGF0YSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVzdFN0YXRlV2l0aERhdGEoKTtcbiAgICBtZXNzYWdlLnF1ZXN0SW5zdGFuY2VJZCA9IG9iamVjdC5xdWVzdEluc3RhbmNlSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm5hbWUgPSBvYmplY3QubmFtZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBvYmplY3QuZGVzY3JpcHRpb24gPz8gXCJcIjtcbiAgICBtZXNzYWdlLnF1ZXN0U3RhdGUgPSAob2JqZWN0LnF1ZXN0U3RhdGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucXVlc3RTdGF0ZSAhPT0gbnVsbClcbiAgICAgID8gUXVlc3RTdGF0ZS5mcm9tUGFydGlhbChvYmplY3QucXVlc3RTdGF0ZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXN0U3RhdGVVcGRhdGUoKTogUXVlc3RTdGF0ZVVwZGF0ZSB7XG4gIHJldHVybiB7IHF1ZXN0RGF0YTogdW5kZWZpbmVkLCBldmVudElkOiBcIlwiIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVzdFN0YXRlVXBkYXRlID0ge1xuICBlbmNvZGUobWVzc2FnZTogUXVlc3RTdGF0ZVVwZGF0ZSwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnF1ZXN0RGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBRdWVzdFN0YXRlV2l0aERhdGEuZW5jb2RlKG1lc3NhZ2UucXVlc3REYXRhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5ldmVudElkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5ldmVudElkKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBRdWVzdFN0YXRlVXBkYXRlIHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXN0U3RhdGVVcGRhdGUoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UucXVlc3REYXRhID0gUXVlc3RTdGF0ZVdpdGhEYXRhLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAodGFnICE9IDE4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmV2ZW50SWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlc3RTdGF0ZVVwZGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0RGF0YTogaXNTZXQob2JqZWN0LnF1ZXN0RGF0YSkgPyBRdWVzdFN0YXRlV2l0aERhdGEuZnJvbUpTT04ob2JqZWN0LnF1ZXN0RGF0YSkgOiB1bmRlZmluZWQsXG4gICAgICBldmVudElkOiBpc1NldChvYmplY3QuZXZlbnRJZCkgPyBTdHJpbmcob2JqZWN0LmV2ZW50SWQpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVzdFN0YXRlVXBkYXRlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnF1ZXN0RGF0YSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnF1ZXN0RGF0YSA9IG1lc3NhZ2UucXVlc3REYXRhID8gUXVlc3RTdGF0ZVdpdGhEYXRhLnRvSlNPTihtZXNzYWdlLnF1ZXN0RGF0YSkgOiB1bmRlZmluZWQpO1xuICAgIG1lc3NhZ2UuZXZlbnRJZCAhPT0gdW5kZWZpbmVkICYmIChvYmouZXZlbnRJZCA9IG1lc3NhZ2UuZXZlbnRJZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFF1ZXN0U3RhdGVVcGRhdGU+LCBJPj4oYmFzZT86IEkpOiBRdWVzdFN0YXRlVXBkYXRlIHtcbiAgICByZXR1cm4gUXVlc3RTdGF0ZVVwZGF0ZS5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8UXVlc3RTdGF0ZVVwZGF0ZT4sIEk+PihvYmplY3Q6IEkpOiBRdWVzdFN0YXRlVXBkYXRlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXN0U3RhdGVVcGRhdGUoKTtcbiAgICBtZXNzYWdlLnF1ZXN0RGF0YSA9IChvYmplY3QucXVlc3REYXRhICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnF1ZXN0RGF0YSAhPT0gbnVsbClcbiAgICAgID8gUXVlc3RTdGF0ZVdpdGhEYXRhLmZyb21QYXJ0aWFsKG9iamVjdC5xdWVzdERhdGEpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLmV2ZW50SWQgPSBvYmplY3QuZXZlbnRJZCA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVVzZXJVcGRhdGUoKTogVXNlclVwZGF0ZSB7XG4gIHJldHVybiB7IHF1ZXN0U3RhdGVVcGRhdGU6IHVuZGVmaW5lZCwgbmV3UXVlc3RTdGFydGVkOiB1bmRlZmluZWQsIGV2ZW50SWdub3JlZDogdW5kZWZpbmVkIH07XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyVXBkYXRlID0ge1xuICBlbmNvZGUobWVzc2FnZTogVXNlclVwZGF0ZSwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnF1ZXN0U3RhdGVVcGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUXVlc3RTdGF0ZVVwZGF0ZS5lbmNvZGUobWVzc2FnZS5xdWVzdFN0YXRlVXBkYXRlLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5uZXdRdWVzdFN0YXJ0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUXVlc3RTdGF0ZVdpdGhEYXRhLmVuY29kZShtZXNzYWdlLm5ld1F1ZXN0U3RhcnRlZCwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZXZlbnRJZ25vcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzcpLmZpeGVkMzIobWVzc2FnZS5ldmVudElnbm9yZWQpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFVzZXJVcGRhdGUge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlVXNlclVwZGF0ZSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5xdWVzdFN0YXRlVXBkYXRlID0gUXVlc3RTdGF0ZVVwZGF0ZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5uZXdRdWVzdFN0YXJ0ZWQgPSBRdWVzdFN0YXRlV2l0aERhdGEuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGlmICh0YWcgIT0gMzcpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuZXZlbnRJZ25vcmVkID0gcmVhZGVyLmZpeGVkMzIoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBVc2VyVXBkYXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3RTdGF0ZVVwZGF0ZTogaXNTZXQob2JqZWN0LnF1ZXN0U3RhdGVVcGRhdGUpID8gUXVlc3RTdGF0ZVVwZGF0ZS5mcm9tSlNPTihvYmplY3QucXVlc3RTdGF0ZVVwZGF0ZSkgOiB1bmRlZmluZWQsXG4gICAgICBuZXdRdWVzdFN0YXJ0ZWQ6IGlzU2V0KG9iamVjdC5uZXdRdWVzdFN0YXJ0ZWQpID8gUXVlc3RTdGF0ZVdpdGhEYXRhLmZyb21KU09OKG9iamVjdC5uZXdRdWVzdFN0YXJ0ZWQpIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnRJZ25vcmVkOiBpc1NldChvYmplY3QuZXZlbnRJZ25vcmVkKSA/IE51bWJlcihvYmplY3QuZXZlbnRJZ25vcmVkKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBVc2VyVXBkYXRlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnF1ZXN0U3RhdGVVcGRhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5xdWVzdFN0YXRlVXBkYXRlID0gbWVzc2FnZS5xdWVzdFN0YXRlVXBkYXRlID8gUXVlc3RTdGF0ZVVwZGF0ZS50b0pTT04obWVzc2FnZS5xdWVzdFN0YXRlVXBkYXRlKSA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5uZXdRdWVzdFN0YXJ0ZWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5uZXdRdWVzdFN0YXJ0ZWQgPSBtZXNzYWdlLm5ld1F1ZXN0U3RhcnRlZCA/IFF1ZXN0U3RhdGVXaXRoRGF0YS50b0pTT04obWVzc2FnZS5uZXdRdWVzdFN0YXJ0ZWQpIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLmV2ZW50SWdub3JlZCAhPT0gdW5kZWZpbmVkICYmIChvYmouZXZlbnRJZ25vcmVkID0gTWF0aC5yb3VuZChtZXNzYWdlLmV2ZW50SWdub3JlZCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxVc2VyVXBkYXRlPiwgST4+KGJhc2U/OiBJKTogVXNlclVwZGF0ZSB7XG4gICAgcmV0dXJuIFVzZXJVcGRhdGUuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFVzZXJVcGRhdGU+LCBJPj4ob2JqZWN0OiBJKTogVXNlclVwZGF0ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VVc2VyVXBkYXRlKCk7XG4gICAgbWVzc2FnZS5xdWVzdFN0YXRlVXBkYXRlID0gKG9iamVjdC5xdWVzdFN0YXRlVXBkYXRlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnF1ZXN0U3RhdGVVcGRhdGUgIT09IG51bGwpXG4gICAgICA/IFF1ZXN0U3RhdGVVcGRhdGUuZnJvbVBhcnRpYWwob2JqZWN0LnF1ZXN0U3RhdGVVcGRhdGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLm5ld1F1ZXN0U3RhcnRlZCA9IChvYmplY3QubmV3UXVlc3RTdGFydGVkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5ld1F1ZXN0U3RhcnRlZCAhPT0gbnVsbClcbiAgICAgID8gUXVlc3RTdGF0ZVdpdGhEYXRhLmZyb21QYXJ0aWFsKG9iamVjdC5uZXdRdWVzdFN0YXJ0ZWQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLmV2ZW50SWdub3JlZCA9IG9iamVjdC5ldmVudElnbm9yZWQgPz8gdW5kZWZpbmVkO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXN0cygpOiBRdWVzdHMge1xuICByZXR1cm4geyBxdWVzdHM6IFtdIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVzdHMgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBRdWVzdHMsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5xdWVzdHMpIHtcbiAgICAgIFF1ZXN0SW5zdGFuY2UuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFF1ZXN0cyB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVzdHMoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UucXVlc3RzLnB1c2goUXVlc3RJbnN0YW5jZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVzdHMge1xuICAgIHJldHVybiB7IHF1ZXN0czogQXJyYXkuaXNBcnJheShvYmplY3Q/LnF1ZXN0cykgPyBvYmplY3QucXVlc3RzLm1hcCgoZTogYW55KSA9PiBRdWVzdEluc3RhbmNlLmZyb21KU09OKGUpKSA6IFtdIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXN0cyk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgaWYgKG1lc3NhZ2UucXVlc3RzKSB7XG4gICAgICBvYmoucXVlc3RzID0gbWVzc2FnZS5xdWVzdHMubWFwKChlKSA9PiBlID8gUXVlc3RJbnN0YW5jZS50b0pTT04oZSkgOiB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoucXVlc3RzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxRdWVzdHM+LCBJPj4oYmFzZT86IEkpOiBRdWVzdHMge1xuICAgIHJldHVybiBRdWVzdHMuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFF1ZXN0cz4sIEk+PihvYmplY3Q6IEkpOiBRdWVzdHMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlc3RzKCk7XG4gICAgbWVzc2FnZS5xdWVzdHMgPSBvYmplY3QucXVlc3RzPy5tYXAoKGUpID0+IFF1ZXN0SW5zdGFuY2UuZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUdldEFsbFF1ZXN0c1Jlc3BvbnNlKCk6IEdldEFsbFF1ZXN0c1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHsgcXVlc3RzOiB1bmRlZmluZWQsIGludGVybmFsU2VydmVyRXJyb3I6IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgY29uc3QgR2V0QWxsUXVlc3RzUmVzcG9uc2UgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBHZXRBbGxRdWVzdHNSZXNwb25zZSwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnF1ZXN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBRdWVzdHMuZW5jb2RlKG1lc3NhZ2UucXVlc3RzLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEludGVybmFsU2VydmVyRXJyb3IuZW5jb2RlKG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBHZXRBbGxRdWVzdHNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VHZXRBbGxRdWVzdHNSZXNwb25zZSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5xdWVzdHMgPSBRdWVzdHMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciA9IEludGVybmFsU2VydmVyRXJyb3IuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBHZXRBbGxRdWVzdHNSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0czogaXNTZXQob2JqZWN0LnF1ZXN0cykgPyBRdWVzdHMuZnJvbUpTT04ob2JqZWN0LnF1ZXN0cykgOiB1bmRlZmluZWQsXG4gICAgICBpbnRlcm5hbFNlcnZlckVycm9yOiBpc1NldChvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgICAgPyBJbnRlcm5hbFNlcnZlckVycm9yLmZyb21KU09OKG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBHZXRBbGxRdWVzdHNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5xdWVzdHMgIT09IHVuZGVmaW5lZCAmJiAob2JqLnF1ZXN0cyA9IG1lc3NhZ2UucXVlc3RzID8gUXVlc3RzLnRvSlNPTihtZXNzYWdlLnF1ZXN0cykgOiB1bmRlZmluZWQpO1xuICAgIG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciAhPT0gdW5kZWZpbmVkICYmIChvYmouaW50ZXJuYWxTZXJ2ZXJFcnJvciA9IG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvclxuICAgICAgPyBJbnRlcm5hbFNlcnZlckVycm9yLnRvSlNPTihtZXNzYWdlLmludGVybmFsU2VydmVyRXJyb3IpXG4gICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEdldEFsbFF1ZXN0c1Jlc3BvbnNlPiwgST4+KGJhc2U/OiBJKTogR2V0QWxsUXVlc3RzUmVzcG9uc2Uge1xuICAgIHJldHVybiBHZXRBbGxRdWVzdHNSZXNwb25zZS5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8R2V0QWxsUXVlc3RzUmVzcG9uc2U+LCBJPj4ob2JqZWN0OiBJKTogR2V0QWxsUXVlc3RzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlR2V0QWxsUXVlc3RzUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnF1ZXN0cyA9IChvYmplY3QucXVlc3RzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnF1ZXN0cyAhPT0gbnVsbClcbiAgICAgID8gUXVlc3RzLmZyb21QYXJ0aWFsKG9iamVjdC5xdWVzdHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLmludGVybmFsU2VydmVyRXJyb3IgPSAob2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvciAhPT0gbnVsbClcbiAgICAgID8gSW50ZXJuYWxTZXJ2ZXJFcnJvci5mcm9tUGFydGlhbChvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXN0KCk6IFF1ZXN0IHtcbiAgcmV0dXJuIHsgbmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIsIGRlZmluaXRpb246IHVuZGVmaW5lZCB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlc3QgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBRdWVzdCwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZWZpbml0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFF1ZXN0RGVmaW5pdGlvbi5lbmNvZGUobWVzc2FnZS5kZWZpbml0aW9uLCB3cml0ZXIudWludDMyKDI2KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogX20wLlJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXN0KCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGFnICE9IDEwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLm5hbWUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAodGFnICE9IDE4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaWYgKHRhZyAhPSAyNikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5kZWZpbml0aW9uID0gUXVlc3REZWZpbml0aW9uLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBpc1NldChvYmplY3QubmFtZSkgPyBTdHJpbmcob2JqZWN0Lm5hbWUpIDogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBpc1NldChvYmplY3QuZGVzY3JpcHRpb24pID8gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbikgOiBcIlwiLFxuICAgICAgZGVmaW5pdGlvbjogaXNTZXQob2JqZWN0LmRlZmluaXRpb24pID8gUXVlc3REZWZpbml0aW9uLmZyb21KU09OKG9iamVjdC5kZWZpbml0aW9uKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5uYW1lICE9PSB1bmRlZmluZWQgJiYgKG9iai5uYW1lID0gbWVzc2FnZS5uYW1lKTtcbiAgICBtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgKG9iai5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIG1lc3NhZ2UuZGVmaW5pdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmRlZmluaXRpb24gPSBtZXNzYWdlLmRlZmluaXRpb24gPyBRdWVzdERlZmluaXRpb24udG9KU09OKG1lc3NhZ2UuZGVmaW5pdGlvbikgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxRdWVzdD4sIEk+PihiYXNlPzogSSk6IFF1ZXN0IHtcbiAgICByZXR1cm4gUXVlc3QuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFF1ZXN0PiwgST4+KG9iamVjdDogSSk6IFF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXN0KCk7XG4gICAgbWVzc2FnZS5uYW1lID0gb2JqZWN0Lm5hbWUgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gb2JqZWN0LmRlc2NyaXB0aW9uID8/IFwiXCI7XG4gICAgbWVzc2FnZS5kZWZpbml0aW9uID0gKG9iamVjdC5kZWZpbml0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlZmluaXRpb24gIT09IG51bGwpXG4gICAgICA/IFF1ZXN0RGVmaW5pdGlvbi5mcm9tUGFydGlhbChvYmplY3QuZGVmaW5pdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUdldFF1ZXN0RGVmaW5pdGlvblJlcXVlc3QoKTogR2V0UXVlc3REZWZpbml0aW9uUmVxdWVzdCB7XG4gIHJldHVybiB7IHF1ZXN0SWQ6IFwiXCIgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEdldFF1ZXN0RGVmaW5pdGlvblJlcXVlc3QgPSB7XG4gIGVuY29kZShtZXNzYWdlOiBHZXRRdWVzdERlZmluaXRpb25SZXF1ZXN0LCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UucXVlc3RJZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UucXVlc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogR2V0UXVlc3REZWZpbml0aW9uUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VHZXRRdWVzdERlZmluaXRpb25SZXF1ZXN0KCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGFnICE9IDEwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlLnF1ZXN0SWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoKHRhZyAmIDcpID09IDQgfHwgdGFnID09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogR2V0UXVlc3REZWZpbml0aW9uUmVxdWVzdCB7XG4gICAgcmV0dXJuIHsgcXVlc3RJZDogaXNTZXQob2JqZWN0LnF1ZXN0SWQpID8gU3RyaW5nKG9iamVjdC5xdWVzdElkKSA6IFwiXCIgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2V0UXVlc3REZWZpbml0aW9uUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5xdWVzdElkICE9PSB1bmRlZmluZWQgJiYgKG9iai5xdWVzdElkID0gbWVzc2FnZS5xdWVzdElkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8R2V0UXVlc3REZWZpbml0aW9uUmVxdWVzdD4sIEk+PihiYXNlPzogSSk6IEdldFF1ZXN0RGVmaW5pdGlvblJlcXVlc3Qge1xuICAgIHJldHVybiBHZXRRdWVzdERlZmluaXRpb25SZXF1ZXN0LmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxHZXRRdWVzdERlZmluaXRpb25SZXF1ZXN0PiwgST4+KG9iamVjdDogSSk6IEdldFF1ZXN0RGVmaW5pdGlvblJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlR2V0UXVlc3REZWZpbml0aW9uUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UucXVlc3RJZCA9IG9iamVjdC5xdWVzdElkID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlR2V0UXVlc3REZWZpbml0aW9uUmVzcG9uc2UoKTogR2V0UXVlc3REZWZpbml0aW9uUmVzcG9uc2Uge1xuICByZXR1cm4geyBxdWVzdDogdW5kZWZpbmVkLCBpbnRlcm5hbFNlcnZlckVycm9yOiB1bmRlZmluZWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEdldFF1ZXN0RGVmaW5pdGlvblJlc3BvbnNlID0ge1xuICBlbmNvZGUobWVzc2FnZTogR2V0UXVlc3REZWZpbml0aW9uUmVzcG9uc2UsIHdyaXRlcjogX20wLldyaXRlciA9IF9tMC5Xcml0ZXIuY3JlYXRlKCkpOiBfbTAuV3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5xdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBRdWVzdC5lbmNvZGUobWVzc2FnZS5xdWVzdCwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBJbnRlcm5hbFNlcnZlckVycm9yLmVuY29kZShtZXNzYWdlLmludGVybmFsU2VydmVyRXJyb3IsIHdyaXRlci51aW50MzIoMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBfbTAuUmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogR2V0UXVlc3REZWZpbml0aW9uUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0IGluc3RhbmNlb2YgX20wLlJlYWRlciA/IGlucHV0IDogX20wLlJlYWRlci5jcmVhdGUoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlR2V0UXVlc3REZWZpbml0aW9uUmVzcG9uc2UoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UucXVlc3QgPSBRdWVzdC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRhZyAhPSAxOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yID0gSW50ZXJuYWxTZXJ2ZXJFcnJvci5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEdldFF1ZXN0RGVmaW5pdGlvblJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Q6IGlzU2V0KG9iamVjdC5xdWVzdCkgPyBRdWVzdC5mcm9tSlNPTihvYmplY3QucXVlc3QpIDogdW5kZWZpbmVkLFxuICAgICAgaW50ZXJuYWxTZXJ2ZXJFcnJvcjogaXNTZXQob2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IpXG4gICAgICAgID8gSW50ZXJuYWxTZXJ2ZXJFcnJvci5mcm9tSlNPTihvYmplY3QuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2V0UXVlc3REZWZpbml0aW9uUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucXVlc3QgIT09IHVuZGVmaW5lZCAmJiAob2JqLnF1ZXN0ID0gbWVzc2FnZS5xdWVzdCA/IFF1ZXN0LnRvSlNPTihtZXNzYWdlLnF1ZXN0KSA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQgJiYgKG9iai5pbnRlcm5hbFNlcnZlckVycm9yID0gbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yXG4gICAgICA/IEludGVybmFsU2VydmVyRXJyb3IudG9KU09OKG1lc3NhZ2UuaW50ZXJuYWxTZXJ2ZXJFcnJvcilcbiAgICAgIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGNyZWF0ZTxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8R2V0UXVlc3REZWZpbml0aW9uUmVzcG9uc2U+LCBJPj4oYmFzZT86IEkpOiBHZXRRdWVzdERlZmluaXRpb25SZXNwb25zZSB7XG4gICAgcmV0dXJuIEdldFF1ZXN0RGVmaW5pdGlvblJlc3BvbnNlLmZyb21QYXJ0aWFsKGJhc2UgPz8ge30pO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxHZXRRdWVzdERlZmluaXRpb25SZXNwb25zZT4sIEk+PihvYmplY3Q6IEkpOiBHZXRRdWVzdERlZmluaXRpb25SZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VHZXRRdWVzdERlZmluaXRpb25SZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UucXVlc3QgPSAob2JqZWN0LnF1ZXN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnF1ZXN0ICE9PSBudWxsKSA/IFF1ZXN0LmZyb21QYXJ0aWFsKG9iamVjdC5xdWVzdCkgOiB1bmRlZmluZWQ7XG4gICAgbWVzc2FnZS5pbnRlcm5hbFNlcnZlckVycm9yID0gKG9iamVjdC5pbnRlcm5hbFNlcnZlckVycm9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IgIT09IG51bGwpXG4gICAgICA/IEludGVybmFsU2VydmVyRXJyb3IuZnJvbVBhcnRpYWwob2JqZWN0LmludGVybmFsU2VydmVyRXJyb3IpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVzdEluc3RhbmNlKCk6IFF1ZXN0SW5zdGFuY2Uge1xuICByZXR1cm4geyBpbnN0YW5jZUlkOiBcIlwiLCBxdWVzdDogdW5kZWZpbmVkLCBzdGF0ZTogdW5kZWZpbmVkIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVzdEluc3RhbmNlID0ge1xuICBlbmNvZGUobWVzc2FnZTogUXVlc3RJbnN0YW5jZSwgd3JpdGVyOiBfbTAuV3JpdGVyID0gX20wLldyaXRlci5jcmVhdGUoKSk6IF9tMC5Xcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmluc3RhbmNlSWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmluc3RhbmNlSWQpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5xdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBRdWVzdC5lbmNvZGUobWVzc2FnZS5xdWVzdCwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uuc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUXVlc3RTdGF0ZS5lbmNvZGUobWVzc2FnZS5zdGF0ZSwgd3JpdGVyLnVpbnQzMigyNikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBRdWVzdEluc3RhbmNlIHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dCBpbnN0YW5jZW9mIF9tMC5SZWFkZXIgPyBpbnB1dCA6IF9tMC5SZWFkZXIuY3JlYXRlKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXN0SW5zdGFuY2UoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UuaW5zdGFuY2VJZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0YWcgIT0gMTgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2UucXVlc3QgPSBRdWVzdC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaWYgKHRhZyAhPSAyNikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5zdGF0ZSA9IFF1ZXN0U3RhdGUuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgodGFnICYgNykgPT0gNCB8fCB0YWcgPT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVzdEluc3RhbmNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5zdGFuY2VJZDogaXNTZXQob2JqZWN0Lmluc3RhbmNlSWQpID8gU3RyaW5nKG9iamVjdC5pbnN0YW5jZUlkKSA6IFwiXCIsXG4gICAgICBxdWVzdDogaXNTZXQob2JqZWN0LnF1ZXN0KSA/IFF1ZXN0LmZyb21KU09OKG9iamVjdC5xdWVzdCkgOiB1bmRlZmluZWQsXG4gICAgICBzdGF0ZTogaXNTZXQob2JqZWN0LnN0YXRlKSA/IFF1ZXN0U3RhdGUuZnJvbUpTT04ob2JqZWN0LnN0YXRlKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVzdEluc3RhbmNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmluc3RhbmNlSWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmluc3RhbmNlSWQgPSBtZXNzYWdlLmluc3RhbmNlSWQpO1xuICAgIG1lc3NhZ2UucXVlc3QgIT09IHVuZGVmaW5lZCAmJiAob2JqLnF1ZXN0ID0gbWVzc2FnZS5xdWVzdCA/IFF1ZXN0LnRvSlNPTihtZXNzYWdlLnF1ZXN0KSA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIChvYmouc3RhdGUgPSBtZXNzYWdlLnN0YXRlID8gUXVlc3RTdGF0ZS50b0pTT04obWVzc2FnZS5zdGF0ZSkgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgY3JlYXRlPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxRdWVzdEluc3RhbmNlPiwgST4+KGJhc2U/OiBJKTogUXVlc3RJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFF1ZXN0SW5zdGFuY2UuZnJvbVBhcnRpYWwoYmFzZSA/PyB7fSk7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFF1ZXN0SW5zdGFuY2U+LCBJPj4ob2JqZWN0OiBJKTogUXVlc3RJbnN0YW5jZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVzdEluc3RhbmNlKCk7XG4gICAgbWVzc2FnZS5pbnN0YW5jZUlkID0gb2JqZWN0Lmluc3RhbmNlSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnF1ZXN0ID0gKG9iamVjdC5xdWVzdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5xdWVzdCAhPT0gbnVsbCkgPyBRdWVzdC5mcm9tUGFydGlhbChvYmplY3QucXVlc3QpIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2Uuc3RhdGUgPSAob2JqZWN0LnN0YXRlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnN0YXRlICE9PSBudWxsKVxuICAgICAgPyBRdWVzdFN0YXRlLmZyb21QYXJ0aWFsKG9iamVjdC5zdGF0ZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgUXVlc3RzU2VydmljZURlZmluaXRpb24gPSB0eXBlb2YgUXVlc3RzU2VydmljZURlZmluaXRpb247XG5leHBvcnQgY29uc3QgUXVlc3RzU2VydmljZURlZmluaXRpb24gPSB7XG4gIG5hbWU6IFwiUXVlc3RzU2VydmljZVwiLFxuICBmdWxsTmFtZTogXCJkZWNlbnRyYWxhbmQucXVlc3RzLlF1ZXN0c1NlcnZpY2VcIixcbiAgbWV0aG9kczoge1xuICAgIC8qKiBVc2VyIGFjdGlvbnMgKi9cbiAgICBzdGFydFF1ZXN0OiB7XG4gICAgICBuYW1lOiBcIlN0YXJ0UXVlc3RcIixcbiAgICAgIHJlcXVlc3RUeXBlOiBTdGFydFF1ZXN0UmVxdWVzdCxcbiAgICAgIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUeXBlOiBTdGFydFF1ZXN0UmVzcG9uc2UsXG4gICAgICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gICAgICBvcHRpb25zOiB7fSxcbiAgICB9LFxuICAgIGFib3J0UXVlc3Q6IHtcbiAgICAgIG5hbWU6IFwiQWJvcnRRdWVzdFwiLFxuICAgICAgcmVxdWVzdFR5cGU6IEFib3J0UXVlc3RSZXF1ZXN0LFxuICAgICAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gICAgICByZXNwb25zZVR5cGU6IEFib3J0UXVlc3RSZXNwb25zZSxcbiAgICAgIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHt9LFxuICAgIH0sXG4gICAgc2VuZEV2ZW50OiB7XG4gICAgICBuYW1lOiBcIlNlbmRFdmVudFwiLFxuICAgICAgcmVxdWVzdFR5cGU6IEV2ZW50UmVxdWVzdCxcbiAgICAgIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUeXBlOiBFdmVudFJlc3BvbnNlLFxuICAgICAgcmVzcG9uc2VTdHJlYW06IGZhbHNlLFxuICAgICAgb3B0aW9uczoge30sXG4gICAgfSxcbiAgICAvKiogTGlzdGVuIHRvIGNoYW5nZXMgaW4gcXVlc3Qgc3RhdGVzIGFuZCBldmVudCBwcm9jZXNzaW5nIHVwZGF0ZXMgKi9cbiAgICBzdWJzY3JpYmU6IHtcbiAgICAgIG5hbWU6IFwiU3Vic2NyaWJlXCIsXG4gICAgICByZXF1ZXN0VHlwZTogRW1wdHksXG4gICAgICByZXF1ZXN0U3RyZWFtOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNlVHlwZTogVXNlclVwZGF0ZSxcbiAgICAgIHJlc3BvbnNlU3RyZWFtOiB0cnVlLFxuICAgICAgb3B0aW9uczoge30sXG4gICAgfSxcbiAgICAvKiogUXVlcnkgcXVlc3QgaW5mb3JtYXRpb24gKi9cbiAgICBnZXRBbGxRdWVzdHM6IHtcbiAgICAgIG5hbWU6IFwiR2V0QWxsUXVlc3RzXCIsXG4gICAgICByZXF1ZXN0VHlwZTogRW1wdHksXG4gICAgICByZXF1ZXN0U3RyZWFtOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNlVHlwZTogR2V0QWxsUXVlc3RzUmVzcG9uc2UsXG4gICAgICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gICAgICBvcHRpb25zOiB7fSxcbiAgICB9LFxuICAgIGdldFF1ZXN0RGVmaW5pdGlvbjoge1xuICAgICAgbmFtZTogXCJHZXRRdWVzdERlZmluaXRpb25cIixcbiAgICAgIHJlcXVlc3RUeXBlOiBHZXRRdWVzdERlZmluaXRpb25SZXF1ZXN0LFxuICAgICAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gICAgICByZXNwb25zZVR5cGU6IEdldFF1ZXN0RGVmaW5pdGlvblJlc3BvbnNlLFxuICAgICAgcmVzcG9uc2VTdHJlYW06IGZhbHNlLFxuICAgICAgb3B0aW9uczoge30sXG4gICAgfSxcbiAgfSxcbn0gYXMgY29uc3Q7XG5cbnR5cGUgQnVpbHRpbiA9IERhdGUgfCBGdW5jdGlvbiB8IFVpbnQ4QXJyYXkgfCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBEZWVwUGFydGlhbDxUPiA9IFQgZXh0ZW5kcyBCdWlsdGluID8gVFxuICA6IFQgZXh0ZW5kcyBBcnJheTxpbmZlciBVPiA/IEFycmF5PERlZXBQYXJ0aWFsPFU+PiA6IFQgZXh0ZW5kcyBSZWFkb25seUFycmF5PGluZmVyIFU+ID8gUmVhZG9ubHlBcnJheTxEZWVwUGFydGlhbDxVPj5cbiAgOiBUIGV4dGVuZHMge30gPyB7IFtLIGluIGtleW9mIFRdPzogRGVlcFBhcnRpYWw8VFtLXT4gfVxuICA6IFBhcnRpYWw8VD47XG5cbnR5cGUgS2V5c09mVW5pb248VD4gPSBUIGV4dGVuZHMgVCA/IGtleW9mIFQgOiBuZXZlcjtcbmV4cG9ydCB0eXBlIEV4YWN0PFAsIEkgZXh0ZW5kcyBQPiA9IFAgZXh0ZW5kcyBCdWlsdGluID8gUFxuICA6IFAgJiB7IFtLIGluIGtleW9mIFBdOiBFeGFjdDxQW0tdLCBJW0tdPiB9ICYgeyBbSyBpbiBFeGNsdWRlPGtleW9mIEksIEtleXNPZlVuaW9uPFA+Pl06IG5ldmVyIH07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNTZXQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cbiJdfQ==