"use strict"

describe("Hero", function () {
    let hero;
    let myHero;
    let name;
    let id;
    let newName;
    let newId;

    beforeEach(function () {
        myHero = new Hero();
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
        expect(myHero.getName()).toEqual(name);
    });
    it("should change the hero name", function setName() {
        myHero.getName(name);
        myHero.setName(newName);
        expect(myHero.setName()).toEqual(newName);
    });
    it("should return a id", function getId() {
        expect(myHero.getId()).toEqual(id);
    });
    it("should change the hero id", function setId() {
        myHero.setId(newId);
        expect(myHero.setId()).toEqual(newId);
    });

})
