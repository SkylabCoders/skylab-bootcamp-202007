import heroMock from '../Assets/heroMock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

// Action creators

export function loadHeroes() {
	return axios.get('/api/heroes').then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes.data
		});
	});
}

export function createHero(params) {
	return axios.post('/api/heroes', params).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_HERO,
			data: hero
		});
	});
}

export function removeHero(heroId) {
	return axios.delete(`/api/heroes/${heroId}`).then((heroId) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: heroId
		});
	});
}

export function updateHero(heroId, newName) {
	const params = {
		name: newName
	};
	return axios.put(`/api/heroes/${heroId}`, params).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_HERO,
			data: hero
		});
	});
}
