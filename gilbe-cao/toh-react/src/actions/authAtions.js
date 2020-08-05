import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function login() {
	return new Promise((resolve) => {
		resolve(true);
	}).then((loginResponse) => {
		dispatcher.dispatch({
			type: actionTypes.LOGIN,
			data: {
				isLogged: loginResponse
			}
		});
	});
}

export function logout() {
	return new Promise((resolve) => {
		resolve(false);
	}).then((logoutResponse) => {
		dispatcher.dispatch({
			type: actionTypes.LOGOUT,
			data: {
				isLogged: logoutResponse
			}
		});
	});
}
