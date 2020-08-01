import heroList from '../toh.moks';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadHeros() {
	return new Promise((resolve) => {
		resolve(heroList);
	}).then((heros) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROS,
			data: heros
		});
	});
}
export function createHeros(hero) {
	return new Promise((resolve) => {
		const hero = {
			name: 'MiauCat',
			id: 99
		};
		resolve(hero);
	}).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_HEROS,
			data: hero
		});
	});
}
