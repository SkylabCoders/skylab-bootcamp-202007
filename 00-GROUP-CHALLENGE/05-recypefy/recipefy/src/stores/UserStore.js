import { EventEmittter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let user = {};
class UserStore extends EventEmittter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	getuser() {
		return _user;
	}
	getUserById(id) {
		return _user.find((user) => user.id === id);
	}
}

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_USER:
			_user = action.data;
			userstore.emitChange(_user);
			break;
		default:
			break;
	}
});

const userStore = new UserStore();
export default userStore;
