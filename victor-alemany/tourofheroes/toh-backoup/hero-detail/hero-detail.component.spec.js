describe('Hero Details', function () {
    let hero;
    let heroDetailComponent;
    let newName;

    beforeEach(function () {
        hero = new Hero();
        heroDetailComponent = new HeroDetailComponent();
    });

    it('should create an Object', function () {
        expect(hero).toBeTruthy();
    })

    it('should create a Function', function () {
        expect(heroDetailComponent).toBeTruthy();
    })

    it('shoud change the name'),
        function () {
            expect(heroDetailComponent.nameChange(newName)).toEqual(name);
        }
})