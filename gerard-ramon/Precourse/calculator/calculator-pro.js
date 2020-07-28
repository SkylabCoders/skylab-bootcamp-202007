var result = [];
var contador = 0;
var bucle = false;

function calculator() {
    do {
        // Si son numeros operamos, sino mostramos error
        if (validArgs(args)) {
            if (args.length === 1) {
                sqrt(args[0]);
            } else {
                calculatorPro(args);
            }
            printResult();
            if (prompt("Seguir introduciendo numeros? (y/n)", "n").toLowerCase() == "y") {
                bucle = true;
                var args = prompt("Introduce los nuevos numeros separados por ,").split(',');
            } else {
                bucle = false;
            }
        } else {
            console.log("Argumentos no validos");
            bucle = false;
        }
    } while (bucle)
}

function sqrt(num) {
    var sqrtValue = returnNumberIntOrWithDecimal(Math.sqrt(num));
    result[contador] = `Resultado ARGS n${contador}: Raiz cuadrada de ${num} es ${sqrtValue}`;

    contador++;
}


// Ejecuta la calculadora y guarda los resultados en result.
function calculatorPro(argumentos) {
    var sum = 0;
    var res = 0;
    var mult = 1;
    var div = 1;
    for (var arg in argumentos) {
        sum += parseFloat(argumentos[arg]);
        res -= parseFloat(argumentos[arg]);
        mult *= parseFloat(argumentos[arg]);
        div /= parseFloat(argumentos[arg]);
    }

    sum = returnNumberIntOrWithDecimal(sum);
    res = returnNumberIntOrWithDecimal(res);
    mult = returnNumberIntOrWithDecimal(mult);
    div = returnNumberIntOrWithDecimal(div);


    result[contador] = `Resultados ARGS n${contador}: Suma: ${sum} // Resta: ${res} // Mult: ${mult} // Div: ${div}`;

    contador++;
}

function printResult() {
    for (var res in result) {
        console.log(result[res]);
    }
    console.log("_______");
}

// Comprueba si el numero que recibe es un numero
function isNumber(num) {
    if (!isNaN(num)) {
        return true;
    }
    return false;
}

// Comprueba los argumentos recibidos, si hay alguno que no es un numero retorna false.
function validArgs(argumentos) {
    for (var arg in argumentos) {
        if (!isNumber(arg)) {
            return false;
        }
    }
    return true;
}

function returnNumberIntOrWithDecimal(value) {
    var calc = (value - Math.floor(value)) === 0
    if (calc) {
        return value;
    } else {
        return value.toFixed(3);
    }
}