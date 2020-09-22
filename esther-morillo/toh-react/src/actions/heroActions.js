import heroList from '../hero.mock';
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
		resolve(id);
	}).then((responseId) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			//en la acción de tipo delete lo que le paso por data es un objeto, le creo un objeto con el id. Pero sería lo mismo poner data: id y ya, pero es para que veamos que paso un objeto
			data: { id: responseId }
		});
	});
}
