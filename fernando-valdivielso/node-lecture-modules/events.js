const EventEmitter = require('events');  //los servidores de node son EventEmitters

const myEmitter = new EventEmitter();

const CHANGE = 'change'
myEmitter.emit(CHANGE);     //el evento se emite antes de que nadie este escuchando -> no pasa nada

myEmitter.on(CHANGE, () => console.log('Event fired!'));  //empieza a escuchar

myEmitter.emit(CHANGE);  //ha este evento lo estan ya escuchando
myEmitter.emit(CHANGE);  //ha este evento lo estan ya escuchando
myEmitter.emit(CHANGE);  //ha este evento lo estan ya escuchando
myEmitter.emit(CHANGE);  //ha este evento lo estan ya escuchando
myEmitter.emit(CHANGE);  //ha este evento lo estan ya escuchando
myEmitter.emit(CHANGE);  //ha este evento lo estan ya escuchando

