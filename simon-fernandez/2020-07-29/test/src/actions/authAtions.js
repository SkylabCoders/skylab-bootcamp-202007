import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import { authMethods } from '../firebase/firebaseAuth';

export function login() {
	const email = 'gilbe.cao@gmail.com';
	const password = '1234567';
	return authMethods
		.signIn(email, password)
		.then((loginResponse) => {
			debugger;
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
			debugger;
			dispatcher.dispatch({
				type: actionTypes.LOGOUT
			});
		})
		.catch(console.log);
		//este codigo hace mas o menos que el de arriba
		const response =await authMethods.signOut();
		debugger
		dispatcher.dispatch({
			type:actionTypes.LOGOUT,
		})
}
