'use strict';
const calculator = new Calculator();
let actualOperator = '';
let actualResult = document.getElementById('result');
let actualOperationType = null;
let firstOperator = null;
let secondOperator = null;

function clearResult() {
    document.getElementById('result').innerHTML = 0;
    actualOperator = '';
    actualOperationType = null;
    firstOperator = null;
    secondOperator = null;
}
function undoLastStep() {
    actualOperator = '';
    document.getElementById('result').innerHTML = 0;
}

function addValorToOperator(numberValor) {
    if (actualOperationType === null) {
        firstOperator = null;
        secondOperator = null;
    }
    actualOperator += numberValor;
    document.getElementById("result").innerHTML = actualOperator;
}

function setActualSymbol(symbolButtonValor) {
    if (actualOperator === '' && !actualOperationType && !firstOperator) {
        return;
    }
    if (!firstOperator) {
        firstOperator = actualOperator;
        actualOperator = '';
        firstOperator = parseFloat(firstOperator);
    } else if (actualOperator != '') {
        secondOperator = actualOperator;
        actualOperator = '';
        secondOperator = parseFloat(secondOperator);
        firstOperator = calculator.operation(firstOperator, secondOperator, actualOperationType);
    }
    actualOperationType = symbolButtonValor;
    document.getElementById("result").innerHTML = firstOperator;
}

function showResult() {
    //this verification is in order to prevent show UNDEFINED to the user.
    if (actualOperator != '' && actualOperationType) {
        secondOperator = actualOperator;
        actualOperator = '';
        secondOperator = parseFloat(secondOperator);
        firstOperator = calculator.operation(firstOperator, secondOperator, actualOperationType);
        document.getElementById("result").innerHTML = firstOperator;
    }
    actualOperationType = null;
}