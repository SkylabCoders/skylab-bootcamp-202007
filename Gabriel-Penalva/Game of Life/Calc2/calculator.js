
var num1 = "";
var num2 = "";
var pantalla = "";
var operacio = "";
var ans = false;
function fixed(x) {
    if (Number.isInteger(x) || isNaN(x))
        return x;
    else
        return Number.parseFloat(x).toFixed(3);
}

function Calc() {
    let sum = function (num1, num2) {
        return parseInt(num1) + parseInt(num2);
    };
    let rest = function (num1, num2) {
        return num1 - num2;
    };
    let mult = function (num1, num2) {
        return num1 * num2;
    };
    let division = function (num1, num2) {
        return num1 / num2;
    };
    return { sum, rest, mult, division };
}


function setOperator(op) {
    if (pantalla != "")
        num1 = pantalla;
    pantalla = "";
    ans = false;
    operacio = op;

}
function operate() {
    num2 = pantalla;
    let calc = Calc();
    switch (operacio) {
        case "+":
            pantalla = (calc.sum(num1, num2));
            break;
        case "-":
            pantalla = (calc.rest(num1, num2));
            break;
        case "*":
            pantalla = (calc.mult(num1, num2));
            break;
        case "/":
            pantalla = (calc.division(num1, num2));
            break;
        default:
            break;
    }
    document.getElementById("result").innerHTML = pantalla;
    ans = true;
}



function addNum(num) {
    if (ans) {
        pantalla = "";
        ans = false;
    }
    if (num != "0" || pantalla.length != 0) {
        if (num == "." && pantalla.length == 0) {
            num = "0.";
        }
        pantalla += num;
        document.getElementById("result").innerHTML = pantalla;
    } else {
        pantalla.getElementByIddocument.getElementById("result").innerHTML = "0";
    }

}

function borrar() {
    pantalla = "";
    num1 = "";
    num2 = "";
    operacio = "";
    document.getElementById("result").innerHTML = "0";

}
function borrarUn() {
    console.log(pantalla.length);
    if (pantalla.length == 1) {
        pantalla = "";
        document.getElementById("result").innerHTML = "0";
    } else if (pantalla.length > 1) {
        pantalla = pantalla.slice(0, -1);
        document.getElementById("result").innerHTML = pantalla;
    }
}