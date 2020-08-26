import dispatcher from '../dispatcher';
import actionTypes from './action-types';

export function loadList() {
	return fetch(
		'https://api-nba-v1.p.rapidapi.com/players/lastName/%7Blastname%7D',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
				'x-rapidapi-key': '23da4a2491msh179ccffc05a7111p106e49jsn82e87fc22a15'
			}
		}
	)
		.then((res) => res.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_LIST,
				data: response
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
