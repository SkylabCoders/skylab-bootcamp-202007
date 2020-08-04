import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function sliderFilm(id) {
	fetch(`https://imdb8.p.rapidapi.com/title/get-base?tconst=${id}`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'imdb8.p.rapidapi.com',
			'x-rapidapi-key': 'ca92ccc196msh0cd1ab1e5e37f83p1f342djsnd37e7f10993c'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes,
				data: response
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

export function sliderData() {
	fetch(
		'https://imdb8.p.rapidapi.com/title/get-coming-soon-tv-shows?currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': 'ca92ccc196msh0cd1ab1e5e37f83p1f342djsnd37e7f10993c'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.SLIDER_FILM,
				data: response.slice(0, 10)
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

export function mostPopularData() {
	fetch(
		'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?purchaseCountry=US&homeCountry=US&currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': 'ca92ccc196msh0cd1ab1e5e37f83p1f342djsnd37e7f10993c'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.POPULAR_FILM,
				data: response.slice(0, 10).split('/')[2]
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

export function comingSoonData() {
	fetch(
		'https://imdb8.p.rapidapi.com/title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': 'ca92ccc196msh0cd1ab1e5e37f83p1f342djsnd37e7f10993c'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.COMING_SOON_FILM,
				data: response.slice(0, 10).split('/')[2]
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
