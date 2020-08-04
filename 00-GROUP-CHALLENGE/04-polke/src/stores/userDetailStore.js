import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _repoList = [];

class LoginStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getRepoList() {
		return _repoList;
	}
}

const userDetailStore = new LoginStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_REPO_LIST: // This one is an example
			_repoList = action.data;
			userDetailStore.emitChange(_repoList);
			break;
		default:
			break;
	}
});

export default userDetailStore;
