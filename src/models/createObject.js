import { messageError } from "../utils/messages.js";

export function createObject(ARGS) {
    let obj = {};
    const { type, target, targetType, depth } = ARGS;

    try {
        obj.type = eval(type);
        obj.depth = Number.parseInt(depth);
        obj.target = target;
        obj.targetType = targetType;
    } catch (error) {
        messageError(`${error}`);
    }

    return obj;
}
