describe("Hero Details", function () {
    let hero;
    let heroDetailComponent;
    beforeEach(function () {
        hero = new Hero();
        heroDetailComponent = new HeroDetailComponent();
    })
    it("should create a new hero", function () {
        expect(hero).toBeTruthy();
    });
    it("should create a hero", function () {
        expect(heroDetailComponent).toBeTruthy();
    });
    it("should called onInit and behave properly", function () {
        const spy = spyOn(heroDetailComponent, "onInit");
        heroDetailComponent.onInit();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    })
});