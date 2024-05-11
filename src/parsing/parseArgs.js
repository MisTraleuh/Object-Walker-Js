import { process } from 'node:process';

/**
 * Parses the command line arguments and returns an object with the keys being the argument names and the values being the argument values.
 * @returns {Object} The arguments parsed.
 * @example
 * const argsObj = parseArgs();
 * @description
 * This function will parse the command line arguments and return an object with the keys being the argument names and the values being the argument values.
 * The argument names are the keys without the '--' and the argument values are the values after the argument names.
*/
export function parseArgs() {
    let args = process.argv.slice(2);
    let obj = {};
    let currentKey = null;

    for (let arg of args) {
        if(arg.startsWith('--')) {
            currentKey = arg.slice(2);
            obj[currentKey] = '';
        } else {
            obj[currentKey] = arg;
        }
    }

    return obj;
}
