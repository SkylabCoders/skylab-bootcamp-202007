//import heroList from '../hero-list';
import dispatcher from '../dispatcher';
import actionTypes from './action-types';
import Axios from 'axios';

export function loadHeroes() {
	/* return new Promise((resolve) => {
		resolve(heroList); */

	return Axios.get('/api/heroes').then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes.data
		});
	});
}

export function saveHero(hero) {
	/* return new Promise((resolve) => {
		resolve(hero);
	}).then((savedHero) => { */

		console.log(hero);
	return Axios.put(`/api/heroes/${hero.id}`, {name: hero.name}).then((savedHero)=>{
		dispatcher.dispatch({
			type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			data: savedHero.data
		});
	})
}

export function deleteHero(_id) {
	/* return new Promise((resolve) => {
		resolve(id);
	}) */
	return Axios.delete(`/api/heroes/${_id}`)
	.then(() => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { _id }
		});
	});
}
