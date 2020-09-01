import heroList from '../hero.mock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadHeroes() {
	return axios.get('/api/heroes').then((heroes) => {
		console.log(heroes);
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes.data
		});
	});
}

export function saveHero(hero) {
	return axios.post('/api/heroes', hero).then((savedHero) => {
		dispatcher.dispatch({
			type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			data: savedHero
		});
	});
}

export function deleteHero(id) {
	return new Promise((resolve) => {
		resolve(id);
	}).then((responseId) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id: responseId }
		});
	});
}
