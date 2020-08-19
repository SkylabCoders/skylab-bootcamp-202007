const { EventEmitter } = require('events');
const dispatcher = require('../actions/dispatcher');
const actionTypes = require('../actions/actionTypes');

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
		case actionTypes.LOAD_HEROES:
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
			_heroes = _heroes.filter((hero) => hero.id !== action.data.id);
			heroStore.emitChange();
			break;
		default:
			throw `The action ${action.type} is unknown `;
	}
});
module.exports = heroStore;
