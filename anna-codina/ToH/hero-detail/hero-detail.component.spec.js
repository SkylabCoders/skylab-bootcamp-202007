'use strict';
describe('Heroes Tour', function () {
    const name = 'Rayos'
    const newName = 'Retruecanos'
    let hero = {
        name: 'Rayos',
        id: 1,
    };

    let myHero = undefined;
    let heroDetailComponent = undefined;
    beforeEach(function () {
        heroDetailComponent = new HeroDetailComponent;
        myHero = new Hero(1, name);
    });
    it('should create a newHero', function () {
        expect(myHero).toBeTruthy();
    })
    it('should get the hero name', function () {
        expect(myHero.name).toEqual(name)
    })
    it('should set a new name to the hero', function () {
        debugger;
        heroDetailComponent.nameChange(newName);
        expect(myHero.name).toEqual(newName)
    })
    it('should get the hero id', function () {
        expect(myHero.id).toEqual(hero.id)
    })
})