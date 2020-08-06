import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';
import { comingSoonData } from '../actions/filmActions';

const CHANGE_EVENT = 'change';
let _sliderId = [];
let _popularId = [];
let _comingsoonId = [];
let _favList = [];

class FilmStore extends EventEmitter {
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
	getComingsoonId() {
		return _comingsoonId;
	}

	getPopularId() {
		return _popularId;
	}
}

const filmStore = new FilmStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.SLIDER_FILM:
			_sliderId = action.data;
			filmStore.emitChange(_sliderId);
			break;
		case actionTypes.POPULAR_FILM:
			_popularId = action.data;
			filmStore.emitChange(_popularId);
			break;
		case actionTypes.COMING_SOON_FILM:
			_comingsoonId = action.data;
			filmStore.emitChange(_comingsoonId);
			break;
		case actionTypes.ADD_FAV:
			_favList = [..._favList, action.data];
			filmStore.emitChange();
		default:
			console.log('FilmStore Action error');
			break;
	}
});

export default filmStore;
