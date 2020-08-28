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
	console.log(hero);
	if (hero.id) {
		return axios.put(`/api/heroes/${hero._id}`, hero).then((savedHero) => {
			dispatcher.dispatch({
				type: actionTypes.UPDATE_HERO,
				data: savedHero.data
			});
		});
	} else {
		return axios.post(`/api/heroes`, hero).then((savedHero) => {
			dispatcher.dispatch({
				type: actionTypes.CREATE_HERO,
				data: savedHero.data
			});
		});
	}
}

export function deleteHero(_id) {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO,
		data: _id
	});

	return axios.delete(`/api/heroes/${_id}`);
}
