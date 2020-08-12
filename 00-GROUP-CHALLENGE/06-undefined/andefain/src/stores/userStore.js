import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _favoriteFilms = [];

class UserStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getFavoriteFilms() {
		return _favoriteFilms;
	}
}

const userStore = new UserStore();
dispatcher.register((action) => {
	if (action.type === actionTypes.LIST_FAVORITE_FILMS) {
		_favoriteFilms = action.data;
		userStore.emitChange(_favoriteFilms);
	} else {
		//throw
	}
});

export default userStore;
