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
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}
}

const heroStore = new HeroStore();

//Dispatcher, me interesa saber d estas acciones. Per poder captar les actions
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.UPDATE_HERO:
			_heroes = action.data;
			heroStore.emitChange(_heroes);
			break;
		case actionTypes.CREATE_HERO:
			_heroes = [..._heroes, action.data];
			heroStore.emitChange(); // No fa falta emetre res xk nmes fa update de la llista.
			break;
		default:
			break;
	}
});

export default heroStore;
