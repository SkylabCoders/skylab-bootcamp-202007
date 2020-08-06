import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadUserRepoInfo(userName, repoName, orgName) {
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

export function loadGroupRepoInfo(repoName, orgName) {
	const endPoint = `https://api.github.com/repos/${orgName}/${repoName}/stats/commit_activity`;

	fetch(endPoint, {
		headers: {
			accept: 'application/vnd.github.v3+json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_GROUP,
				data: response
			});
		})
		.catch((error) => console.error(error.message));
}

export function loadRankingRepoInfo(repoName, orgName) {
	const endPoint = `https://api.github.com/repos/${orgName}/${repoName}/stats/contributors`;

	fetch(endPoint, {
		headers: {
			accept: 'application/vnd.github.v3+json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_RANKING,
				data: response
			});
		})
		.catch((error) => console.error(error.message));
}
