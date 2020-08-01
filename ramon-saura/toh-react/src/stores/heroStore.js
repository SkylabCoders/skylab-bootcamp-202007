import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _heros = [];

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
	getHeros() {
		return _heros;
	}
	getHeroById(id) {
		return _heros.find((hero) => hero.id === id);
	}
}

const heroStore = new HeroStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROS:
			_heros = action.data;
			heroStore.emitChange(_heros);
			break;
		case actionTypes.CREATE_HERO:
			_heros = [..._heros, action.data];
			heroStore.emitChange();
			break;
		default:
			break;
	}
});
export default heroStore;
