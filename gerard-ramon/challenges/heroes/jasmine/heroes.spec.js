describe('Heroes', function () {
	let myHero;
	let newHeroName = 'Gilberto';

	beforeEach(function () {
		myHero = new Hero();
	});

	it('Should create a new hero', function () {
		expect(myHero).toBeDefined();
	});

	it('Should have a Name and an Id', function () {
		myHero.initializeHero('Superman', 1);
		expect(myHero.getHeroName()).toBeTruthy();
		expect(myHero.getHeroId()).toBeTruthy();
	});

	it('Should change the name of the hero', function () {
		myHero.setHeroName(newHeroName);
		expect(myHero.getHeroName()).toBe(newHeroName);
	});
});
