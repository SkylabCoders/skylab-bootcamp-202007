const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const CHANGE = 'CHANGE';

setTimeout(() => myEmitter.emit(CHANGE), 0);

//El on de abajo escucha, si emitimos un canvio pero luego es cuando llega el on, llega tarde, no emite nada.
myEmitter.on(CHANGE, () => console.log('1Event fired!'));
myEmitter.on(CHANGE, () => console.log('2Event fired!'));
myEmitter.on(CHANGE, () => console.log('3Event fired!'));
myEmitter.on(CHANGE, () => console.log('4Event fired!'));
myEmitter.on(CHANGE, () => console.log('5Event fired!'));

/* //Si el emit esta después del on, el on ya esta escuchando cuando em emit emite el canvio
myEmitter.emit(CHANGE); //un emit escucha los change, si hay uno imprime 5 on
myEmitter.emit(CHANGE); //si hay 2 emite 10,... */

//cuando ejecte en node events.js no se ve nada, porque el emit esta antes del on, el canvi antes de la escucha, pero si en lugar de esto hacemos el emit asincrono sí se ejecutará porque primero se ejecuta todo lo sincrono y luego todo lo asincrono!
