import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadRepoInfo(repoName) {
	// Load data from somewhere
	const endPoint = '';
	fetch(endPoint, {
		headers: {
			accept: 'application/vnd.github.v3+json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			const repoInfoList = response.map((repo) => {
				return {
					private: repo.private,
					name: repo.name,
					description: repo.description || 'This repo has no description.',
					id: repo.id,
					language: repo.language || 'Lang. mix',
					lastUpdate: repo.updated_at
				};
			});
			dispatcher.dispatch({
				type: actionTypes.LOAD_REPO_INFO,
				data: repoList
			});
		})
		.catch((error) => console.error(error.message));
}
