descrption("Hero", function () {
    beforeEach(function () {
        const hero = {
            name: "Magneto",
            id: 4
        }
    });
    it("should have a name", function () {
        expect(hero.name).toBe(name);
    });
    it("should have a id", function () {
        expect(hero.id).toBe(id)
    });

})