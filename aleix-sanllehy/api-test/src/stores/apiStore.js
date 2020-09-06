import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _apiData = [];

class ApiStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getData() {
		return _apiData;
	}
}

const apiStore = new ApiStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.GET_API:
			_apiData = action.data;
			apiStore.emitChange(_apiData);
			break;
		default:
			break;
	}
});

export default apiStore;
