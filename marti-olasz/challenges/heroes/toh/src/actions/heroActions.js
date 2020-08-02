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

export function createHero() {
	return new Promise((resolve) => {
		resolve(heroList);
	}).then((hero) => {
		dispatcher.dispatch({
			type: hero.id ? actionTypes.CREATE_HERO : actionTypes.UPDATE_HERO,
			data: hero
		});
	});
}

export function updateHeroes(hero) {
	return new Promise((resolve) => {
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
		resolve();
	}).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id }
		});
	});
}
