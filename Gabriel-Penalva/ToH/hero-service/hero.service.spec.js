describe('HeroService', function () {
    let heroServicie;

    beforeEach(function () {
        heroServicie = new HeroService();
    });
    it('should create a service object', function () {
        expect(heroServicie).toBeTruthy();
    });

    it('should get list', function () {
        expect(heroServicie.getHeroList()).toBeDefined();
        expect(heroServicie.getHeroList()).toEqual(heroList);
    });

    it('should get one hero by id', function () {
        const id = 14;
        const hero = heroList.find((heros) => heros.id === id); //create an object with id 14
        expect(heroServicie.getHeroById(id)).toEqual(hero);

    });

    it('should get one hero by name', function () {
        const name = 'Dr IQ';
        const hero = { id: 18, name: 'Dr IQ' };//create an object with id 14
        expect(heroServicie.getHeroByName(name)).toEqual(hero);
    });
})