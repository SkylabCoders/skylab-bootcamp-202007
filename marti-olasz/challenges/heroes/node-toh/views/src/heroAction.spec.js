const { loadHeroes, saveHero, deleteHero } = require('./heroActions');
const heroStore = require('./heroStore');

let heroList = require('./hero.mock');

describe('Hero action test', () => {
	it('should load heroes', () => {
		loadHeroes();
		expect(heroStore.getHeroes()).toEqual(heroList);
	});

	it('should create hero', () => {
		const hero = { name: 'BOMBASTO' };
		saveHero(hero);
		const newHero = heroStore
			.getHeroes()
			.find((element) => element.name === hero.name);
		expect(newHero.name).toEqual(hero.name);
	});

	it('should update hero', () => {
		const hero = { name: 'BOMBASTO', id: 13 };
		saveHero(hero);
		expect(heroStore.getHeroById(hero.id)).toEqual(hero);
	});

	it('should delete hero', () => {
		const hero = { id: 12 };
		deleteHero(hero);
		expect(heroStore.getHeroById(hero.id)).not.toEqual(hero);
	});
});
