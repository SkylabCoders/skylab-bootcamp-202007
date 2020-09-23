import List from '../list';
import dispatcher from '../dispatcher';
import actionTypes from './action-types';

export function loadList() {
	return new Promise((resolve) => {
		resolve(List);
	}).then((response) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_LIST,
			data: response
		});
	});
}
