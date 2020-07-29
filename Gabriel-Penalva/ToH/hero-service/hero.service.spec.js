describe('HeroService', function () {
    let heroServicie;

    beforeEach(function () {
        heroServicie = new HeroService();
    });
    it('should create a service object', function () {
        expect(heroServicie).toBeTruthy();
    });

    it('should get list', function () {
        return heroServicie.getHeroList().then((heroL) => {
            expect(heroL).toEqual(heroList);
        });
    });

    it('should get one hero by id', function () {
        const id = 14;
        return service.getHeroById(id).then((hero) => { //create an object with id 14
            expect().toEqual(hero);
        });
    });

    it('should get one hero by name', function () {
        const name = 'Dr IQ';
        const hero = { id: 18, name: 'Dr IQ' };//create an object with id 14
        expect(heroServicie.getHeroByName(name)).toEqual(hero);
    });
})