import { messageWarning } from "../utils/messages.js";
import { filterProps } from "./filterProps.js";

const uniqueProps = new Set();

/**
 * List all properties and methods of the startType object, and filter by target and targetType.
 * @param {Object} startType 
 * @param {String} target 
 * @param {String} targetType 
 * @param {Number} depth
 * @param {WeakSet} visited 
 * @param {String} name
 * @param {Boolean} displayTypeError
 * @return {Set} uniqueProps
 * @description
 * This function will list all properties and methods of the startType object, and filter by target and targetType.
 * It will return a Set of unique properties and methods.
 * The depth parameter will limit the depth of the search.
 * The visited parameter is a WeakSet to keep track of visited objects.
 * The name parameter is the name of the object.
 * @example
 * const type = {};
 * const target = 'constructor';
 * const targetType = 'function';
 * const depth = 5;
 * const visited = new WeakSet();
 * const name = '{}';
 * const displayTypeError = false;
 * const uniqueProps = ObjectWalker(type, target, targetType, depth, visited, name, displayTypeError);
 * uniqueProps.forEach(prop => {
 *    console.log(prop);
 * });
 */
export function ObjectWalker(startType, target, targetType, depth, visited, name, displayTypeError) {
    if (depth == 0) {
        return;
    }

    let currentObj = startType;
  
    if (startType !== Object(startType)) {
        currentObj = Object(startType);
    }

    if (visited.has(currentObj)) {
        return;
    }

    visited.add(currentObj);

    while (currentObj !== null && currentObj !== undefined) {
        try {
            Object.getOwnPropertyNames(currentObj).forEach((prop) => {
                new filterProps(uniqueProps, currentObj, startType, prop, target, targetType, depth, visited, name, displayTypeError);
            });
            currentObj = Object.getPrototypeOf(currentObj);
        } catch (error) {
            if (displayTypeError === true) {
                messageWarning(error);
            }
            return uniqueProps;
        }
    }

    return uniqueProps;
}