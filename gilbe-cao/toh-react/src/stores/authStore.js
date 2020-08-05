import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _isLogged = true;
class AuthStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getIsLogged() {
		return _isLogged;
	}
}

const authStore = new AuthStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			_isLogged = action.data.isLogged;
			authStore.emitChange();
			break;
		case actionTypes.LOGOUT:
			_isLogged = action.data.isLogged;
			authStore.emitChange();
			break;
		default:
			break;
	}
});

export default authStore;
