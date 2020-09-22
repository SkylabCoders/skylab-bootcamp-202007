const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

/**
 *
 * const myEmitter = new EventEmitter();
 *
 * setInmediate(()=> {
 *  myEmitter.emit('TEST_EVENT');
 * })
 *
 * myEmitter.on('TEST_EVENT', () => console.log('Event fired!'))
 * myEmitter.on('TEST_EVENT', () => console.log('Event fired!'))
 * myEmitter.on('TEST_EVENT', () => console.log('Event fired!'))
 */
