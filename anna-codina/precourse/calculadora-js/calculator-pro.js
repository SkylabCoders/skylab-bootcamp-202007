function calculatorPro() {
    const newNumbersQuestion = 'New numbers?';
    const defaultAnswer = '<y/n>';
    const answerAfirmative = 'y';
    const answerNegative = 'n';
    const newNumbersPetition = 'New numbers';
    const newNumbersDefaultAnswer = '<1, 2, 3, 4...>';
    const farewell = 'Bye!'
    const alertAnswer = 'Indique: y/n'

    let operators = Array.from(arguments);
    validarNum(operators);

    let result = operations(operators);
    console.log(result);

    // Pregunta al usuario para añadir más numeros.
    do {
        result = [];
        var answer = prompt(newNumbersQuestion, defaultAnswer);
        answer = answer.toLowerCase();
        var newNumbers;
        switch (answer) {
            case answerAfirmative:
                newNumbers = prompt(newNumbersPetition, newNumbersDefaultAnswer);
                var newNumConverted = stringToNumbers(newNumbers);
                validarNum(newNumConverted);
                result = result.concat(operations(newNumConverted));
                console.log(result);
                break;
            case answerNegative:
                console.log(farewell);
                break;
            default:
                console.log(alertAnswer);
                break;

        }
    } while (answer !== answerNegative);
}

function validarNum(numberValidate) {
    const alertNan = 'Uno de los valores introducidos no es un número';
    for (let i in numberValidate) {
        if (isNaN(numberValidate[i])) {
            throw alertNan;
        }
    }
}

function operations(operators) {

    /* con if y else separamos si viene un argumento o más de uno
    Si viene un solo argumento realizaremos la raiz cuadrada
    Si vienen más de uno realizaremos las operaciones convencionales*/
    if (!isNaN(operators[0]) && operators[1] == undefined) {
        function squareRoot(operatorsRoot) {
            var rootResult = operatorsRoot[0];
            rootResult = Math.sqrt(rootResult);
            rootResult = fixDecimals(rootResult);
            return rootResult;
        }

        // Introduce los results en el array:
        let result = [];
        result.push(squareRoot(operators));
        return result;

    } else {
        // funciones matematicas si hay más de un elemento realizando for...in por cada elemento de entrada.
        function sum(operatorsSum) {
            // var argumentsSum = Array.from(arguments);
            let sumResult = operatorsSum.shift();
            for (let num in operatorsSum) {
                sumResult += operatorsSum[num];
            }
            sumResult = fixDecimals(sumResult);
            return sumResult;
        }

        function subs(operatorsSubs) {
            // var argumentsSubs = Array.from(arguments);
            let subsResult = operatorsSubs.shift();
            for (let num in operatorsSubs) {
                subsResult -= operatorsSubs[num];
            }
            subsResult = fixDecimals(subsResult);
            return subsResult;
        }

        function mult(operatorsMult) {
            // var argumentsMult = Array.from(arguments);
            var multResult = operatorsMult.shift();
            for (let num in operatorsMult) {
                multResult *= operatorsMult[num];
            }
            multResult = fixDecimals(multResult);
            return multResult;
        }

        function div(operatorsDiv) {
            // var argumentsDiv = Array.from(arguments);
            var divResult = operatorsDiv.shift();
            for (let num in operatorsDiv) {
                divResult /= operatorsDiv[num];
            }
            divResult = fixDecimals(divResult);
            return divResult;
        }

        // Introduce los results en el array:
        let result = [];
        result.push(sum(operators), subs(operators), mult(operators), div(operators));
        return result;
    }
}

// redondea el result a un máximod de 3 decimales.
function fixDecimals(result) {
    const decimalPoint = '.';
    const lastZero = '0';
    const allZeros = '000';
    let result = result.toString();
    // Comprobar si hay decimales o no;
    if (result.indexOf(decimalPoint) >= 0) {
        for (var i = (result.indexOf(decimalPoint) + 3); result.indexOf(decimalPoint) <= i; i--) {
            if (result.substring((result.indexOf(decimalPoint) + 1), (result.indexOf(decimalPoint) + 4)) == allZeros) {
                //si hay decimales pero los tres primeros son 000 devolveremos un numero entero;
                result = result.substring(0, result.charAt(decimalPoint) + 1);
                break;
            } else if (result.charAt(i) == lastZero) {
                // quitamos los decimales que no contengan valor numerico;
                result = result.substring(0, (i));
            } else {
                // en caso de que tenga result con valor numerico nos devolverá el numero con decimales;
                result = result.substring(0, i + 1);
                break;
            }
        }
    }
    return result
}

// Convierte los nuevos valores introducidos por el usuario de strings a numbers:
function stringToNumbers(newNumbers) {
    const splitItem = ',';
    var stringToArray = newNumbers.split(splitItem);
    var arrayOfNumbers = [];
    for (var i in stringToArray) {
        var numberConverted = parseInt(stringToArray[i]);
        arrayOfNumbers.push(numberConverted);
    }
    return arrayOfNumbers;
}