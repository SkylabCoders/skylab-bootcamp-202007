import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export async function listFavoriteFilms() {
	const data = [
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
			id: '/title/tt6723592/',
			image: {
				height: 4096,
				id: '/title/tt6723592/images/rm710584321',
				url:
					'https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_.jpg',
				width: 2764
			},
			title: 'Tenet',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt10508838/',
			image: {
				height: 1984,
				id: '/title/tt10508838/images/rm4172656129',
				url:
					'https://m.media-amazon.com/images/M/MV5BZmUxMWVhMDEtNTI5ZS00NjNjLWIzY2ItYTFiYThhYWNmYWY3XkEyXkFqcGdeQXVyOTE4ODkzMzA@._V1_.jpg',
				width: 1417
			},
			title: 'Double World',
			titleType: 'movie',
			year: 2020
		}
	];
	dispatcher.dispatch({
		type: actionTypes.LIST_FAVORITE_FILMS,
		data: data
	});
}
