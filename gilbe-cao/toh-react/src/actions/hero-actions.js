import axios from 'axios';
import dispatcher from '../dispatcher';
import actionTypes from './action-types';

export function loadHeroes() {
	return axios.get('/api/heroes').then(({ data }) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data
		});
	});
}

export function saveHero(hero) {
	return axios.post('/api/heroes').then((savedHero) => {
		dispatcher.dispatch({
			type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			data: savedHero
		});
	});
}

export function deleteHero(id) {
	return axios.delete().then((responseId) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id: responseId }
		});
	});
}
