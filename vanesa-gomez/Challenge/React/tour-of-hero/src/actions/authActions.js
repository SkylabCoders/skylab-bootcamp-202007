import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import { authMethods } from '../firebase/firebaseAuth';

export function login() {
	const email = 'gilbe.cao@gmail.com';
	const password = '1234567';
	return authMethods
		.signIn(email, password)
		.then((loginResponse) => {
			if (loginResponse) {
				dispatcher.dispatch({
					type: actionTypes.LOGIN,
					data: loginResponse
				});
			}
		})
		.catch(console.log);
}

export function logout() {
	return authMethods
		.signOut()
		.then(() => {
			dispatcher.dispatch({
				type: actionTypes.LOGOUT
			});
		})
		.catch(console.log);
}
