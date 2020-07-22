describe("Hero Details", function () {
    let hero;
    let heroDetailComponent;
    beforeEach(function () {
        hero = new Hero();
        heroDetailComponent = new HeroDetailComponent();
    })
    it("should create a new hero", function () {
        expect(hero).toBeTruty();
    });
    it("should create a hero", function () {
        expect(HeroDetailComponent).toBeTruty();
    });
});