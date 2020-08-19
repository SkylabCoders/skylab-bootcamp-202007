import EventEmitter from 'events';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../Dispatcher';

const CHANGE_EVENT = 'change';

let _isLogged = false;
let _userProfile = null;

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

	isLogged() {
		return _isLogged;
	}

	getUserProfile() {
		return _userProfile;
	}
}

const authStore = new AuthStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			_userProfile = action.data;
			_isLogged = !!action.data;
			authStore.emitChange();
			break;
		case actionTypes.LOGOUT:
			_isLogged = false;
			_userProfile = null;
			authStore.emitChange();
			break;
		case actionTypes.CREATE_USER:
			_userProfile = action.data;
			authStore.emitChange();
			break;
		default:
			break;
	}
});

export default authStore;
