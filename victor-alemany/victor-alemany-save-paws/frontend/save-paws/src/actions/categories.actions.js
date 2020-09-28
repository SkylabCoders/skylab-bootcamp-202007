import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action.types';
import Axios from 'axios';

export function loadCategories() {
	return Axios.get('/api/categories').then((categories) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_CATEGORIES,
			data: categories.data
		});
	});
}
