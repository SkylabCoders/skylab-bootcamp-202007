import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function finderSearch() {
	let searchInput = window.location.pathname.split('/')[2];
	fetch('https://imdb8.p.rapidapi.com/title/auto-complete?q=' + searchInput, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'imdb8.p.rapidapi.com',
			'x-rapidapi-key': '7ee9a7fbe9mshbd3d34f7a64739fp1e4c4ajsn2f0787bb76e0'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.SEARCH_FINDER,
				data: response
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
