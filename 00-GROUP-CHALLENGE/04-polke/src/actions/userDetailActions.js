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
			const repoList = response.map((repo) => {
				return {
					private: repo.private,
					name: repo.name,
					description: repo.description || 'This repo has no description.',
					id: repo.id,
					language: repo.language || 'Language mix',
					lastUpdate: repo.updated_at
				};
			});
			dispatcher.dispatch({
				type: actionTypes.LOAD_REPO_LIST,
				data: repoList
			});
		})
		.catch((error) => console.error(error.message));
}

export function loadUserImg(userName) {
	const endPoint = `https://api.github.com/users/${userName}`;
	fetch(endPoint, {
		headers: {
			accept: 'application/vnd.github.v3+json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_USER_IMG,
				data: response
			});
		})
		.catch((error) => console.error(error.message));
}
