import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';

export function login(email, password) {
	return authMethods
		.signin(email, password)
		.then(({ user }) => {
			console.log(user);
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				data: user
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

export function signInWithGoogle() {
	return authMethods.signInWithGoogle().then(({ user }) => {
		dispatcher.dispatch({
			type: actionTypes.LOGIN,
			data: user
		});
	});
}

export function signInAnonymously() {
	return authMethods.signInAnonymously().then(({ user }) => {
		dispatcher.dispatch({
			type: actionTypes.LOGIN,
			data: user
		});
	});
}
