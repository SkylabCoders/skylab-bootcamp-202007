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

function sum(num1, num2) {
    return +num1 + +num2;
}
function minus(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 != 0)
        return num1 / num2;
    else                    //Catch the 0 division error
        return "Infinite";
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

function addNum(num) {
    if(ans){
        pantalla="";
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

function setOperator(op) {
    if (pantalla != "")
        num1 = pantalla;
    pantalla = "";
    ans = false;
    operacio = op;



}
function operate() {
    var resultat = "";
    num2 = pantalla;
    switch (operacio) {
        case "+":
            pantalla = fixed(sum(num1, num2));
            break;
        case "-":
            pantalla = fixed(minus(num1, num2));
            break;
        case "*":
            pantalla = fixed(multiply(num1, num2));
            break;
        case "/":
            pantalla = fixed(division(num1, num2));
            break;
    }
    document.getElementById("result").innerHTML = pantalla;
    ans = true;
}
