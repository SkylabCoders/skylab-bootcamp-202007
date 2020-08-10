import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function finderSearch() {
	let searchInput = window.location.pathname.split('/')[2];
	let apiKey = 'k_iv723l7m'; //Aleix
	let requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};
	fetch(
		'https://imdb-api.com/en/API/SearchTitle/' + apiKey + '/' + searchInput,
		requestOptions
	)
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.SEARCH_FINDER,
				data: response.results
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
