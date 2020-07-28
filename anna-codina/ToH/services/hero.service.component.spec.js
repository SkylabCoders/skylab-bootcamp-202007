describe('HeroService', function () {
    let heroService;
    let hero;
    beforeEach(function () {
        heroService = new HeroService();
        hero = { id: 18, name: 'Dr IQ' };
    });
    it('should create a hero service object', function () {
        expect(heroService).toBeTruthy();
    });
    it('should get hero list', function () {
        heroService.getHeroList().then((list) => {
            expect(list).toEqual(heroList);
        });
    });
    it('should get one hero by id', function () {
        const id = 18;
        heroService.getHeroById(id).then((actualHero) =>
            expect(actualHero).toEqual(hero))
    });
    it('should get one hero by name', function () {
        const name = 'Dr IQ';
        expect(heroService.getHeroByName(name)).toEqual(hero);
    });
});