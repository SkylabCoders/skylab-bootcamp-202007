const heroList = require('../../../hero.mock');
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
	saveHero: () => {
		return new Promise((resolve) => {
			resolve(heroList);
		}).then((heroes) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_HEROES,
				data: heroes
			});
		});
	},
	deleteHero: () => {
		return new Promise((resolve) => {
			resolve(heroList);
		}).then((heroes) => {
			dispatcher.dispatch({
				type: actionTypes.LOAD_HEROES,
				data: heroes
			});
		});
	}
};
