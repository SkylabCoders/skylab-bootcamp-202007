const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const CHANGE = 'CHANGE';
let counter = 0;

myEmitter.on(CHANGE, () => {counter++; console.log(`Event fired! - ${counter}`)});
myEmitter.emit(CHANGE);
myEmitter.emit(CHANGE);
myEmitter.emit(CHANGE);

