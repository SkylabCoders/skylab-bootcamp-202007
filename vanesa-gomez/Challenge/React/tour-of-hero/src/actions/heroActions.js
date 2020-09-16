import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadHeroes() {
	return axios.get('/api/heroes').then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes.data
		});
	});
}

export function saveHero(hero) {
	return new Promise((resolve) => {
		resolve(hero);
	}).then((savedHero) => {
		dispatcher.dispatch({
			type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			data: savedHero
		});
	});
}
export function deleteHero(id) {
	return axios.delete(`/api/heroes/${id}`).then((id) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id }
		});
	});
}

export function createHero(hero) {
	return axios.post('/api/heroes').then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_HERO,
			data: hero
		});
	});
}
