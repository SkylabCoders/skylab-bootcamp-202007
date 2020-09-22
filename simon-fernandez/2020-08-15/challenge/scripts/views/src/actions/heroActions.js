const heroList = require('../../../hero.mock');
const dispatcher = require('./dispatcher');
const actionTypes = require('./actionTypes');

module.exports = {
	loadHeroes: () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroList
		});
	},
	saveHero: () => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_HERO,
			data: heroList
		});
	},
	deleteHero: () => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: heroList
		});
	}
};
