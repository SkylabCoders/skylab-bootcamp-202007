import { EventEmitter } from 'event';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _heroes = [];
class HeroStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeChangeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emitChange(CHANGE_EVENT);
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
			break;
		case actionTypes.CREATE_HEROS:
			_heroes = [..._heroes, action.data];
			heroStore.emitChange();
			break;
		default:
			break;
	}
});

let store = new HeroStore();
export default store;
