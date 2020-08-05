import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadRepoList(userName) {
	// Load data from somewhere
	const endPoint = `https://api.github.com/users/${userName}/repos`;
	fetch(endPoint, {
		headers: {
			accept: 'application/vnd.github.v3+json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_REPO_LIST,
				data: response
			});
		})
		.catch((error) => console.error(error.message));
}
