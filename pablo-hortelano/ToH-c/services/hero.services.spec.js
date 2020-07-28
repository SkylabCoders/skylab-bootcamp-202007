describe('Create a Hero Service', () => {
	let heroService;
	let heroMock;
	beforeEach(function () {
		heroService = new HeroService();
		heroMock = { id: 18, name: 'Dr IQ' };
	});

	it('Should create a Hero service object', function () {
		expect(heroService).toBeTruthy();
	});
	it('should get hero list', function () {
		const heroList = heroService.getHeroList();
		expect(heroList).toBe(heroList);
	});
	it('should get one hero by id', function () {
		const id = 18;
		expect(heroService.getHeroById(id)).toEqual(heroMock);
	});
	it('should get one hero by name', function () {
		const name = 'Dr IQ';
		expect(heroService.getHeroByName(name)).toEqual(heroMock);
	});
});
