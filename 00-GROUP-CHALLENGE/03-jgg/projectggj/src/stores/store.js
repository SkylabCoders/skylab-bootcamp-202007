import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _characters = [];
let _planets = [];
let _sagas = [];

class DBStore extends EventEmitter {
    addChangeListener(callback) {
        debugger
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCharacters() {
        debugger
        return _characters;
    }
    getPlanets() {
        return _planets;
    }
    getSagas() {
        return _sagas;
    }


}

const store = new DBStore();
dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_CHAR_LIST:
            _characters = action.data
            store.emitChange();
            break;
        case actionTypes.CREATE_PROFILE:
            //TODO : LOGIC
            //logic
            store.emitChange();
            break;
        case actionTypes.UPDATE_PROFILE:
            //TODO : LOGIC
            //logic


            store.emitChange();
            break;
        case actionTypes.LOAD_SAGA_LIST:
            _sagas = action.data
            store.emitChange();
            break;
        default:
            break;
    }
});

export default store;
