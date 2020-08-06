import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import userListMoked from '../User.mok';

export function createUser() {
	return new Promise((resolve) => {
		resolve(/*TO DO*/);
	}).then((/*TO DO*/) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_USER,
			data: null /*TO DO*/
		});
	});
}

export function updateUser() {
	return new Promise((resolve) => {
		resolve(/*TO DO*/);
	}).then((/*TO DO*/) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_USER,
			data: null /*TO DO*/
		});
	});
}

export function loadUser() {
	return new Promise((resolve) => {
		resolve(userListMoked);
	}).then((users) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_USER,
			data: users
		});
	});
}
