const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const CHANGE = 'CHANGE';
myEmitter.emit(CHANGE);

myEmitter.on(CHANGE, () => console.log('Event fired!!!!'))