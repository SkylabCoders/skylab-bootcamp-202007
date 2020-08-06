import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _characters = [];
let _planets = [];
let _sagas = [];
let _searchValue = '';
let _charactersFiltered = [];

class DBStore extends EventEmitter {
    addChangeListener(callback) {

        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCharacters() {
        return _characters;
    }
    getCharactersFiltered() {
        return _charactersFiltered;
    }

    getPlanets() {
        return _planets;
    }
    getSagas() {
        return _sagas;
    }

    getCharByName(name) {
        return _characters.find((char) => name === char.name)
    }

    charsByPlanets(planetName) {
        return _characters.filter((char) => char.originPlanet === planetName);
    }
    charsBySagas(sagaName) {
        return _characters.filter((char) => char.series === sagaName);
    }

    filterChar(filter, name) {
        if (!filter) {
            return _characters;
        } else {
            if (filter === 'planet') {
                return this.charsByPlanets(name);
            }
            if (filter === 'saga') {
                return this.charsBySagas(name);
            }
        }
    }

    getSearchValue() {
        return _searchValue;
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
        case actionTypes.LOAD_PLANETS:
            _planets = action.data;
            store.emitChange();
            break;
        case actionTypes.LOAD_SAGA_LIST:
            _sagas = action.data
            store.emitChange();
            break;
        case actionTypes.GLOBAL_SEARCH:
            debugger;
            _searchValue = action.search;
            _charactersFiltered = _searchValue ? _characters.filter((char) => char.name.toLowerCase() === _searchValue.toLowerCase()) : _characters;
            store.emitChange();
            break;
        default:
            break;
    }
});

export default store;
