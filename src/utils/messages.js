import { Colors } from "./colors.js";
import process from 'process';

/**
 * @param {String} message 
 * @returns {void} Nothing.
 * @example
 * messageError("Error message");
 * @description
 * This function will display an error message in the console. And then exit the program with code 1.
 * If istty is true, it will display the message in red, else it will display the message without color.
*/
export function messageError(message) {
    console.log(`${Colors.RED}[-] ${message}${Colors.RESET}`);
    console.log(`${Colors.RED}[-] Exiting...${Colors.RESET}`);
    process.exit(1);
}

/**
 * @param {String} message 
 * @returns {void} Nothing.
 * @example
 * messageWarning("Warning message");
 * @description
 * This function will display a warning message in the console.
 * If istty is true, it will display the message in yellow, else it will display the message without color.
*/
export function messageWarning(message) {
    console.log(`${Colors.YELLOW}[?] ${message}${Colors.RESET}`);
}

/**
 * @param {String} message 
 * @returns {void} Nothing.
 * @example
 * messageInfo("Info message");
 * @description
 * This function will display an info message in the console.
 * If istty is true, it will display the message in cyan, else it will display the message without color.
*/
export function messageInfo(message) {
    console.log(`${Colors.CYAN}[/] ${message}${Colors.RESET}`);
}

/**
 * @param {String} message 
 * @returns {void} Nothing.
 * @example
 * messageSuccess("Success message");
 * @description
 * This function will display a success message in the console.
 * If istty is true, it will display the message in green, else it will display the message without color.
*/
export function messageSuccess(message) {
    console.log(`${Colors.GREEN}[+] ${message}${Colors.RESET}`);
}
