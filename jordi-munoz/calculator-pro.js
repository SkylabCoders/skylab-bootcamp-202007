function calculator(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof(args[i]) != 'number') {
            return 'Error, dato no válido'
        } 
    }
    if (args.length === 1) {
        return 'Raiz cuadrada = ' + (Math.sqrt(args[0]).toFixed(3));
    } else {

        var outResults = [];
        var resultSuma = suma(args); 
        resultSuma = +resultSuma.toFixed(3);
    
        outResults.push(resultSuma);

        var resultResta = resta(args);
        resultResta = +resultResta.toFixed(3);

        outResults.push(resultResta);

        var resultMulti = multi(args);
        resultMulti = +resultMulti.toFixed(3);

        outResults.push(resultMulti);

        var resultDiv = div(args);
        resultDiv = +resultDiv.toFixed(3);

        outResults.push(resultDiv);

        return outResults;  
    }
}


function suma(numbers) {
    var acc = 0;
    for (let i = 0; i < numbers.length; i++) {
        acc = acc + numbers[i];
    }
    return acc;
}

function resta(numbers) {
    var acc = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        acc = acc - numbers[i];
    }
    return acc;
}

function multi(numbers) {
    var acc = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        acc = acc * numbers[i];
    }
    return acc;
}

function div(numbers) {
    var acc = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        acc = acc / numbers[i];
    }
    return acc;
}

var result = calculator(5, 2, 1);
console.log(result);

var seguir = prompt('Quiere realizar otra operación? Escriba "si" o "no"')
if (seguir === 'si') {
    var result2 = calculator(8, 9, 3);
    var total = result.concat(result2);
    console.log(total);
} else {
    console.log('Adiós!');
}
