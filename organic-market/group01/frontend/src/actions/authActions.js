import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { authMethods } from '../apiAuth/apiAuthMethods';

export function login(username, password) {
	return authMethods
		.signin(username, password)
		.then(({ user }) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				user: user
			});
		})
		.catch((error) => console.log(error));
}

export function logout() {
	return authMethods.signout().then(() => {
		dispatcher.dispatch({
			type: actionTypes.LOGOUT
		});
	});
}

export function loginWithGoogle() {
	return authMethods.signInWithGoogle().then(({ user }) => {
		dispatcher.dispatch({
			type: actionTypes.LOGIN,
			user
		});
	});
}

export function signIn(username, password) {
	return authMethods
		.createUser(username, password)
		.then(() => {
			dispatcher.dispatch({
				type: actionTypes.SIGN_IN,
				data: null
			});
		})
		.catch((error) => {
			console.log(error);
			dispatcher.dispatch({
				type: actionTypes.SIGN_IN,
				data: error
			});
		});
}
