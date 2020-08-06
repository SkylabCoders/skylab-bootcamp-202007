import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function finderSearch() {
	let searchInput = window.location.pathname.split('/')[2];
	fetch('https://imdb8.p.rapidapi.com/title/auto-complete?q=' + searchInput, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'imdb8.p.rapidapi.com',
			'x-rapidapi-key': '6a3ab48c9fmsh9bd19938f44ca6dp1c9e06jsn1c9d2f122e27'
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
