function calculatorPro (){

    // Reescribimos arguments como un array.
    arguments = Array.from(arguments);
    validarNum(arguments);

    var result = operations(arguments);
    console.log(result);

    // Pregunta al usuario para añadir más numeros.
    do {
        result = [];
        const question = ('New numbers?');
        var answeer = prompt(question, '<y/n>');
        answeer = answeer.toLowerCase();
        var newNumbers;
        switch (answeer){
            case 'y':
                newNumbers = prompt('New numbers', '<1, 2, 3, 4...>');
                var newNumConverted = stringToNumbers(newNumbers);
                validarNum(newNumConverted);
                result = result.concat(operations(newNumConverted));
                console.log(result);
                break;
            case 'n':
                console.log('Bye!');
                break;
            default:
                console.log('Indique: y/n');
                break;
                
        }      
    }while (answeer !== 'n');
}

// Funcion para comprobar si los valores introducidos son numeros o no.
function validarNum (arguments) {
    for (i in arguments) {
        if (isNaN(arguments[i])) {
            throw 'Uno de los valores introducidos no es un número';
        }
    }
}

// funcion que realiza las operaciones.
function operations (arguments) {

    /* con if y else separamos si viene un argumento o más de uno
    Si viene un solo argumento realizaremos la raiz cuadrada
    Si vienen más de uno realizaremos las operaciones convencionales*/
    if (!isNaN(arguments[0]) && arguments[1] == undefined) {
        function raizCuadrada (arguments){
        var acc = arguments[0];
        acc = Math.sqrt(acc);
        acc = redondeo(acc);
        return acc;
        }

        // Introduce los resultados en el array:
        var result = [];
        result.push(raizCuadrada(arguments));
        return result;

    } else {
    // funciones matematicas si hay más de un elemento realizando for...in por cada elemento de entrada.
        function sum(arguments) {
            var argumentsSum = Array.from(arguments);
            var acc = argumentsSum.shift();
            for (num in argumentsSum) {
            acc += argumentsSum[num];     }
            acc = redondeo(acc);
            return acc; }

        function subs(arguments) {
            var argumentsSubs = Array.from(arguments);
            var acc = argumentsSubs.shift();
            for (num in argumentsSubs) {
                acc -= argumentsSubs[num];     }
            acc = redondeo(acc);
            return acc; }

        function mult(arguments) {
            var argumentsMult = Array.from(arguments);
            var acc = argumentsMult.shift();
            for (num in argumentsMult) {
                acc *= argumentsMult[num];     }
            acc = redondeo(acc);
            return acc; }

        function div(arguments) {
            var argumentsDiv = Array.from(arguments);
            var acc = argumentsDiv.shift();
            for (num in argumentsDiv) {
                acc /= argumentsDiv[num];     }
            acc = redondeo(acc);
            return acc; }
            
        // Introduce los resultados en el array:
        var result = [];
        result.push(sum(arguments), subs(arguments), mult(arguments), div(arguments));
        return result;
    }
}

// redondea el resultado a un máximod de 3 decimales.
function redondeo(resultado){
    var resultado = resultado.toString();
    // Comprobar si hay decimales o no;
    if (resultado.indexOf('.') >= 0) {
        for (var i = (resultado.indexOf('.')+3); resultado.indexOf('.') <= i ; i--){
            if (resultado.substring((resultado.indexOf('.')+1),(resultado.indexOf('.')+4)) == '000') {
                //si hay decimales pero los tres primeros son 000 devolveremos un numero entero;
                resultado = resultado.substring(0, resultado.charAt('.')+1);
                break;
            } else if(resultado.charAt(i) == '0' ) {
                // quitamos los decimales que no contengan valor numerico;
                resultado= resultado.substring(0, (i));
            } else {
                // en caso de que tenga resultado con valor numerico nos devolverá el numero con decimales;
                resultado = resultado.substring(0, i+1);
                break;
            }
        }
    }
    return resultado
}

// Convierte los nuevos valores introducidos por el usuario de strings a numbers:
function stringToNumbers (newNumbers){
    var stringToArray = newNumbers.split(',');
    var arrayOfNumbers = [];
    for (var i in stringToArray) {
        var numberConverted = parseInt(stringToArray[i]);
        arrayOfNumbers.push(numberConverted);
    }
    return arrayOfNumbers;
}