# ObjectWalker - Js 🚶‍♂️

## Description 📝

Object-Walker-Js is a simple command that lets you search for any object in any other object. Without dependencies, it is a simple and efficient tool to search for objects in objects.

## Installation 📦

```bash
$ npm install object-walker-js
```

## Usage 🚀

```sh
$ npm run start

> start
> node ./src/index.js --help


Usage: node index.js [options]
Options:
    --h, --help         Display help
    --type              Type of source object
    --target            Target object
    --targetType        Target type of object target
    --depth             Depth of the search
```

## Exemple 🎁

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
