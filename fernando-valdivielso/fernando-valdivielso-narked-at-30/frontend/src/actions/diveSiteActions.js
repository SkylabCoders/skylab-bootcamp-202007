import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';
import axios from 'axios';

function diveSiteActions() {
	return axios.get('/api/dive-sites').then(({ data }) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_DIVESITE,
			data,
		});
	});
}

export default diveSiteActions;
