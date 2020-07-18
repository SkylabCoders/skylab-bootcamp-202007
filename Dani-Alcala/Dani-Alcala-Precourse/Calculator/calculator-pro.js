'use strict';
function calculatorpro(passedNumbers) {
    //puede hacerse también con reduce()
    var results = 0;

    for (var i = 0; i < passedNumbers.length; i++) {
        if (isNaN(passedNumbers[i])) {
            results = "Error, este programa sólo acepta números.";
            break;
        }
    }

    if (results === 0) {
        var sum = passedNumbers[0];
        var subs = passedNumbers[0];
        var prod = passedNumbers[0];
        var div = passedNumbers[0];
        var sqrRoot;

        if(passedNumbers.length === 1){
            sqrRoot = Math.round((Math.sqrt(passedNumbers[0])) * 1000) / 1000;
            results = ["ResultSquareRoot = " + " " + sqrRoot];
        } else {
            for (var j = 1; j < passedNumbers.length; j++) {
                sum = Math.round((sum + passedNumbers[j]) * 1000) / 1000;
                subs = Math.round((subs - passedNumbers[j]) * 1000) / 1000;
                prod = Math.round((prod * passedNumbers[j]) * 1000) / 1000;
                div = Math.round((div / passedNumbers[j]) * 1000) / 1000;
            }
            results = ["ResultSum = " + " " + sum, " " + "ResultSubstraction =" + " " + subs, " " + "ResultProduct =" + " " + prod, " " + "ResultDivision =" + " " + div];
        }
    }
    return results;

}

var question = prompt("¿Quiere hacer una operación?: s/n");

while (question == "s") {
    var rawNumbers = prompt("Introduzca los números separados por comas");
    var parsedNumbers = rawNumbers.split(',').map(function (number) { return parseInt(number) });
    var output = calculatorpro(parsedNumbers);

    window.alert(output);
    question = prompt("¿Quiere hacer otra operación?: s/n");
}

window.alert(`Bye!`);