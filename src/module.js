#!/usr/bin/env node

import { parseArgs, checkArgs, createObject, ObjectWalker, messageInfo, messageSuccess } from './index.js';

export { ObjectWalker };

/**
 * Main function of the program.
 * @returns {void} Nothing.
*/
export async function main() {
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
