import { heroList } from '../Assets/heroMock';
import { dispatcher } from '../appDispatcher';
import { actionTypes } from './actionTypes';

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
export function updateHero(hero) {
	return new Promise((resolve) => {
		const hero = {
			name: 'Dani',
			id: 99
		};
		resolve(hero);
	}).then((hero) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_HEROES,
			data: hero
		});
	});
}
