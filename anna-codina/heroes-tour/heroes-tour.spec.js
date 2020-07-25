'use strict';
describe('Heroes Tour', function () {
    const name = 'Rayos'
    const newName = 'Retruecanos'
    const id = 1;
    let hero = {
        name: 'Rayos',
        id: 1,
    };

    let myHero = undefined;
    beforeEach(function () {
        myHero = new Hero();
        myHero = myHero.createHero(name, id)
    });
    it('should create a newHero', function () {
        expect(myHero).toBeTruthy();
    })
    it('should get the hero name', function () {
        expect(myHero.getName()).toEqual(name)
    })
    it('should set a new name to the hero', function () {
        myHero.setName(newName);
        expect(myHero.getName()).toEqual(newName)
    })
    it('should get and get the hero id', function () {
        expect(myHero.getId()).toEqual(hero.id)
    })
})