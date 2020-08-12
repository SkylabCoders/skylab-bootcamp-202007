import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import { sliderMock, popularMock, comingMock } from '../mocks/homeMock';

export function sliderData() {
	const data = sliderMock;
	dispatcher.dispatch({
		type: actionTypes.SLIDER_FILM,
		data: data
	});
}

export function mostPopularData() {
	const data = popularMock;
	dispatcher.dispatch({
		type: actionTypes.POPULAR_FILM,
		data: data
	});
}

export function comingSoonData() {
	const data = comingMock;
	dispatcher.dispatch({
		type: actionTypes.COMING_SOON_FILM,
		data: data
	});
}

export function callFilm() {
	let id = window.location.pathname.split('/')[2];
	let apiKey = 'k_9KT4p8i9'; //Marti
	let requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};
	fetch(
		'https://imdb-api.com/en/API/Title/' + apiKey + '/' + id + '/Trailer,',
		requestOptions
	)
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.FILM_DETAILS,
				data: response
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
