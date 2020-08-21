import heroList from '../heroMock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadHeroes() {
	return new Promise((resolve) => {
		resolve(heroList);
	}).then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes
		});
	});
}

export function saveHero(hero) {
	return new Promise((resolve) => {
		resolve(hero);
	}).then((savedHero) => {
		dispatcher.dispatch({
			type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			data: savedHero
		});
	});
}
export function deleteHero(id) {
	return new Promise((resolve) => {
		resolve();
	}).then(() => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id }
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
