describe('HeroService',function(){
    let heroService;
    let hero;
    
    beforeEach(function(){
        heroService = new HeroService();
        hero = {id:18,name:'Dr IQ'};
    })
    it('should create a HeroService',function(){
        expect(heroService).toBeTruthy();
    })

    it('should get a Hero list',function(){
        expect(heroService.getHeroList()).toBe(heroList);
    })

    it('should get a hero by id',function(){
        const id = 18;
        
        expect(heroService.getHeroById(id)).toEqual(hero);
    })    

    it('should get a hero by name',function(){
        const name = 'Dr IQ';
        expect(heroService.getHeroByName(name)).toEqual(hero);
    })  
})