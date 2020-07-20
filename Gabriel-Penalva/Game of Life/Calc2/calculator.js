
function Calc() {
    let sum = function ([num1, num2]) {
        return num1 + num2;
    };
    let rest = function ([num1, num2]) {
        return num1 - num2;
    };
    let mult = function ([num1, num2]) {
        return num1 * num2;
    };
    let div = function ([num1, num2]) {
        return num1 / num2;
    };
    return { sum, rest, mult, div };
}

let nunbers = [];
let claculadora = Calc();

function getNumber() {
    return document.getElementById('pantalla').innerText;
}

