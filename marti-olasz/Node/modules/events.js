const EventEmmiter = require('events');
const myEmitter = new EventEmmiter();

const CHANGE = 'CHANGE';
myEmitter.emit(CHANGE);

myEmitter.on(CHANGE, () => console.log('Event fired'));
