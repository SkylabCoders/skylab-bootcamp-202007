import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';
import { loadRepoList } from '../actions/userDetailActions';

const CHANGE_EVENT = 'change';

let _repoList = [];
let _userInfo = [];

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
	getUserInfo() {
		return _userInfo;
	}
}

const userDetailStore = new LoginStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_REPO_LIST:
			_repoList = action.data;
			userDetailStore.emitChange(_repoList);
			break;
		case actionTypes.LOAD_USER_IMG:
			_userInfo = action.data;
			userDetailStore.emitChange(_userInfo);
			break;
		case actionTypes.CREATE_REPO:
			//loadRepoList(landingStore.getGitHubUserName());
			break;
		default:
			throw `The action type ${action.type} from UserDetail is not defined`;
	}
});

export default userDetailStore;
