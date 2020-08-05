import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _sliderId = [];
let _popularId = [];
let _comingsoonId = [];
let _sliderObj = [];
let _favList = [];

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

	getSliderId() {
		return _sliderId;
	}
	getFavList() {
		return _favList;
	}
}

const filmStore = new AppStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.SEARCH_FILM:
			_sliderObj.push(action.data); //!!!
			break;
		case actionTypes.SLIDER_FILM:
			_sliderId = action.data;
			break;
		case actionTypes.POPULAR_FILM:
			_popularId = action.data;
			break;
		case actionTypes.COMING_SOON_FILM:
			_comingsoonId = action.data;
			break;
		case actionTypes.ADD_FAV:
			_favList = [..._favList, action.data];
			filmStore.emitChange();
		default:
			console.log('Action error');
			break;
	}
});

export default filmStore;
