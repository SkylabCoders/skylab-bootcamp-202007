import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE_EVENT = 'change';

let _list = [];

class ListStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	getList() {
		return _list;
	}
}

const listStore = new ListStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_LIST:
			_list = action.data;
			listStore.emitChange();
			break;
		default:
			break;
	}
});

export default listStore;
