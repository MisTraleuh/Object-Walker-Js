
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'url';
import { messageError, messageSuccess } from '../utils/messages.js';

let EXCEPTED = `Usage: node index.js [options]
Options:
    --h, --help           Display help
    --type                Type of source object
    --target              Target object
    --targetType          Target type of object target, must be:
                          object, function, string, number, boolean, symbol, bigint
    --depth               Depth of the search (default: 5)
    --disable-TypeError   Disable TypeError message
`;
let FILEPATH = `./src/index.js`;
let TEST_NAME = fileURLToPath(import.meta.url).split("/").pop();
let ARGS = [FILEPATH, "--h"];
let INTERPRETER = `node`;

export async function run() {
    const ls = spawn(INTERPRETER, ARGS, { shell: false });
    let output = "";
    let stderr = "";
    let status = 0;

    ls.stdout.on('data', (data) => {
        output += data;
    });

    ls.stderr.on('data', (data) => {
        stderr += data;
    });

    ls.on('close', (code) => {
        status = code;
        if (status !== 0) {
            return messageError(`Test "${TEST_NAME}" failed with status code ${status}`);
        }
        if (output !== EXCEPTED) {
            return messageError(`Test "${TEST_NAME}" failed`);
        }
        messageSuccess(`Test "${TEST_NAME}" passed`);
    });
}
