import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';
import { loadHeroes } from '../actions/hero-actions';

const CHANGE_EVENT = 'change';

let _heroes = [];

let nextId = 0;
const takeGreaterValue = (newId, hero) => (newId > hero.id ? newId : hero.id);
const generateNextId = (heroes) => heroes.reduce(takeGreaterValue, 0) + 1;

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

	getHeroById(_id) {
		return _heroes.find((hero) => hero._id === _id);
	}
}

const heroStore = new HeroStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			_heroes = action.data;
			heroStore.emitChange();
			//nextId = generateNextId(_heroes);
			break;
		case actionTypes.UPDATE_HERO:
			_heroes = _heroes.map((hero) => {
				if (hero._id === action.data._id) hero.name = action.data.name;
				return hero;
			});
			heroStore.emitChange();
			break;
		case actionTypes.CREATE_HERO:
			//llamar a la accion load heroes
			loadHeroes();
			//_heroes = [..._heroes, { ...action.data }];
			//++nextId;
			heroStore.emitChange();
			break;
		case actionTypes.DELETE_HERO:
			_heroes = _heroes.filter((hero) => hero._id !== action.data._id);
			heroStore.emitChange();
			break;
		default:
			throw new Error(
				`The action type is unknown. action.type: ${action.type}`
			);
	}
});

export default heroStore;
