import EventEmitter from 'events';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

const CHANGE_EVENT = 'change';
let _isLogged = false;
let _userProfile = {
	displayName: 'John Doe',
	email: 'test@gmail.com',
	photoURL:
		'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
	movies: []
};
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
		default:
		//throw `The action type is unknown. action.type: ${action.type}`;
	}
});
export default authStore;
