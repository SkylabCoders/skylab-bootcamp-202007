const heroList = require('./hero.mock');
const dispatcher = require('./dispatcher');
const actionTypes = require('./actionTypes');

module.exports = {
	loadHeroes: () => {
		return new Promise((resolve) => {
			resolve(heroList);
		}).then((heroes) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_HEROES,
				data: heroes
			});
		});
	},

	saveHero: (hero) => {
		return new Promise((resolve) => {
			resolve(hero);
		}).then((savedHero) => {
			dispatcher.dispatch({
				type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
				data: savedHero
			});
		});
	},

	deleteHero: (id) => {
		return new Promise((resolve) => {
			resolve();
		}).then(() => {
			dispatcher.dispatch({
				type: actionTypes.DELETE_HERO,
				data: { id }
			});
		});
	}
};
