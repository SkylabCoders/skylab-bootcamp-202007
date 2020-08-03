import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

/*  el dispatcher debe recibir TODAS las acciones y 
    notificar a TODOS los stores ssucritos para cada acción
*/

export default dispatcher;