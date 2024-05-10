
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
