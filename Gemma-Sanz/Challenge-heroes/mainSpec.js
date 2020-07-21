describe("Hero", function () {
    let hero;
    let name;
    let id;
    beforeEach(function () {
        hero = new Hero();
        hero = {
            name: "Magneto",
            id: 4
        };
        name = "Magneto";
        id = 4;
        newName = "Tormenta";
        newId = 10;
    });
    it("should return a name", function getName() {
        debugger
        expect(Hero.getName()).toEqual(name);
    });
    it("should change the hero name", function setName() {
        hero.getName(name);
        hero.setName(newName);
        expect(hero.setName()).toEqual(newName);
    });
    it("should return a id", function getId() {
        expect(hero.getId()).toEqual(id);
    });
    it("should change the hero id", function setId() {
        hero.getId();
        hero.setId();
        expect(hero.setId()).toEqual(newId);
    });

})