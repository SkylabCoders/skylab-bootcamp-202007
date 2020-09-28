import dispatcher from '../dispatcher';
import actionTypes from './action-types';
import { authMethods } from '../firebase/firebaseAuth';

export function login(email, password) {
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
