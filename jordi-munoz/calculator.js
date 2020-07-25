

function calculator(num1, num2) {
    if ((typeof(num1) !== 'number' && num1 != null) 
        || (typeof(num2) !== 'number' && num2 != null)) {
        console.log('Error, un valor introducido no es un número');
    } else if (num1 == null && num2 == null) {
        console.log('Error, no se ha introducido ningún número');
    } else if (num1 == null || num2 == null) {
        console.log((Math.sqrt(num1 || num2)).toFixed(3));
    } else {
        var outResults = [];
        var resultSuma = suma(num1, num2); 
        resultSuma = +resultSuma.toFixed(3);
    
        outResults.push(resultSuma);

        var resultResta = resta(num1, num2);
        resultResta = +resultResta.toFixed(3);

        outResults.push(resultResta);

        var resultMulti = multi(num1, num2);
        resultMulti = +resultMulti.toFixed(3);

        outResults.push(resultMulti);

        var resultDiv = div(num1, num2);
        resultDiv = +resultDiv.toFixed(3);

        outResults.push(resultDiv);

        console.log('suma = ' + outResults[0] + '; resta = ' + outResults[1] + '; multi = ' + outResults[2] + '; div = ' + outResults[3]);
 
    }
    
}


function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

calculator(5, 6);



