import { messageError } from "../utils/messages.js";

/**
 * Creates an object with the parsed arguments.
 * @param {Object} ARGS The arguments parsed, returned from parseArgs().
 * @returns {Object} The object created.
 * @example
 * const ARGS = parseArgs();
 * const obj = createObject(ARGS);
*/
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
