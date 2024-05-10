
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

export let Colors = process.stdout.isTTY ? AllColors : NoColors;
