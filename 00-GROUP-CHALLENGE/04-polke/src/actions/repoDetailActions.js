import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

<<<<<<< HEAD
=======
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

>>>>>>> 47e408ce5730d3f36146b029c256030cce7c6204
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
<<<<<<< HEAD
=======
	/* https://api.github.com/repos/SkylabCoders/skylab-bootcamp-202007/stats/contributors */
>>>>>>> 47e408ce5730d3f36146b029c256030cce7c6204

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
