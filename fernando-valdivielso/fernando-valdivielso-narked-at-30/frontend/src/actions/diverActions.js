import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadDivers() {
	return axios.get('/api/diver').then(({ data }) => {
		dispatcher.dispatch({
			actionType: actionTypes.LOAD_DIVER,
			data,
		});
	});
}

export function deleteDiver(_id) {
	return axios.delete(`/api/diver/${_id}`).then(() => {
		dispatcher.dispatch({
			actionType: actionTypes.DELETE_DIVER,
			data: _id,
		});
	});
}

export function saveDiver(diver) {
	console.log('diver in saveDiver actions', diver);
	return axios.post(`api/diver`, diver).then((savedDiver) => {
		console.log('data after saving diver in actions', savedDiver);
		dispatcher.dispatch({
			actionType: actionTypes.CREATE_DIVER,
			data: savedDiver,
		});
	});
}

export function updateDiver(diver) {
	return axios.put(`/api/diver/${diver._id}`, diver).then((updatedDiver) => {
		dispatcher.dispatch({
			actionType: actionTypes.UPDATE_DIVER,
			data: updatedDiver,
		});
	});
}
