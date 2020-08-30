const EventEmiter = require('events');

const myEmitter = new EventEmiter();

myEmitter.on('change', () => console.log('Event fired'));

myEmitter.emit('change');
