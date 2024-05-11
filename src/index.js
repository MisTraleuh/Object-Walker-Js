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
async function main() {
    let ARGS = parseArgs();
    checkArgs(ARGS);
    const { type, target, targetType, depth } = await createObject(ARGS);
    const visited = new WeakSet();
    const name = ARGS.type;
    const displayTypeError = ARGS['disable-TypeError'];
    const uniqueProps = listObject(type, target, targetType, depth, visited, name, displayTypeError);

    messageInfo(`--- Properties and methods of ${String(ARGS.type)} ---`);
    uniqueProps.forEach(prop => {
        messageSuccess(prop);
    });
}

main();
