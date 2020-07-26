describe("Hero List", function () {
    let heroList;
    let heroListComponent;
    beforeEach(function () {
        heroListComponent = new HeroListComponent();
    })
    it("should create a hero list", function () {
        const id = 14;
        let name = "Celeritas";
        heroList = { id, name };
        expect(heroList).toBeTruthy();
    });
    it("should called onInit and behave properly", function () {
        const spy = spyOn(heroListComponent, "onInit");
        heroListComponent.onInit();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    });
    /*     it("should called createButtonsList and behave properly", function () {
            const spy = spyOn(heroListComponent.onInit, "createButtonsList");
            expect(spy).toHaveBeenCalled();
        }) */
});