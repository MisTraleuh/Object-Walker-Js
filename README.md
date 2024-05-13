
<p align="center">
  <a aria-label="Logo" href="https://www.npmjs.com/package/object-walker-js">
    <img src="https://i.ibb.co/3sZb236/Logo-Object-Walker.png">
  </a>
  <h1 align="center"> ObjectWalker - Js 🚶‍♂️ </h1>
</p>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/object-walker-js">
    <img src="https://img.shields.io/npm/v/object-walker-js.svg">
  </a>
  <a aria-label="NPM download" href="https://www.npmjs.com/package/object-walker-js">
    <img alt="" src="https://img.shields.io/npm/dm/object-walker-js.svg">
  </a>
  <a aria-label="License" href="https://github.com/MisTraleuh/object-walker-js/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/MisTraleuh/object-walker-js.svg">
  </a>
  <a aria-label="Build Status" href="(https://github.com/MisTraleuh/object-walker-js/actions">
    <img alt="" src="https://github.com/MisTraleuh/object-walker-js/actions/workflows/buildPackage.yml/badge.svg">
  </a>
</p>

## Description 📝

Object-Walker-Js is a simple command that lets you search for any object in any other object. Without dependencies, it is a simple and efficient tool to search for objects in objects.

## Installation 📦

### Library 📚

```bash
$ npm install object-walker-js
[...]
$ ./node_modules/.bin/object-walker-js --help
Usage: node index.js [options]
Options:
    --h, --help           Display help
    --type                Type of source object
    --target              Target object
    --targetType          Target type of object target, must be:
                          object, function, string, number, boolean, symbol, bigint, any
    --depth               Depth of the search (default: 5)
    --disable-TypeError   Disable TypeError message
```

### Binary 📦

```bash
$ sudo npm install -g object-walker-js
[...]
$ object-walker-js --help
Usage: node index.js [options]
Options:
    --h, --help           Display help
    --type                Type of source object
    --target              Target object
    --targetType          Target type of object target, must be:
                          object, function, string, number, boolean, symbol, bigint, any
    --depth               Depth of the search (default: 5)
    --disable-TypeError   Disable TypeError message
```

## Exemple 🎁

> [!TIP]
> The `--target` is evaluated with the `eval` function, so you can use any valid JavaScript expression.

### Type Object 🪙

```sh
$ node ./src/index.js --type '({})' --target '__proto__' --targetType "object"  --depth 50
--- Properties and methods of ({}) ---
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.isPrototypeOf.propertyIsEnumerable.toString.valueOf.toLocaleString.__proto__
[+] ({}).constructor.prototype.__defineGetter__.constructor.prototype.apply.bind.call.toString.__defineSetter__.hasOwnProperty.__lookupGetter__.__lookupSetter__.isPrototypeOf.propertyIsEnumerable.toString.valueOf.__proto__
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
```

### Type Module 📦

```sh
$ node ./src/index.js --type 'import("fs")' --target 'toString' --targetType "function"  --depth 500
[/] --- Properties and methods of import("fs") ---
[+] import("fs").Dir.prototype.read.constructor.prototype.apply.bind.call.toString
[+] import("fs").Dir.prototype.read.constructor.prototype.apply.bind.call.toString.toString
[+] import("fs").Dir.prototype.read.constructor.prototype.apply.bind.call.toString.constructor.prototype.__defineGetter__.toString        
[+] import("fs").Dir.prototype.read.constructor.prototype.apply.bind.call.toString.constructor.prototype.__defineGetter__.__defineSetter__.toString
[+] import("fs").Dir.prototype.read.constructor.prototype.apply.bind.call.toString.constructor.prototype.__defineGetter__.__defineSetter__.hasOwnProperty.toString
[+] import("fs").Dir.prototype.read.constructor.prototype.apply.bind.call.toString.constructor.prototype.__defineGetter__.__defineSetter__.hasOwnProperty.__lookupGetter__.toString
[...]
```

## License 📜

[MIT License](./LICENSE)
