
/**
 * Colors for console output
 * @type {Object}
 * @property {String} RED - Red color.
 * @property {String} GREEN - Green color.
 * @property {String} YELLOW - Yellow color.
 * @property {String} BLUE - Blue color.
 * @property {String} MAGENTA - Magenta color.
 * @property {String} CYAN - Cyan color.
 * @property {String} WHITE - White color.
 * @property {String} RESET - Reset color.
 * @example
 * console.log(`${Colors.RED}This is red${Colors.RESET}`);
 */
const AllColors = {
    RED : '\x1b[31m',
    GREEN : '\x1b[32m',
    YELLOW : '\x1b[33m',
    BLUE : '\x1b[34m',
    MAGENTA : '\x1b[35m',
    CYAN : '\x1b[36m',
    WHITE : '\x1b[37m',
    RESET : '\x1b[0m',
};

/**
 * No Colors for console output
 * @type {Object}
 */
const NoColors = {
    RED : '',
    GREEN : '',
    YELLOW : '',
    BLUE : '',
    MAGENTA : '',
    CYAN : '',
    WHITE : '',
    RESET : '',
};

/**
 * @description
 * This function will return the colors for the console output.
 * If the console is a TTY, it will return the colors, else it will return no colors.
 * @returns {Object} Colors for the console output.
 */
export let Colors = process.stdout.isTTY ? AllColors : NoColors;
