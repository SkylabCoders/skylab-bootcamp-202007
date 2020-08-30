import heroMock from '../Assets/heroMock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

// Action creators

export function loadHeroes() {
	return new Promise((resolve) => {
		resolve(heroMock);
	}).then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes
		});
	});
}

export function createHero() {
	return new Promise((resolve) => {
		const hero = {
			name: 'Gilbe',
			id: 99
		};
		resolve(hero);
	}).then((hero) => {
		dispatcher.dispatch({
			// per enviar al dispatcher
			type: actionTypes.CREATE_HERO,
			data: hero
		});
	});
}

export function removeHero(heroId) {
	return new Promise((resolve) => {
		resolve(heroId);
	}).then((heroId) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: heroId
		});
	});
}

export function updateHero(heroId, newId, newName) {
	return new Promise((resolve) => {
		const hero = {
			id: heroId,
			newId: newId,
			newName: newName
		};
		resolve(hero);
	}).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_HERO,
			data: hero
		});
	});
}
