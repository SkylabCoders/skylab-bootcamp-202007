import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _finder = [];

class FinderStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getFinder() {
		return _finder;
	}
}

const finderStore = new FinderStore();
dispatcher.register((action) => {
	if (action.type === actionTypes.SEARCH_FINDER) {
		_finder = action.data;
		finderStore.emitChange(_finder);
	} else {
		//throw `Unknown action type. action.type: ${action.type}`;
	}
});

export default finderStore;
