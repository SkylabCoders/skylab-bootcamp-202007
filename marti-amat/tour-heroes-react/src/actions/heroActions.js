import LIST_HEROES from '../components/hero-list-mock';
import dispatcher from '../AppDispatcher';
import actionTypes from './actionTypes';

export function loadHeroes() {
	return new Promise((resolve) => {
		resolve(LIST_HEROES);
	}).then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes
		});
	});
}
export function createHero(hero) {
	return new Promise((resolve) => {
		const hero = {
			name: 'Gilber',
			id: 99
		};
		resolve(hero);
	}).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_HERO,
			data: hero
		});
	});
}
export function deleteHero(id) {
	return new Promise((resolve) => {
		resolve(id);
	}).then((responseId) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HEROES,
			data: { id: responseId }
		});
	});
}
