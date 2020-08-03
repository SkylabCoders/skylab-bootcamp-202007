import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function createUser() {
	return new Promise((resolve) => {
		resolve('Read email and password');
	}).then((info) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_USER,
			data: info
		});
	});
}
