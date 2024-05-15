#!/usr/bin/env node

import { parseArgs } from './parsing/parseArgs.js';
import { checkArgs } from './parsing/checkArgs.js';
import { createObject } from './models/createObject.js';
import { ObjectWalker } from './models/ObjectWalker.js';
import { messageInfo, messageSuccess } from './utils/messages.js';
import process from 'node:process';
export { ObjectWalker } from './models/ObjectWalker.js';

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
    const uniqueProps = ObjectWalker(type, target, targetType, depth, visited, name, displayTypeError);

    messageInfo(`--- Properties and methods of ${String(ARGS.type)} ---`);
    uniqueProps.forEach(prop => {
        messageSuccess(prop);
    });
}

function isMain() {
    if (process.platform === "win32") {
        return import.meta.url === `file:///${process.argv[1].replace(/\\/g, "/")}`;
    } else {
        return import.meta.url === `file://${process.argv[1]}`;
    }
}

if (isMain()) {
    main();
}
