import heroList from '../hero-list';
import dispatcher from '../dispatcher';
import actionTypes from './action-types';
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
	if (!hero._id) hero = { name: hero.name };

	return axios.post('/api/heroes', hero).then((savedHero) => {
		dispatcher.dispatch({
			type: hero._id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
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
