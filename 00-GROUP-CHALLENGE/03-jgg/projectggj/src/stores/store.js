import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _characters = [];
let _charactersFiltered = [];
let _planets = [];
let _sagas = [];
let _searchValue = '';

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
		return _characters.find((char) => name === char.name);
	}

	charsByPlanets(planetName) {
		return _characters.filter((char) => char.originPlanet === planetName);
	}
	charsBySagas(sagaName) {
		return _characters.filter((char) => char.series === sagaName);
	}

	filterChar(text, filter, name) {
		_charactersFiltered = _characters;

		if (text) {
			_charactersFiltered = _characters.filter((char) =>
				char.name.toLowerCase().includes(text.toLowerCase())
			);
		}

		if (filter === 'planet') {
			_charactersFiltered = _charactersFiltered.filter(
				(char) => char.originPlanet === name
			);
		}

		if (filter === 'saga') {
			_charactersFiltered = _charactersFiltered.filter(
				(char) => char.series === name
			);
		}

		return _charactersFiltered;
	}

	getSearchValue() {
		return _searchValue;
	}
}

const store = new DBStore();
dispatcher.register((action) => {
	const { text, filter, name } = action.data;

	switch (action.type) {
		case actionTypes.LOAD_CHAR_LIST:
			_characters = action.data.charList;
			_characters = store.filterChar(null, filter, name);
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
			_sagas = action.data;
			store.emitChange();
			break;
		case actionTypes.GLOBAL_SEARCH:
			_searchValue = action.data;
			_charactersFiltered = store.filterChar(text, filter, name);
			store.emitChange();
			break;
		default:
			break;
	}
});

export default store;
