import { Colors } from "./colors.js";

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
