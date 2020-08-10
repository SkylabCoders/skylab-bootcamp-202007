import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';

export function login(email, password) {
	return authMethods
		.signin(email, password)
		.then((data) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				data
			});
		})
		.catch((event) => window.alert('Error in loggin process'));
}

export async function logout() {
	let actualUser;
	return (actualUser = await authMethods.signout().then(() => {
		dispatcher.dispatch({
			type: actionTypes.LOGOUT
		});
	}));
}

export async function googleLogin() {
	let actualUser;
	return (actualUser = await authMethods
		.signInWithGoogle()
		.then((data) => {
			dispatcher.dispatch({
				type: actionTypes.LOGIN,
				data
			});
		})
		.catch((e) => window.alert('Error in login process')));
}

export async function anonymousLogin() {
	let actualUser;
	return (actualUser = authMethods.signInAnonnymusly().then((data) => {
		dispatcher.dispatch({
			type: actionTypes.LOGIN,
			data
		});
	}));
}

export async function createUser(email, password) {
	let actualUser;
	return (actualUser = authMethods
		.createUser(email, password)
		.then((data) => {
			dispatcher.dispatch({
				type: actionTypes.CREATE_USER,
				data
			});
		})
		.catch((e) => alert(e)));
}
