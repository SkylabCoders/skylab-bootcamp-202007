import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _heroes = [];

let nextId = 0;
const generateNextId = (heroes) =>
    heroes.reduce((newId, hero) => (newId > hero.id ? newId : hero.id), 0) + 1;

class HeroStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getHeroes() {
        return _heroes;
    }

    getHeroById(id) {
        return _heroes.find((hero) => hero.id === id);
    }
}

const heroStore = new HeroStore();
dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_HERO:
            _heroes = action.data;
            heroStore.emitChange(_heroes);
            nextId = generateNextId(_heroes);
            break;
        case actionTypes.UPDATE_HERO:
            _heroes = _heroes.map((hero) => {
                if (hero.id === action.data.id) hero.name = action.data.name;
                return hero;
            });
            heroStore.emitChange();
            break;
        case actionTypes.CREATE_HERO:
            _heroes = [..._heroes, { ...action.data, id: nextId }];
            ++nextId;
            heroStore.emitChange();
            break;
        case actionTypes.DELETE_HERO:
            _heroes = _heroes.filter((hero) => hero._id !== action.data);
            heroStore.emitChange();
            break;
        default:
            throw `The action type is unkown. action.type: ${action.type}`;
    }
});

export default heroStore;



















// import { EventEmitter } from "events";
// import dispatcher from "../appDispatcher";
// import actionTypes from "../actions/actionTypes";

// //estructura basica de un store:

// const CHANGE_EVENT = 'change';
// let _heroes = [];   //_  -> variable privada

// class HeroStore extends EventEmitter {
//     addChangeListener(callback) {       //registrar listener
//         this.on(CHANGE_EVENT, callback);
//     }

//     removeChangeListener(callback) {            //eliminar listener
//         this.removeListener(CHANGE_EVENT, callback);
//     }

//     emitChange() {                              //emitir cambios
//         this.emit(CHANGE_EVENT);
//     }

//     getHeroes() {
//         return _heroes;
//     };

//     getHeroById(id) {
//         return _heroes.find((hero) => hero.id === id);
//     }
// }

// const heroStore = new HeroStore();          //singleton?  solo puede haber una instancia
// dispatcher.register(action => {         //dispatcher, registra una accion!
//     switch (action.type) {
//         case actionTypes.LOAD_HERO:
//             _heroes = action.data;       //aqui mi store guarda los datos que le llegan
//             heroStore.emitChange(_heroes);  //aqui emite los datos
//             break;
//         case actionTypes.CREATE_HERO:
//             _heroes = [..._heroes, action.data];
//             heroStore.emitChange(_heroes);
//             break;
//         default:
//             break;

//     }
// })

// export default heroStore;