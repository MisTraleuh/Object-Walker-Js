import { parseArgs } from './parsing/parseArgs.js';
import { checkArgs } from './parsing/checkArgs.js';
import { Colors } from './utils/colors.js';
import { createObject } from './models/createObject.js';
import { messageSuccess } from './utils/messages.js';


function listAllProperties(startType, target, targetType, depth, ARGS, visited = new WeakSet(), name) {
    if (depth == 0) {
        return;
    }

    let currentObj = startType;
  
    if (startType !== Object(startType)) {
        currentObj = Object(startType);
    }

    const uniqueProps = new Set();

    if (visited.has(currentObj)) {
        return;
    }

    visited.add(currentObj);

    while (currentObj) {
        Object.getOwnPropertyNames(currentObj).forEach(prop => {
            if (prop === 'caller' || prop === 'callee' || prop === 'arguments') {
                return;
            }
            if (prop === target && typeof currentObj[prop] === targetType) {
                uniqueProps.add(prop);
            }

            const propertyValue = currentObj[prop];
    
            if ((typeof propertyValue === 'object' || typeof propertyValue === 'function') 
                && propertyValue !== null
                && propertyValue !== startType
            ) {
                listAllProperties(propertyValue, target, targetType, depth - 1, ARGS, visited, `${name}.${prop}`)
            }
        });
        currentObj = Object.getPrototypeOf(currentObj);
    }
  
    uniqueProps.forEach(prop => {
        messageSuccess(`${String(name)}.${prop}`);
    });
}

function main() {
    let ARGS = parseArgs();
    checkArgs(ARGS);
    const { type, target, targetType, depth } = createObject(ARGS);
    console.log(`${Colors.CYAN}--- Properties and methods of ${String(ARGS.type)} ---${Colors.RESET}`);
    listAllProperties(type, target, targetType, depth, ARGS, new WeakSet(), ARGS.type);
}

main();
