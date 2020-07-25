
describe('Hero', function () {
	let myHero,
		heroName = 'Jorge',
		newHeroName = 'Beto',
		heroId = 10;
	newHeroId = 15;
	beforeAll(function () {
		myHero = new Hero();
	});

	it('should create a hero', function () {
		myHero.createHero(heroName, heroId);
		expect(myHero).toBeDefined;
	});

	it('should display the heroName', function () {
		myHero.setName(newHeroName);
		expect(myHero.getName()).toEqual(newHeroName);
	});

	it('should display the heroId', function () {
		myHero.setId(newHeroId);
		expect(myHero.getId()).toBeTruthy;
	});

});
