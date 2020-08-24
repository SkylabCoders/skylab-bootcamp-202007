const EventEmitters = require('events');

const myEmitter = new EventEmitters();

const CHANGE = 'change'
myEmitter.emit(CHANGE)//emito

myEmitter.on(CHANGE, () => console.log('Event fired!'))//escucho

//primero hay que escuchar y luego emitir

myEmitter.emit(CHANGE)

//-------------
setTimeout(() => myEmitter.emit(CHANGE), 0);

myEmitter.ON(CHANGE, ()=> console.log('Event fired!'))

//con un timeout lo convierto a asinc y entonces primero emito y luego escucho sin cambiar el orden de lo que he escrito

