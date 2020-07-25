"use strict";

const titleHeroName = document.querySelector(".hero");
const input = document.getElementById('heroName');
console.log(input)

function Hero() {
    let data = {
        name: "Magneto",
        id: 4
    };
    function getName() {
        return data.name;
    };
    function setName(name) {
        data.name = name;
    };
    function getId() {
        return data.id;
    };
    function setId(id) {
        data.id = id;
    };
    return { getName, setName, getId, setId };
};

function writeHeroName() {
    input.addEventListener("input", function () {
        if (input.value === getHeroName()) {
            titleHeroName.textContent = input.value;
        }
    });
};

function printHero() {

}
printHero()
writeHeroName()

let hero = new Hero();