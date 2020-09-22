const heroList = require('./hero.mock');
const dispatcher = require('./dispatcher');
const actionTypes = require('./actionTypes');

module.exports = {
	loadHeroes: () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HEROES,
			data: heroList
		});
	},
	saveHero: (hero) => {
		dispatcher.dispatch({
			type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
			data: hero
		});
	},
	deleteHero: (id) => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: id
		});
	}
};
