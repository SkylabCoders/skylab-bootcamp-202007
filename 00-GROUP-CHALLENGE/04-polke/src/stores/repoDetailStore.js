import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _repoInfo = [];

class RepoInfoStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	getRepoInfo() {
		return _repoInfo;
	}
}

const RepoInfoStore = new RepoInfoStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_REPO:
			_repoList = action.data;
			userDetailStore.emitChange(_repoInfo);
			break;
		default:
			break;
	}
});

export default userDetailStore;
