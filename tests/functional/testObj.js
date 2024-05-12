import { spawn } from 'node:child_process';
import { fileURLToPath } from 'url';
import { messageError, messageSuccess } from '../utils/messages.js';

let EXCEPTED = `[/] --- Properties and methods of ({}) ---
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.isPrototypeOf.propertyIsEnumerable.toString.valueOf.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.isPrototypeOf.propertyIsEnumerable.toString.valueOf.toLocaleString.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.isPrototypeOf.propertyIsEnumerable.toString.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.isPrototypeOf.propertyIsEnumerable.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.isPrototypeOf.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.__proto__
[+] ({}).constructor.prototype.__defineGetter__.__proto__
[+] ({}).constructor.prototype.__proto__
[+] ({}).constructor.assign.__proto__
[+] ({}).constructor.getOwnPropertyDescriptor.__proto__
[+] ({}).constructor.getOwnPropertyDescriptors.__proto__
[+] ({}).constructor.getOwnPropertyNames.__proto__
[+] ({}).constructor.getOwnPropertySymbols.__proto__
[+] ({}).constructor.hasOwn.__proto__
[+] ({}).constructor.is.__proto__
[+] ({}).constructor.preventExtensions.__proto__
[+] ({}).constructor.seal.__proto__
[+] ({}).constructor.create.__proto__
[+] ({}).constructor.defineProperties.__proto__
[+] ({}).constructor.defineProperty.__proto__
[+] ({}).constructor.freeze.__proto__
[+] ({}).constructor.getPrototypeOf.__proto__
[+] ({}).constructor.setPrototypeOf.__proto__
[+] ({}).constructor.isExtensible.__proto__
[+] ({}).constructor.isFrozen.__proto__
[+] ({}).constructor.isSealed.__proto__
[+] ({}).constructor.keys.__proto__
[+] ({}).constructor.entries.__proto__
[+] ({}).constructor.fromEntries.__proto__
[+] ({}).constructor.values.__proto__
[+] ({}).constructor.__proto__
[+] ({}).__proto__
`;
let FILEPATH = `./src/index.js`;
let TEST_NAME = fileURLToPath(import.meta.url).split("/").pop();
let ARGS = [FILEPATH, "--type", "({})", "--target", '__proto__', "--targetType", "object" , "--depth", "50"];
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
        return messageSuccess(`Test "${TEST_NAME}" passed`);
    });
}
