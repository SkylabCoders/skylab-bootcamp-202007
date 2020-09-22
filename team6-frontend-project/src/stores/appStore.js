import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

class AppStore extends EventEmitter {
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

const appStore = new AppStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.CREATE_USER:
			console.log(action.data);
			break;
		default:
			break;
	}
});

export default appStore;
