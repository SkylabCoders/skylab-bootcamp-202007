import heroList from '../hero.mock';
import dispatcher, { Dispatcher } from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadHeroes() {
	let heroPromise = new Promise((resolve, reject) => {
		heroList ? resolve(heroList) : reject('Failed loading heroes');
	});
	heroPromise
		.then((heroes) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_HEROES,
				data: heroes
			});
		})
		.catch((err) => console.log(err));
}

export function updateHero(hero) {
	return new Promise((resolve) => {
		const hero = {
			name: 'something',
			id: 12
		};
	});
}
