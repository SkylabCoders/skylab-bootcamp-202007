import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';

export function login(email, password) {
	return authMethods
		.signin(email, password)
		.then(({ user }) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				user
			});
		})
		.catch((error) => console.log(error));
}
export function logout() {
	return new Promise((resolve) => {
		resolve();
	}).then((data) => {
		dispatcher.dispatch({
			type: actionTypes.LOGOUT,
			data: data
		});
	});
}
