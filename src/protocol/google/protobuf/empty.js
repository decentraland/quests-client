import _m0 from "protobufjs/minimal";
export const protobufPackage = "google.protobuf";
function createBaseEmpty() {
    return {};
}
export const Empty = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
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
        return Empty.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbXB0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQztBQUVyQyxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUM7QUFjakQsU0FBUyxlQUFlO0lBQ3RCLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNuQixNQUFNLENBQUMsQ0FBUSxFQUFFLFNBQXFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ3ZELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTthQUNsQjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLE1BQU07YUFDUDtZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFNO1FBQ2IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQVE7UUFDYixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUF5QyxJQUFRO1FBQ3JELE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBeUMsQ0FBSTtRQUN0RCxNQUFNLE9BQU8sR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUNsQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgX20wIGZyb20gXCJwcm90b2J1ZmpzL21pbmltYWxcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZ29vZ2xlLnByb3RvYnVmXCI7XG5cbi8qKlxuICogQSBnZW5lcmljIGVtcHR5IG1lc3NhZ2UgdGhhdCB5b3UgY2FuIHJlLXVzZSB0byBhdm9pZCBkZWZpbmluZyBkdXBsaWNhdGVkXG4gKiBlbXB0eSBtZXNzYWdlcyBpbiB5b3VyIEFQSXMuIEEgdHlwaWNhbCBleGFtcGxlIGlzIHRvIHVzZSBpdCBhcyB0aGUgcmVxdWVzdFxuICogb3IgdGhlIHJlc3BvbnNlIHR5cGUgb2YgYW4gQVBJIG1ldGhvZC4gRm9yIGluc3RhbmNlOlxuICpcbiAqICAgICBzZXJ2aWNlIEZvbyB7XG4gKiAgICAgICBycGMgQmFyKGdvb2dsZS5wcm90b2J1Zi5FbXB0eSkgcmV0dXJucyAoZ29vZ2xlLnByb3RvYnVmLkVtcHR5KTtcbiAqICAgICB9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW1wdHkge1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRW1wdHkoKTogRW1wdHkge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBFbXB0eSA9IHtcbiAgZW5jb2RlKF86IEVtcHR5LCB3cml0ZXI6IF9tMC5Xcml0ZXIgPSBfbTAuV3JpdGVyLmNyZWF0ZSgpKTogX20wLldyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IF9tMC5SZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFbXB0eSB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXQgaW5zdGFuY2VvZiBfbTAuUmVhZGVyID8gaW5wdXQgOiBfbTAuUmVhZGVyLmNyZWF0ZShpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFbXB0eSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgfVxuICAgICAgaWYgKCh0YWcgJiA3KSA9PSA0IHx8IHRhZyA9PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBFbXB0eSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBFbXB0eSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBjcmVhdGU8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEVtcHR5PiwgST4+KGJhc2U/OiBJKTogRW1wdHkge1xuICAgIHJldHVybiBFbXB0eS5mcm9tUGFydGlhbChiYXNlID8/IHt9KTtcbiAgfSxcblxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8RW1wdHk+LCBJPj4oXzogSSk6IEVtcHR5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUVtcHR5KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG50eXBlIEJ1aWx0aW4gPSBEYXRlIHwgRnVuY3Rpb24gfCBVaW50OEFycmF5IHwgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgRGVlcFBhcnRpYWw8VD4gPSBUIGV4dGVuZHMgQnVpbHRpbiA/IFRcbiAgOiBUIGV4dGVuZHMgQXJyYXk8aW5mZXIgVT4gPyBBcnJheTxEZWVwUGFydGlhbDxVPj4gOiBUIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxpbmZlciBVPiA/IFJlYWRvbmx5QXJyYXk8RGVlcFBhcnRpYWw8VT4+XG4gIDogVCBleHRlbmRzIHt9ID8geyBbSyBpbiBrZXlvZiBUXT86IERlZXBQYXJ0aWFsPFRbS10+IH1cbiAgOiBQYXJ0aWFsPFQ+O1xuXG50eXBlIEtleXNPZlVuaW9uPFQ+ID0gVCBleHRlbmRzIFQgPyBrZXlvZiBUIDogbmV2ZXI7XG5leHBvcnQgdHlwZSBFeGFjdDxQLCBJIGV4dGVuZHMgUD4gPSBQIGV4dGVuZHMgQnVpbHRpbiA/IFBcbiAgOiBQICYgeyBbSyBpbiBrZXlvZiBQXTogRXhhY3Q8UFtLXSwgSVtLXT4gfSAmIHsgW0sgaW4gRXhjbHVkZTxrZXlvZiBJLCBLZXlzT2ZVbmlvbjxQPj5dOiBuZXZlciB9O1xuIl19