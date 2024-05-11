import { Colors } from "./colors.js";

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
    const helpMessage = `${Colors.CYAN}Usage: node index.js [options]${Colors.RESET}
Options:
    --h, --help         Display help
    --type              Type of source object
    --target            Target object
    --targetType        Target type of object target
    --depth             Depth of the search (default: 5)`;

    console.log(helpMessage);
    process.exit(0);
}
