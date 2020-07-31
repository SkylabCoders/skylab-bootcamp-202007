import heroList from '../ components/list.mock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadHeores() {
	return new Promise((resolve) => {
		resolve(heroList);
	}).then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroes
		});
	});
}

export function updateHero(hero) {
	return new Promise((resolve) => {
		const hero = {
			name: 'Gilber',
			id: 99
		};
		resolve(hero);
	}).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_HERO,
			data: hero
		});
	});
}
