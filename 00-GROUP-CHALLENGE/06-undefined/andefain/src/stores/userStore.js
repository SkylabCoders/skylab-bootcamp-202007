import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _favoriteFilms = [
	{
		'@type': 'imdb.api.title.base',
		id: '/title/tt11946300/',
		image: {
			height: 1200,
			id: '/title/tt11946300/images/rm3967657985',
			url:
				'https://m.media-amazon.com/images/M/MV5BNTI1YmU4NmItZTc4NC00NzA2LWJiMjYtMmE0Njg5M2U2N2VhXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg',
			width: 900
		},
		title: 'Deep Blue Sea 3',
		titleType: 'movie',
		year: 2020
	},
	{
		'@type': 'imdb.api.title.base',
		id: '/title/tt11946300/',
		image: {
			height: 1200,
			id: '/title/tt11946300/images/rm3967657985',
			url:
				'https://m.media-amazon.com/images/M/MV5BNTI1YmU4NmItZTc4NC00NzA2LWJiMjYtMmE0Njg5M2U2N2VhXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg',
			width: 900
		},
		title: 'Deep Blue Sea 3',
		titleType: 'movie',
		year: 2020
	},
	{
		'@type': 'imdb.api.title.base',
		id: '/title/tt11946300/',
		image: {
			height: 1200,
			id: '/title/tt11946300/images/rm3967657985',
			url:
				'https://m.media-amazon.com/images/M/MV5BNTI1YmU4NmItZTc4NC00NzA2LWJiMjYtMmE0Njg5M2U2N2VhXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg',
			width: 900
		},
		title: 'Deep Blue Sea 3',
		titleType: 'movie',
		year: 2020
	}
];

class UserStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getFavoriteFilms() {
		return _favoriteFilms;
	}
}

const userStore = new UserStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LIST_FAVORITE_FILMS:
			_favoriteFilms = action.data;
			userStore.emitChange(_favoriteFilms);
	}
});

export default userStore;
