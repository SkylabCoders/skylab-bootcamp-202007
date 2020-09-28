import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadUserBikeList(userId) {
	if (!userId) {
		console.log('[loadUserBikeList] - userId param is required');
		return false;
	} else {
		const props = {
			params: {
				bikeUserId: userId,
			},
		};
		return axios.get(`/api/bikes`, props).then((payload) => {
			debugger;
			dispatcher.dispatch({
				type: actionTypes.LOAD_USER_BIKE_LIST,
				data: payload.data,
			});
		});
	}
}

export function loadBikeById(bikeId) {
	return axios.get(`/api/bikes/${bikeId}`).then((payload) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_BIKE_BY_ID,
			data: payload.data,
		});
	});
}

export function loadCompoById(bikeId, compoId) {
	return axios.get(`/api/bikes/${bikeId}/${compoId}`).then((payload) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_COMPO_BY_ID,
			data: payload.data,
		});
	});
}

export function createNewBike(newBikeInfo) {
	if (sessionStorage.authUser) {
		const { _id } = JSON.parse(sessionStorage.authUser);
		const params = {
			newBikeInfo,
			_id,
		};
		return axios.post(`/api/crud/bike`, params).then((newBike) => {
			dispatcher.dispatch({
				type: actionTypes.CREATE_NEW_BIKE,
				data: newBike.data,
			});
		});
	} else {
		console.log('User is not auth');
	}
}

export function deleteBike() {
	if (sessionStorage.actualBike) {
		const { _id } = JSON.parse(sessionStorage.actualBike);
		const params = {
			bikeId: _id,
		};
		debugger;
		return axios.put('/api/crud/bike/delete', params).then((response) => {
			debugger;
			dispatcher.dispatch({
				type: actionTypes.DELETE_BIKE,
				data: response.data,
			});
		});
	} else {
		console.log('There is no loaded bike');
	}
}

export function editBike(bikeInfo, isNameChanged) {
	if (sessionStorage.actualBike) {
		const { _id } = JSON.parse(sessionStorage.actualBike);

		const params = {
			bikeId: _id,
			bikeInfo,
			isNameChanged,
		};
		return axios.put('/api/crud/bike/edit', params).then((response) => {
			dispatcher.dispatch({
				type: actionTypes.DELETE_BIKE,
				data: response.data,
			});
		});
	} else {
		console.log('There is no loaded bike');
	}
}

export function addWorkout(updatedBikeValues) {
	if (sessionStorage.actualBike) {
		const { _id } = JSON.parse(sessionStorage.actualBike);
		const {
			bikeTotalMeters,
			bikeTotalMinutes,
			workoutMeters,
			workoutTotalMinutes,
		} = updatedBikeValues;

		const params = {
			bikeId: _id,
			bikeInfo: {
				bikeTotalMeters,
				bikeTotalMinutes,
			},
			workoutInfo: {
				workoutMeters,
				workoutTotalMinutes,
			},
		};
		return axios
			.put('/api/crud/bike/add-workout', params)
			.then((response) => {
				if (response.data) {
					const actualBike = JSON.parse(sessionStorage.actualBike);
					actualBike.bikeTotalMeters = bikeTotalMeters;
					actualBike.bikeTotalMinutes = bikeTotalMinutes;
					actualBike.bikeComponentList.forEach((compo) => {
						compo.compoAccumulatedMeters += workoutMeters;
						compo.compoAccumulatedMinutes += workoutTotalMinutes;
					});
					sessionStorage.actualBike = JSON.stringify(actualBike);
				}
				dispatcher.dispatch({
					type: actionTypes.ADD_WORKOUT,
					data: response.data,
				});
			});
	} else {
		console.log('There is no loaded bike');
	}
}

export function loadStravaBikeInfo(bikeList, stravaAccessToken) {
	const props = {
		bikeList,
		stravaAccessToken,
	};
	return axios
		.post('/api/crud/bike/stravaBikeInfo', props)
		.then((stravaBikeList) => {
			dispatcher.dispatch({
				type: actionTypes.STRAVA_LOAD_BIKE_LIST_INFO,
				data: stravaBikeList.data,
			});
		});
}
