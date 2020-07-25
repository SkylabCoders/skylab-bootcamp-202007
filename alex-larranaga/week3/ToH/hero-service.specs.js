describe('HeroService', function () {
	let heroService;

	beforeEach(function () {
		heroService = new heroService();
	});

	it('shoeuld create a hero service object', function () {
		expect(heroService).toBeTruthy();
	});
	it('should get a hero list', function () {
		expect(heroService.getHeroList().toBeDefined());
		expect(heroService.getHeroList().toEqual(heroList));
	});

	it('should get one hero by id', function () {
		const id = 14;
		const hero = {}; //put required data
		expect(heroService.getHeroById(id).toEqual(hero));
	});
	it('should get one hero by name', function () {
		const name = 'pep';
		const hero = { name: 'pepe' };
		expect(heroService.getHeroByName(name)).toEqual(hero);
	});
});
