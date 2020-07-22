"use strict"

let titleHeroName = document.querySelector(".hero")
let input = document.getElementById('name')
function Hero() {
    let data = {
        name: "Magneto",
        id: 4,
        newName: "Tormenta",
        newId: 10
    };
    function getName() {
        return data.name;
    };
    function setName(name) {
        newName = name;
    };
    function getId() {
        return data.id;
    };
    function setId(id) {
        newId = id;
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