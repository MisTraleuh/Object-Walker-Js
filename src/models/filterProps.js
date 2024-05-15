import { ObjectWalker } from './ObjectWalker.js';

const filterPropsES6Error = [
    'caller', 'callee', 'arguments',
    'WritableStreamDefaultWriter','ReadableStreamDefaultReader',
    'ReadableStreamDefaultController', 'WritableStreamDefaultController',
    'ReadableStream', 'WritableStream',
    'ReadableStreamBYOBReader', 'ReadableStreamBYOBRequest',
    'ReadableByteStreamController',
];

const filterTypeProps = [
    "object",
    "function",
    "symbol",
];

/**
 * Filter properties and methods of the startType object by target and targetType.
 * @param {Object} currentObj 
 * @param {Object} startType 
 * @param {Object} prop 
 * @param {String} target 
 * @param {String} targetType 
 * @param {Number} depth
 * @param {WeakSet} visited 
 * @param {String} name
 * @param {Boolean} displayTypeError
 * @param {Set} uniqueProps
 * @description This function will filter properties and methods of the startType object by target and targetType.
 * @returns {void} Nothing.
 */
export function filterProps(uniqueProps, currentObj, startType, prop, target, targetType, depth, visited, name, displayTypeError) {
    // Disable ES6+ error
    if (filterPropsES6Error.includes(prop)) {
        return;
    }

    if (prop === target && typeof currentObj[prop] === targetType) {
        uniqueProps.add(`${String(name)}.${target}`);
    } else if (prop === target && targetType === 'any') {
        uniqueProps.add(`${String(name)}.${target}`);
    }

    const propertyValue = currentObj[prop];

    if (filterTypeProps.includes(typeof propertyValue) && propertyValue !== null && propertyValue !== startType) {
        ObjectWalker(propertyValue, target, targetType, depth - 1, visited, `${name}.${prop}`, displayTypeError);
    }
}