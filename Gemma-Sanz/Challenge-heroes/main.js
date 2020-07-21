"use strict"

function Hero() {
    let data = {
        name: "Magneto",
        id: 4
    };
    function getName() {
        return data.name;
    };
    function setName(x) {
        newName = x;
    };
    function getId() {
        return data.id;
    };
    function setId(x) {
        newId = x;
    };
    return { getName, setName, getId, setId };
};

let y = document.querySelectorAll(".hero").innerHTML
let x = document.getElementById('name')

y = x.nodeValue;
console.log(Hero.name)