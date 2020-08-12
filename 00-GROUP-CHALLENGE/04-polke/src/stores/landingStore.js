import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

import { getGitHubAuthUser } from '../actions/loginActions';

const CHANGE_EVENT = 'change';

let _isLogged = false;
let _userProfile = null;
let _isGitHubUser = false;
let _gitHubUserName = null;
let _gitHubAccessToken = null;
let _gitHubBio = null;

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

	isUserGitHub() {
		return _isGitHubUser;
	}

	getGitHubBio() {
		return _gitHubBio;
	}

	getGitHubUserName() {
		return _gitHubUserName;
	}

	getGitHubAccessToken() {
		return _gitHubAccessToken;
	}
}

const landingStore = new LandingStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			_userProfile = action.data;
			_isLogged = !!action.data;
			landingStore.emitChange();
			break;
		case actionTypes.LOGIN_GITHUB_TOKEN:
			const dataFilter = action.data.split('=')[1];
			_gitHubAccessToken = dataFilter.split('&')[0];
			getGitHubAuthUser(_gitHubAccessToken);
			break;
		case actionTypes.GET_GITHUB_AUTH_USER:
			_isGitHubUser = true;
			_gitHubUserName = action.data.login;
			_gitHubBio = action.data.bio;
			_userProfile = action.data;
			_isLogged = !!action.data;
			landingStore.emitChange();
			break;
		case actionTypes.LOGOUT:
			_isLogged = false;
			_userProfile = null;
			_isGitHubUser = false;
			_gitHubUserName = '';
			landingStore.emitChange();
			break;

		default:
			break;
	}
});

export default landingStore;
