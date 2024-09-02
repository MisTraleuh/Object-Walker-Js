import { ObjectWalker } from 'object-walker-js';

const type = [];
const target = 'constructor';
const targetType = 'function';
const depth = 5;
const visited = new WeakSet();
const name = '[]';
const displayTypeError = false;
const uniqueProps = ObjectWalker(type, target, targetType, depth, visited, name, displayTypeError);
uniqueProps.forEach(prop => {
   console.log(prop);
});
