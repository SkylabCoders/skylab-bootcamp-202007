import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadRepoInfo(userName, repoName, orgName) {
	const endPoint = `https://api.github.com/repos/${orgName}/${repoName}/commits`;
	fetch(endPoint, {
		headers: {
			accept: 'application/vnd.github.v3+json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_REPO,
				data: response,
				userName: userName
			});
		})
		.catch((error) => console.error(error.message));
}
