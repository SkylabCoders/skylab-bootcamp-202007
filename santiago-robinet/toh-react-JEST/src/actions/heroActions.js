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
	return axios.put(`/api/heroes/${hero.id}`, hero).then((savedHero) => {
		dispatcher.dispatch({
			type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			data: hero
		});
	});
}

export function deleteHero(_id) {

	return axios.delete(`/api/heroes/${_id}`).then((responseId) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { _id }
		});
	});
}
