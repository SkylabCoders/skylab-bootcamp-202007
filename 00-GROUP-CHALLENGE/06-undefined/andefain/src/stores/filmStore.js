import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _sliderData = [];
let _popularData = [];
let _comingData = [];
let _filmData = [];

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
		return _sliderData;
	}

	getComingsoonId() {
		return _comingData;
	}

	getPopularId() {
		return _popularData;
	}
	getFilmData() {
		return _filmData;
	}
}

const filmStore = new FilmStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.SLIDER_FILM:
			_sliderData = action.data;
			filmStore.emitChange(_sliderData);
			break;
		case actionTypes.POPULAR_FILM:
			_popularData = action.data;
			filmStore.emitChange(_popularData);
			break;
		case actionTypes.COMING_SOON_FILM:
			_comingData = action.data;
			filmStore.emitChange(_comingData);
			break;
		case actionTypes.FILM_DETAILS:
			_filmData = action.data;
			filmStore.emitChange();
			break;
		default:
		//throw `${action.type} is unknown`;
	}
});

export default filmStore;
