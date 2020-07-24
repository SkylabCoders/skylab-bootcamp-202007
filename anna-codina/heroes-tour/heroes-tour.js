'use strict';
const Hero = function () {
    const createHero = function (name, id) {
        let newHero = new Hero();
        newHero.name = name;
        newHero.id = id;
        return newHero;
    };
    const getName = function () {
        return this.name;
    };
    const setName = function (newName) {
        this.name = newName;
    };
    const getId = function () {
        return this.id;
    }

    return { createHero, getName, setName, getId }
}