const EventEmitter = require('events');

//console.log(EventEmitter)
const myEmitter = new EventEmitter();

const CHANGE = 'change';
myEmitter.emit(CHANGE);//nadie escucha este evento!!

myEmitter.on(CHANGE, () => console.log('1Event fired!'));
myEmitter.on(CHANGE, () => console.log('2Event fired!'));


myEmitter.emit(CHANGE);

myEmitter.emit(CHANGE);

