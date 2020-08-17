describe('details', function () {
    let hero;
    let heroDetailComponent;
    let newName;
    let name;

    beforeEach(function () {
        hero = new Hero()
        heroDetailComponent = new HeroDetailComponent();
    });
    it('should create', function () {
        expect(hero).toBeTruthy();
    })

    it('should change hero name', () => {

        expect(heroDetailComponent.nameChange(newName).toEqual(name));
    });
})