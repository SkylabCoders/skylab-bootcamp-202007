'use strict';

let input = document.querySelector('.input');
let nameTitleHero = document.querySelector('.name');
let idHero = document.querySelector('.id-number');

const Hero = function () {
    let dataHero = {
        name: 'Name Hero',
        id: null
    };

    let heroName = function () {
        return dataHero.name;
    };


    let getHeroName = function () {
        return dataHero.name;
    }

    let setHeroName = function (newHeroName) {
        dataHero.name = newHeroName;
    }

    let getWriteHero = function () {
        input.addEventListener('input', function () {
            if (input.value === getHeroName()) {
                nameTitleHero.textContent = input.value;
            }
        })
    }

    let getHeroId = function () {
        return dataHero.id;
    }

    let setHeroId = function (newId) {
        dataHero.id = newId;
    }

    let writeId = function () {
        input.addEventListener('input', function () {
            if (input.value === getHeroName()) {
                idHero.textContent = `${dataHero.id}`
            }
        })
    }

    getWriteHero();
    writeId();

    return {
        heroName,
        getHeroName,
        setHeroName,
        getHeroId,
        setHeroId
    }
};

let catwoman = new Hero();
let batgirl = new Hero();
// Creo mi heroína y le doy el nuevo nombre
catwoman.setHeroName('Catwoman');
catwoman.setHeroId('01');
batgirl.setHeroName('Batgirl');
batgirl.setHeroId('02');