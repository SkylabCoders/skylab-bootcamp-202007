import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE_EVENT = 'change';

let _list = [];

class AppStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	emitChange() {
		this.emitChange(CHANGE_EVENT);
	}
	getList() {
		return _list;
	}
}

const appStore = new AppStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_LIST:
			_list = action.data;
			appStore.emitChange();
			break;
		default:
			break;
	}
});

export default appStore;
