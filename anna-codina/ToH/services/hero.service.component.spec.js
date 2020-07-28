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
        return heroService.getHeroList().then((list) => {
            expect(list).toEqual(heroList);
        });
    });
    it('should get one hero by id', function () {
        const id = 18;
        return heroService.getHeroById(id).then((actualHero) =>
            expect(actualHero).toEqual(hero))
    });
    it('sholud throw error if not exist hero id', function () {
        const idError = 21;
        const errorMesaje = 'There is no hero with id: 21'
        return heroService.getHeroById(idError).catch((actualHero) =>
            expect(actualHero).toEqual(errorMesaje))
    });
    it('should get one hero by name', function () {
        const name = 'Dr IQ';
        expect(heroService.getHeroByName(name)).toEqual(hero);
    });
});