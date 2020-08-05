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
		case actionTypes.LOAD_REPOS: // This one is an example
			// logic
			loginStore.emit();
			break;
		case actionTypes.LOGIN:
			_userProfile = action.user;
			_isLogged = !!action.user; //convertim data en boolean amb la doble negacio
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
