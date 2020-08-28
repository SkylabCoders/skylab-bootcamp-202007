import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadHeroes() {
	return axios.get('/api/heroes/').then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes.data
		});
	});
}

export function saveHero(hero) {
	return axios.post('/api/heroes', hero).then((savedHero) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_HERO,
			data: savedHero
		});
	});
}

export function updateHero(hero) {
	return axios.put(`/api/heroes/${hero._id}`, hero).then((updatedHero) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_HERO,
			data: updatedHero
		});
	});
}

export function deleteHero(id) {
	return axios.delete(`/api/heroes/${id}`).then(() => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id }
		});
	});
}
