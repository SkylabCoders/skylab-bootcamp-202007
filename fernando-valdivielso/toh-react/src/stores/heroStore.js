import { EventEmitter } from "event";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

//estructura basica de un store:

const CHANGE_ENVENT = 'change';
let _heroes = [];   //_  -> variable privada

class HeroStore extends EventEmitter {
    addChangeListener(callback) {       //registrar listener
        this.on(CHANGE_ENVENT, callback);
    }

    removeChangeListener(callback) {            //eliminar listener
        this.removeListener(CHANGE_ENVENT, callback);
    }

    emitChange() {                              //emitir cambios
        this.emit(CHANGE_ENVENT);
    }

    getHeroes() {
        return _heroes;
    };

    getHeroById(id) {
        return _heroes.find((hero) => hero.id === id);
    }
}

const heroStore = new HeroStore();          //singleton?  solo puede haber una instancia
dispatcher.register(action => {         //dispatcher, registra una accion!
    switch (action.type) {
        case actionTypes.LOAD_HERO:
            _heroes = action.data;       //aqui mi store guarda los datos que le llegan
            heroStore.emitChange(_heroes);  //aqui emite los datos
            break;
        case actionTypes.CREATE_HERO:
            _heroes = [..._heroes, action.data];
            heroStore.emitChange();
            break;
        default:
            break;

    }
})

export default heroStore;