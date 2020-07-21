describe('Heroes', function () {
	let hero;
	const newHeroName = 'Gilberto';

	beforeEach(function () {
		myHero = new Hero();
	});

	it('Should have a Name and an Id', function () {
		expect(myHero.getHeroName()).toBeDefined();
		expect(myHero.getHeroId()).toBeDefined();
	});

	it('Should change the name of the hero', function () {
		myHero.setHeroName(newHeroName);
		expect(myHero.getHeroName()).toBe(newHeroName);
	});
});
