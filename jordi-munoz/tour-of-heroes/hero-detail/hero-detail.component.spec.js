describe('Hero Details', function () {
    let hero;
    let heroDetailComponent;
    let name;
    let newName;
    beforeEach(function () {
        hero = new Hero();
        heroDetailComponent = new HeroDetailComponent();
    });
    it('should create', function () {
        expect(hero).toBeTruthy();
    })
    it('should create', function () {
        expect(heroDetailComponent).toBeTruthy();
    })
    it('should be able to change the name', function () {
        expect(heroDetailComponent.nameChange(newName).toEqual(name));
    })
})
