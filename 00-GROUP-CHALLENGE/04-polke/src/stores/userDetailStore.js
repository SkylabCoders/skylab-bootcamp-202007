import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

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
}

const userDetailStore = new LoginStore();

dispatcher.dispatch((action) => {
	switch (action.type) {
		case actionTypes.LOAD_REPOS: // This one is an example
			// logic
			userDetailStore.emit();
			break;
	}
});

export default userDetailStore;
