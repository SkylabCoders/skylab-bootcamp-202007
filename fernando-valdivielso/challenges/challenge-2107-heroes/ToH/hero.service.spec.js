describe('HeroService', function () {
    let heroService;
    

    beforeEach(function () {
        heroService = new HeroService();
    });

    it('shoud create a hero service object', function () {
        expect(heroService).toBeTruthy();
    });

    it('should ger hero list', function () {
        expect(heroService.getHeroList()).toBeDefined();
        expect(heroService.getHeroList()).toEqual(heroList);
    });

    it('should get one hero by id', function () {
        const id = 18;
        const hero = heroList.find((hero) => hero.id === id) ; //create an object with id 14
        expect(heroService.getHeroById(id)).toEqual(hero);
    });

    it('should get one hero by name', function () {
        const name= 'Dr IQ';
        const hero = heroList.find((hero) => hero.name === name);
        expect(heroService.getHeroByName(name)).toEqual(hero);
    });

        
    
});



// create hero service object
    // get hero list
    // get one hero by id
    // get one hero by name