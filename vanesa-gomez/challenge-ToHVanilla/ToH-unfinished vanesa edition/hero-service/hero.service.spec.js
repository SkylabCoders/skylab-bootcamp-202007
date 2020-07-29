describe('HeroService', function () {
	let heroService;
	const hero = { id: 18, name: 'Dr IQ' };

	beforeEach(function () {
		heroService = new HeroService();
	});

	it('should create a hero service object', function () {
		expect(heroService).toBeTruthy();
	});

	it('should get a hero list', function () {
		expect(heroService.getHeroList()).toBe(heroList);
	});

	it('should get one hero by id', function () {
		const id = 18;
		expect(heroService.getHeroById(id)).toEqual(hero);
	});

	it('should get one hero by name', function () {
		const name = 'Dr IQ';
		expect(heroService.getHeroByName(name)).toEqual(hero);
	});
});
