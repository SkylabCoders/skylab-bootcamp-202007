//NOT DONE
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE_EVENT = 'change';
let _isLogged = false;
let _profile = null;
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

	getProfile() {
		return _profile;
	}
}

const authStore = new AuthStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			_isLogged = !!action.data;
			_profile = action.data.user;
			authStore.emitChange();
			break;
		case actionTypes.LOGOUT:
			_isLogged = false;
			authStore.emitChange();
			break;
		default:
			break;
	}
});

export default authStore;
