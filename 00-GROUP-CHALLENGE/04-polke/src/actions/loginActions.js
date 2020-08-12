import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';
import githubApiConst from '../shared/githubApiConst';

export function login(email, password) {
	return authMethods
		.signin(email, password)
		.then(({ user }) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				data: user
			});
		})
		.catch((error) => console.error(error.message));
}

export function loginGoogle() {
	return authMethods
		.signInWithGoogle()
		.then((data) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				data
			});
		})
		.catch((error) => console.error(error.message));
}

export function loginAnonymously() {
	return authMethods
		.signInAnonymously()
		.then((data) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				data
			});
		})
		.catch((error) => console.error(error.message));
}

export function logout() {
	return authMethods
		.logout()
		.then(() => {
			dispatcher.dispatch({
				type: actionTypes.LOGOUT
			});
		})
		.catch((error) => console.error(error.message));
}

export function createNewUser(email, password) {
	return authMethods.createUser(email, password);
}

export function getGitHubAuthCode() {
	const searchParams = new URLSearchParams(window.location.search);
	const gitCode = searchParams.get('code');
	const fetchUrl = `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${githubApiConst.GITHUB_CLIENTID}&client_secret=${githubApiConst.GITHUB_CLIENTSECRET}&code=${gitCode}`;
	fetch(fetchUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((response) => response.text())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN_GITHUB_TOKEN,
				data: response
			});
		})
		.catch((error) => console.log(error.message));
}

export function getGitHubAuthUser(accessToken) {
	const fetchUrl = 'https://api.github.com/user';
	const bearer = 'Bearer ' + accessToken;
	fetch(fetchUrl, {
		headers: {
			Authorization: bearer,
			'Content-Type': 'application/json'
		}
	})
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.GET_GITHUB_AUTH_USER,
				data: response
			});
		});
}
