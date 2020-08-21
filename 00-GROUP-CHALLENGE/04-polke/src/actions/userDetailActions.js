import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function loadRepoList(userName) {
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
					language: repo.language || 'Lang. mix',
					lastUpdate: repo.updated_at,
					userName: repo.owner.login
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

export function createRepo(name, access, desc, readme, accessToken) {
	const reqBody = {
		name: name,
		description: desc || '',
		private: access,
		auto_init: readme || false
	};

	const endPoint = `https://cors-anywhere.herokuapp.com/https://api.github.com/user/repos`;
	const bearer = 'Bearer ' + accessToken;

	fetch(endPoint, {
		method: 'POST',
		headers: {
			Authorization: bearer,
			'Content-Type': 'application/json',
			accept: 'application/vnd.github.v3+json'
		},
		body: JSON.stringify(reqBody)
	})
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.CREATE_REPO,
				data: response
			});
		})
		.catch((error) => console.error(error.message));
}
