import { Colors } from "./colors.js";

export function messageError(message) {
    console.log(`${Colors.RED}[-] ${message}${Colors.RESET}`);
    console.log(`${Colors.RED}[-] Exiting...${Colors.RESET}`);
    process.exit(1);
}

export function messageWarning(message) {
    console.log(`${Colors.YELLOW}[?] ${message}${Colors.RESET}`);
}

export function messageInfo(message) {
    console.log(`${Colors.CYAN}[/] ${message}${Colors.RESET}`);
}

export function messageSuccess(message) {
    console.log(`${Colors.GREEN}[+] ${message}${Colors.RESET}`);
}
