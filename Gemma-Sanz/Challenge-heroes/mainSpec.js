"use strict"

describe("Hero", function () {
    let hero;
    let name;
    let id;
    let newName;
    let newId;

    beforeEach(function () {
        hero = {
            name: "Magneto",
            id: 4
        }
        hero = new Hero();
        name = "Magneto";
        id = 4;
        newName = "Tormenta";
        newId = 10;
    });
    it("should return a name", function getName() {
        debugger
        expect(hero.getName()).toEqual(name);
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
        hero.setId(newId);
        expect(hero.setId()).toEqual(newId);
    });

})
