import heroList from '../hero.mock';
import dispatcher from '../ToHDispatcher';
import actionTypes from './actionTypes';

export function loadHeroes() {
	return new Promise((resolve) => {
		resolve(heroList);
	}).then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HERO,
			data: heroes
		});
	});
}

export function updateHeroes() {
	return new Promise((resolve) => {
		const hero = {
			name: 'marti',
			id: 0
		};
		resolve(hero);
	}).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_HERO,
			data: hero
		});
	});
}
