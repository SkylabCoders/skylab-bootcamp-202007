import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _isLogged = false;
let _userProfile = null;

class LandingStore extends EventEmitter {
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

const loginStore = new LandingStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			_userProfile = action.data;
			_isLogged = !!action.data;
			loginStore.emitChange();
			break;
		case actionTypes.LOGOUT:
			_isLogged = false;
			_userProfile = null;
			loginStore.emitChange();
			break;

		default:
			break;
	}
});

export default loginStore;
