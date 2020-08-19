const eventEmitter = require('events');

const myEmitter = new eventEmitter();
const CHANGE = 'CHANGE';

setTimeout(() => myEmitter.emit(CHANGE), 0);

myEmitter.on(CHANGE, () => console.log('Event fired!'));
//myEmitter.emit(CHANGE);
