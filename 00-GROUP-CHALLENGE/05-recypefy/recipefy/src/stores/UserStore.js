import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _users = [];
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
	getUsers() {
		return _users;
	}
	getUserById(id) {
		const actualUser = _users.find((user) => user.id === id);
		console.log(actualUser);
		return actualUser;
	}
	getUserFavouriteList(user) {
		let favouriteList = [];
		const favouritesNull = "You don't have any favourite!";
		if (user.favouriteRecipe.length === 0) {
			return favouritesNull;
		} else {
			favouriteList = user.favouriteRecipe.slice(0, 5);
			return favouriteList;
		}
	}
}

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_USER:
			_users = action.data;
			userStore.emitChange(_users);
			break;
		default:
			break;
	}
});

const userStore = new UserStore();
export default userStore;
