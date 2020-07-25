decribe("Hero Service", function () {
    let heroService;
    let heroList = [];
    beforeEach(function () {
        heroService = new HeroService();
    });
    it("should create a new hero service list", function () {
        expect(heroService).toBeTruthy();
    });
    it("should get a hero list", function () {
        expect(heroService.getHeroList()).toBeDefined();
        expect(heroList.getHeroList()).toEqual(heroList);
    });
    it("should get one hero by id", function () {
        const id = 14;
        const hero = { id: 14 };
        expect(heroList.getHeroById(id)).toEqual(hero);
    });
    it("should get one hero by name", function () {
        const name = "Tornado";
        const hero = { name: "Tornado" };
        expect(heroList.getHeroByName(name)).toEqual(hero);
    });
});