import { EventEmitter } from 'event';
import dispatcher from '../appDispatcher';
import { actionTypes } from '../actions/actionTypes';

const CHANGE_EVENT = 'event';
let _heroes = [];

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
	getHeroById() {
		return _heroes.find((hero) => hero.id === id);
	}
}

const heroStore = HeroStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			_heroes = action.data;
			heroStore.emitChange();
			break;
		case actionTypes.CREATE_HEROES:
			_heroes = [..._heroes, action.data];
			heroStore.emitChange();
			break;
		default:
			break;
		case actionTypes.DELETE_HERO:
			_heroes = _heroes.filter((hero) => hero.id !== action.data.id);
			heroStore.emitChange();
			break;
	}
});

export default heroStore;
