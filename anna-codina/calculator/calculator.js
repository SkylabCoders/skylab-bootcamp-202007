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
    if (actualOperator === '' && numberValor === '.') {
        actualOperator = '0';
    }
    actualOperator += numberValor;
    document.getElementById("result").innerHTML = actualOperator;
}

function setActualSymbol(symbolButtonValor) {

    if (actualOperator.indexOf(".") === (actualOperator.length - 1)) {
        actualOperator += '0'
    }
    if (!firstOperator) {
        firstOperator = actualOperator;
        actualOperator = '';
        firstOperator = parseFloat(firstOperator);
        firstOperator = calculator.operation(0, firstOperator, actualOperationType) || 0;
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