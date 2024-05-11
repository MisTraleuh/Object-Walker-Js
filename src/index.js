#!/usr/bin/env node

import { parseArgs } from './parsing/parseArgs.js';
import { checkArgs } from './parsing/checkArgs.js';
import { createObject } from './models/createObject.js';
import { listObject } from './models/listObject.js';
import { messageInfo, messageSuccess } from './utils/messages.js';

/**
 * Main function of the program.
 * @returns {void} Nothing.
*/
function main() {
    let ARGS = parseArgs();
    checkArgs(ARGS);
    const { type, target, targetType, depth } = createObject(ARGS);
    messageInfo(`--- Properties and methods of ${String(ARGS.type)} ---`);
    const visited = new WeakSet();
    const name = ARGS.type;
    const uniqueProps = listObject(type, target, targetType, depth, visited, name);
    uniqueProps.forEach(prop => {
        messageSuccess(prop);
    });
}

main();
