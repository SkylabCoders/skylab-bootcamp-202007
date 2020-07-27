describe('HeroService', function () {
	let heroService;
	const hero = { id: 18, name: 'Dr IQ' };

	beforeEacg(function () {
		heroService = new heroService();
	});

	it('source create a HeroService', function () {
		expect(heroService).toBeTruthy();
	});

	it('should get hero list', function () {
		expect(heroService.getHeroList()).toBe(heroList);
	});

	it('should fet one hero by id', function () {
		const id = 18;
		expect(heroService.getHeroById(id)).toEqual(hero);
	});
	it('should get one hero by name', function () {
		const name = 'Dr IQ';
		expect(heroService.getHeroByName(name).toEqual(hero));
	});
});
