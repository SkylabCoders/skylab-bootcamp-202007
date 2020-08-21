const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const CHANGE = 'CHANGE';

setTimeout(() => myEmitter.emit(CHANGE), 1000);

myEmitter.on(CHANGE, () => {
	console.log('Event al palco');
});
myEmitter.on(CHANGE, () => {
	console.log('Event al palco');
});
myEmitter.on(CHANGE, () => {
	console.log('Event al palco');
});
