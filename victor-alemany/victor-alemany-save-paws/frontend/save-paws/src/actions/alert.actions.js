//import alertData from '../mocks/alerts.data.mock';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action.types';
import Axios from 'axios';

export function loadAlerts() {
	return Axios.get('/api/alerts').then((alerts) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_ALERTS,
			data: alerts.data
		});
	});
}

export function loadAlertById(id) {
	return Axios.get(`/api/alerts/${id}`).then((alert) => {
		dispatcher.dispatch({ 
			type: actionTypes.LOAD_ALERT_BYID,
			data: alert.data 
		});
	});
}

export function foundAlert(alertId,active) {
	return Axios.put(`/api/alerts/${alertId}`,{active}).then((alerts) => {
		dispatcher.dispatch({
			type: actionTypes.CLOSE_ALERT,
			data: alerts.data
		});
	});
}

export function followAlert(alertId,userId) {
	return Axios.put(`/api/alerts/${alertId}`,{followed:userId}).then((alerts) => {
		dispatcher.dispatch({
			type: actionTypes.FOLLOW_ALERT,
			data: alerts.data
		});
	});
}

export function updateAlertComments(alertId,comments) {

	return Axios.put(`/api/alerts/${alertId}`,{comments}).then((alert) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_COMMENTS_ALERT,
			data: alert.data
		});
	})
}

export function createAlert(alertData) {

return Axios.post('/api/alerts/newalert',alertData
).then((alert) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_ALERT,
			data: alert.data
		});
	});
}

