describe('HeroService', () => {
	let heroService;

	beforeEach(() => {
		heroService = new HeroService();
	});

	it('should create a hero service object', () => {
		expect(heroService).toBeTruthy();
	});

	it('should get heroList', () => {
		expect(heroService.getHeroList()).toBeDefined();
		expect(heroService.getHeroList()).toEqual(heroList);
	});

	it('should get one hero by id', () => {
		const id = 14;
		const hero = heroList.find((hero) => hero.id === id); //create an object with id 14
		expect(heroService.getHeroById(id)).toEqual(hero);
	});

	it('should get one hero by name', () => {
		const name = 'Dr IQ';
		const hero = heroList.find((hero) => hero.name === name);
		expect(heroService.getHeroByName(name)).toEqual(hero);
	});
});
