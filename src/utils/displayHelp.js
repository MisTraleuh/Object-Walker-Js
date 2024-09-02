import { Colors } from "./colors.js";
import process from 'process';

/**
 * @returns {void} Nothing.
 * @example
 * displayHelp();
 * @description
 * This function will display the help message in the console. And then exit the program with code 0.
 * If istty is true, it will display the message in cyan, else it will display the message without color.
 * The help message will display the usage of the program.
*/
export function displayHelp() {
    const helpMessage = `${Colors.CYAN}Usage: ${process.argv[1]} [options]${Colors.RESET}
Options:
    --h, --help           Display help
    --type                Type of source object
    --target              Target object (can be 'any')
    --targetType          Target type of object target, must be:
                          object, function, string, number, boolean, symbol, bigint, any
    --depth               Depth of the search (default: 5)
    --disable-TypeError   Disable TypeError message`;

    console.log(helpMessage);
    process.exit(0);
}
