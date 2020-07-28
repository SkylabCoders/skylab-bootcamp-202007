"use strict"

var result = [];

function calculator(num1, num2) {
    // Si son numeros o num2 es null operamos, sino mostramos error
    if ((isNumber(num1) || num1 == null) && (isNumber(num2) || num2 == null)) {
        if (num1 == null || num2 == null) {
            result = sqrt(num1, num2);
            console.log(result);
        } else {
            calculate(num1, num2);
            result.forEach(r => {
                console.log(r);
            });
        }
    } else {
        console.log("Valores introducidos no válidos");
        return;
    }
}


// Retorna la raiz cuadrada del numero que recibe como parametro
function sqrt(num1, num2) {
    var sqrtValue = 0;
    if (isNumber(num1)) {
        sqrtValue = returnNumberIntOrWithDecimal(Math.sqrt(num1));
        return `La raiz cuadrada de ${num1} es ${sqrtValue}`;
    } else if (isNumber(num2)) {
        sqrtValue = returnNumberIntOrWithDecimal(Math.sqrt(num2));
        return `La raiz cuadrada de ${num2} es ${sqrtValue}`;
    } else {
        return "No has introducido ningún valor";
    }
}

// Ejecuta la calculadora y guarda los resultados en result.
function calculate(num1, num2) {
    var suma = returnNumberIntOrWithDecimal(num1 + num2);
    result.push(num1 + " + " + num2 + " = " + suma);

    var resta = returnNumberIntOrWithDecimal(num1 - num2);
    result.push(num1 + " - " + num2 + " = " + resta);

    var mult = returnNumberIntOrWithDecimal(num1 * num2);
    result.push(num1 + " * " + num2 + " = " + mult);

    var div = returnNumberIntOrWithDecimal(num1 / num2);
    result.push(num1 + " / " + num2 + " = " + div);
}


function returnNumberIntOrWithDecimal(value) {
    var res = (value - Math.floor(value)) === 0
    if (res) {
        return value;
    } else {
        return value.toFixed(3);
    }
}

function isNumber(num) {
    if (!isNaN(num)) {
        return true;
    }
    return false;
}