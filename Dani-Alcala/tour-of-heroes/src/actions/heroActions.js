// import heroList from '../hero.mock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadHeroes() {
	// return new Promise((resolve) => {
	// 	resolve(heroList);
	// })

	return axios.get('/api/heroes').then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			// data: heroes
			data: heroes.data
		});
	});
}

export function saveHero(hero) {
	// return new Promise((resolve) => {
	// 	resolve(hero);
	// })

	if (!hero._id) hero = { name: hero.name };//esto no lo hacía

	return axios.post('/api/heroes', hero).then((savedHero) => {
		console.log(savedHero)
		dispatcher.dispatch({
			// type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			// data: savedHero
			type: hero._id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,//el update no funciona bien, creo que es pq no es un post sino un put o patch
			data: savedHero
		});
	});
}

export function deleteHero(_id) {//cambio id por _id
	// return new Promise((resolve) => {
	// 	resolve();
	// })
	return axios.delete(`/api/heroes/${_id}`)
	.then(() => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			// data: { id }
			data: { _id }
		});
	});
}