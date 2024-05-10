import { displayHelp } from '../utils/displayHelp.js';
import { messageError, messageSuccess, messageWarning } from '../utils/messages.js';

const validArgs = [
    "type",
    "target",
    "targetType",
    "depth",
];

const validTypes = [
    "object",
    "function",
    "string",
    "number",
    "boolean",
    "symbol",
    "bigint",
];

export function checkArgs(ARGS) {
    /* Display help message */
    if (ARGS['help'] !== undefined || ARGS['h'] !== undefined) {
        displayHelp();
    }

    /* Check for required arguments */
    if (ARGS['type'] === undefined) {
        messageError('Missing argument: "type"');
    }
    if (ARGS['target'] === undefined) {
        messageError('Missing argument: "target"');
    }
    if (ARGS['targetType'] === undefined) {
        messageError('Missing argument: "targetType"');
    }
    if (validTypes.includes(ARGS['targetType']) === false) {
        messageError('Invalid argument: "targetType" must be a valid type');
    }
    
    /* Check for optional arguments */
    if (ARGS['depth'] !== undefined && isNaN(Number.parseInt(ARGS['depth'])) === true) {
        messageError('Invalid argument: "depth" must be a number');
    }
    if (ARGS['depth'] === undefined) {
        messageWarning('Missing argument: "depth"');
        messageWarning('Setting default value: 5');
        ARGS['depth'] = 5;
    }

    /* Check for unknown arguments */
    Object.keys(ARGS).forEach(key => {
        if (validArgs.includes(key) == false) {
            messageWarning(`Ignoring argument: "${key}"`);
            delete ARGS[key];
        }
    });
}
