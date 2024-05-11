
const uniqueProps = new Set();

/**
 * List all properties and methods of the startType object, and filter by target and targetType.
 * @param {*Object} startType 
 * @param {String} target 
 * @param {String} targetType 
 * @param {Number} depth
 * @param {WeakSet} visited 
 * @param {String} name 
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
 * const uniqueProps = listObject(type, target, targetType, depth, visited, name);
 * uniqueProps.forEach(prop => {
 *    console.log(prop);
 * });
 */
export function listObject(startType, target, targetType, depth, visited, name) {
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

    while (currentObj) {
        Object.getOwnPropertyNames(currentObj).forEach(prop => {
            // Disable ES6+ error
            if (prop === 'caller' || prop === 'callee' || prop === 'arguments') {
                return;
            }
            if (prop === target && typeof currentObj[prop] === targetType) {
                uniqueProps.add(`${String(name)}.${target}`);
            }

            const propertyValue = currentObj[prop];
    
            if ((typeof propertyValue === 'object' || typeof propertyValue === 'function') 
                && propertyValue !== null
                && propertyValue !== startType
            ) {
                listObject(propertyValue, target, targetType, depth - 1, visited, `${name}.${prop}`)
            }
        });
        currentObj = Object.getPrototypeOf(currentObj);
    }

    return uniqueProps;
}