let __heroes = [];
export default {
	_setHeroes(heroes) {
		__heroes = heroes;
	},

	getHeroes() {
		return __heroes;
	},

	getHeroById(id) {
		return __heroes.find((hero) => hero.id === id);
	},

	addChangeListener(callback) {},

	removeChangeListener(callback) {},

	emitChange() {}
};
