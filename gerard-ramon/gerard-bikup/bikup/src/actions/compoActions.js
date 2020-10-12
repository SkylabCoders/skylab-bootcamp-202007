import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function createNewCompo(compoInfo) {
	if (sessionStorage.actualBike) {
		const { bikeUserId, _id } = JSON.parse(sessionStorage.actualBike);

		const params = {
			compoInfo,
			userId: bikeUserId,
			bikeId: _id,
		};
		return axios.post('/api/crud/compo', params).then((response) => {
			// FALTA FER LA LOGICA DEL STORE
			// Afegir compo al sessionStorage
			const newCompo = response.data;
			const actualBike = JSON.parse(sessionStorage.actualBike);
			actualBike.bikeComponentList.push(newCompo);
			sessionStorage.actualBike = JSON.stringify(actualBike);

			dispatcher.dispatch({
				type: actionTypes.ADD_NEW_COMPO,
				data: newCompo,
			});
		});
	} else {
		console.log('There is no loaded bike');
	}
}

export function resetCompo() {
	if (sessionStorage.actualCompo) {
		const { _id } = JSON.parse(sessionStorage.actualCompo);

		const params = {
			compoId: _id,
		};
		return axios.put('/api/crud/compo/reset', params).then((response) => {
			const localActualCompo = JSON.parse(sessionStorage.actualCompo);
			localActualCompo.compoAccumulatedMeters = 0;
			localActualCompo.compoAccumulatedMinutes = 0;
			sessionStorage.actualCompo = JSON.stringify(localActualCompo);

			const compoId = localActualCompo._id;
			const localActualBike = JSON.parse(sessionStorage.actualBike);
			localActualBike.bikeComponentList.forEach((compo) => {
				if (compo._id === compoId) {
					compo.compoAccumulatedMeters = 0;
					compo.compoAccumulatedMinutes = 0;
				}
			});
			sessionStorage.actualBike = JSON.stringify(localActualBike);
			// logica sessionStorage
			dispatcher.dispatch({
				type: actionTypes.RESET_COMPO,
				data: response.data,
			});
		});
	} else {
		console.log('There is no loaded compo');
	}
}

export function deleteCompo() {
	if (sessionStorage.actualCompo) {
		const { _id } = JSON.parse(sessionStorage.actualCompo);

		const params = {
			compoId: _id,
		};
		return axios.put('/api/crud/compo/delete', params).then((response) => {
			// logica sessonstorage

			const localActualBike = JSON.parse(sessionStorage.actualBike);
			localActualBike.bikeComponentList = localActualBike.bikeComponentList.filter(
				(compo) => {
					return compo._id !== _id;
				}
			);
			sessionStorage.actualBike = JSON.stringify(localActualBike);

			dispatcher.dispatch({
				type: actionTypes.DELETE_COMPO,
				data: response.data,
			});
		});
	} else {
		console.log('There is no loaded compo');
	}
}
