describe('hero-detail',function(){
    let hero;
    let heroDetailComponent;
    beforeAll(function(){
        hero = new Hero();
        heroDetailComponent = new HeroDetailComponent();
    });

    it('should create new hero',function(){
        expect(hero).toBeTruthy();
    })

    it('should create new hero detail component',function(){
        expect(heroDetailComponent).toBeTruthy();
    })

})
