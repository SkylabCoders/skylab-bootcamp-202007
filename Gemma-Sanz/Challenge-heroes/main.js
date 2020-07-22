"use strict"

let titleHeroName = document.querySelectorAll(".hero")
let input = document.getElementById('name')
function Hero() {
    let data = {
        name: "Magneto",
        id: 4
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
    addEventListener("click", function () {
        titleHeroName = input.value;
    })
}

writeHeroName()

let myHero = new Hero();