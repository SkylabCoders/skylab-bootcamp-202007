'should create a hero service object'
'should get hero list'
'should get one hero by id'
'should get ine hero by name'

describe('HeroService', function () {
    let heroService;
    let heroMock;   

    beforeEach(function () {
        heroService = new HeroService();
        heroMock = {id: 18, name: 'Dr IQ'};
    });

    it('shoud create a heroService', function () {
        expect(heroService).toBeTruthy(); //That is exists
    });

    it('should get hero list', function () {
        expect(heroService.getHeroList()).toBe(heroList);
    });

    it('should get one hero by id', function () {
        const id = 18;
        expect(heroService.getHeroById(id)).toEqual(heroMock);
    });

    it('should get one hero by name', function () {
        const name= 'Dr IQ';
        expect(heroService.getHeroByName(name)).toEqual(heroMock);
    });

        
    
});



// create hero service object
    // get hero list
    // get one hero by id
    // get one hero by name