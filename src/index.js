import { parseArgs } from './parsing/parseArgs.js';
import { checkArgs } from './parsing/checkArgs.js';
import { Colors } from './utils/colors.js';
import { createObject } from './models/createObject.js';
import { listObject } from './models/listObject.js';

function main() {
    let ARGS = parseArgs();
    checkArgs(ARGS);
    const { type, target, targetType, depth } = createObject(ARGS);
    console.log(`${Colors.CYAN}--- Properties and methods of ${String(ARGS.type)} ---${Colors.RESET}`);
    listObject(type, target, targetType, depth, ARGS, new WeakSet(), ARGS.type);
}

main();
