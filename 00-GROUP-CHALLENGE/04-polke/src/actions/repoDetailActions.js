import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadRepoInfo(userName, repoName) {
	const endPoint = `https://api.github.com/repos/${userName}/${repoName}/commits`;
	fetch(endPoint, {
		headers: {
			accept: 'application/vnd.github.v3+json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_REPO,
				data: response
			});
		})
		.catch((error) => console.error(error.message));
}
