import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _divers = [];
let _diver;

class DiverStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getDivers() {
		return _divers;
	}

	getDiverById(_id) {
		return _divers.find((diver) => diver._id === _id);
	}
}

const diverStore = new DiverStore();

dispatcher.register((action) => {
	switch (action.actionType) {
		case actionTypes.LOAD_DIVER:
			_divers = action.data;
			diverStore.emitChange();
			break;
		case actionTypes.DELETE_DIVER:
			_divers = _divers.filter((diver) => diver._id !== action.data);
			diverStore.emitChange();
			break;
		case actionTypes.CREATE_DIVER:
			_divers = [..._divers, { ...action.data }];
			diverStore.emitChange();
			break;
		case actionTypes.UPDATE_DIVER:
			_diver = _divers.filter(
				(diver) => diver._id === action.data.data._id
			);
			_diver[0] = action.data.data;
			_divers = [..._divers, { ..._diver[0] }];
			diverStore.emitChange();
			break;
		default:
			break;
	}
});

export default diverStore;
