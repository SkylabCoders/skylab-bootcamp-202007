const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const CHANGE = 'CHANGE';

setTimeout(() => myEmitter.emit(CHANGE), 0); //PINTA ANTES DE EMITIR, porq es una función async
myEmitter.emit(CHANGE); //no pinta por consola

myEmitter.on(CHANGE, () => console.log('Event fired!')); // este emite

myEmitter.emit(CHANGE); //pinta por consola. este escucha
