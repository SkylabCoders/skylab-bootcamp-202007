import dispatcher from '../appDispatcher';
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

export function loginGitHub() {
	return authMethods
		.signInWithGitHub()
		.then((data) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN_GITHUB,
				data
			});
		})
		.catch((error) => console.error(error.message));
}

export function loginGitHubToken() {
	return authMethods
		.signInWithGitHubToken()
		.then((data) => {
			var token = data.credential.accessToken;
			var user = data.user;
			console.log(token);
			console.log(user);
			debugger;
			dispatcher.dispatch({
				type: actionTypes.LOGIN_GITHUB_POPUP,
				data
			});
		})
		.catch((error) => console.error(error.message));
}

export function loginAnonyomously() {
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
	fetch(
		`https://github.com/login/oauth/access_token?client_id=${githubApiConst.GITHUB_CLIENTID}&client_secret=${githubApiConst.GITHUB_CLIENTSECRET}&code=${gitCode}`
	).then((response) => {
		console.log(response);
	});
}
