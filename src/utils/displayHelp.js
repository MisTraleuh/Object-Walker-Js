import { Colors } from "./colors.js";

export function displayHelp() {
    console.log(`
${Colors.CYAN}Usage: node index.js [options]${Colors.RESET}
Options:
    --h, --help         Display help
    --type              Type of source object
    --target            Target object
    --targetType        Target type of object target
    --depth             Depth of the search
`);
    process.exit(0);
}
