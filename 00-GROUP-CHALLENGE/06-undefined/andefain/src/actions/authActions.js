import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';

export function login(email, password) {
	return authMethods
		.signin(email, password)
		.then(({ user }) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				data: user
			});
		})
		.catch((error) => console.log(error));
}

export function logout() {
	return new Promise((resolve) => {
		resolve(true);
	}).then(() => {
		dispatcher.dispatch({
			type: actionTypes.LOGOUT
		});
	});
}
