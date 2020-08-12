import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _characters = [];
let _charactersFiltered = [];
let _planets = [];
let _planetsFiltered = [];
let _sagas = [];
let _wins = 0;
let _loss = 0;
let _sagasFiltered = [];
let _searchValue = {
	text: ''
};

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

	getPlanetsFiltered() {
		return _planetsFiltered;
	}

	getSagas() {
		return _sagas;
	}

	getSagasFiltered() {
		return _sagasFiltered;
	}

	getCharByName(name) {
		return _characters.find((char) => name === char.name);
	}

	getWins() {
		return _wins;
	}

	getLoss() {
		return _loss;
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

	switch (action.type) {
		case actionTypes.LOAD_CHAR_LIST:
			_characters = action.data.charList;
			_charactersFiltered = store.filterChar(null, action.data.filter, action.data.name);
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
			_charactersFiltered = store.filterChar(action.data.text, action.data.filter, action.data.name);
			_planetsFiltered = _planets.filter((planet) =>
				planet.name.toLowerCase().includes(action.data.text.toLowerCase())
			);
			_sagasFiltered = _sagas.filter((saga) =>
				saga.series.toLowerCase().includes(action.data.text.toLowerCase())
			);
			store.emitChange();
			break;
		case actionTypes.WIN_INC:
			++_wins;
			break;
		case actionTypes.LOSS_INC:
			++_loss;
			break;
		default:
			break;
	}
});

export default store;
