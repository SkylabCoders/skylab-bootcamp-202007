import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _diveSites = [];

class DiveSiteStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getDiveSites() {
		return _diveSites;
	}

	getDiveSiteById(_id) {
		return _diveSites.find((diveSite) => diveSite._id === _id);
	}
}

const diveSiteStore = new DiveSiteStore();

dispatcher.register((action) => {
	if (actionTypes.LOAD_DIVESITE) {
		_diveSites = action.data;
		diveSiteStore.emitChange();
	}
});

export default diveSiteStore;
