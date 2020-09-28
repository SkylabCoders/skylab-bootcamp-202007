import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action.types';

const CHANGE_EVENT = 'change';

let _user;

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

	getUser() {
		return _user;
	}
}

const userStore = new UserStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_USER:
			_user = action.data;
			userStore.emitChange();
            break;
        case actionTypes.CREATE_USER:
			_user = action.data;
            userStore.emitChange();
			break;
		case actionTypes.UPDATE_USER:
			_user = action.data;
			userStore.emitChange();
			break;
		default:
			break;
	}
});

export default userStore;
