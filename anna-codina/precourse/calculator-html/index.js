"use strict";
var actualOperator = '';
var actualResult = document.getElementById("result");
var actualOperationSymbol;
var operatorOne;
var operatorTwo;

// this funcion will be used when we pulse result-button.
function showResult () {
    //this verification is in order to prevent show UNDEFINED to the user.
    if (actualOperator != '' && actualOperationSymbol) {
       operatorTwo = actualOperator;
       actualOperator = '';
       operatorTwo = parseInt(operatorTwo);
       operatorOne = operations(actualOperationSymbol, operatorOne, operatorTwo);
       document.getElementById("result").innerHTML = operatorOne;
    }
    actualOperationSymbol = null;
}

// this funcion will be used when we pulse some number-button.
function addValorToActualOperator (numberButtonValor){
    // this verification is for clean operators after use result button if we don't want contiue using the last result.
    if (actualOperationSymbol === null) {
        operatorOne = null;
        operatorTwo = null;
    }
    actualOperator += numberButtonValor;
    document.getElementById("result").innerHTML = actualOperator;
}

// this funcion will be used when we pulse some operation-button.
function setActualSymbol(symbolButtonValor){
    if (actualOperator==='' && !actualOperationSymbol && !operatorOne){
        return;
    }

    // frist we define operatorOne.
    if (!operatorOne) {
        operatorOne = actualOperator;
        actualOperator = '';
        operatorOne = parseInt(operatorOne);
    } else if (actualOperator != '') {
        //if operatorOne is defined we and actualOperator exist we execute the operation whith the last symbol. 
        //And keep the result in the OperatorOne. 
        operatorTwo = actualOperator;
        actualOperator = '';
        operatorTwo = parseInt(operatorTwo);
        operatorOne = operations(actualOperationSymbol, operatorOne, operatorTwo);
    }
    actualOperationSymbol = symbolButtonValor;
    document.getElementById("result").innerHTML = operatorOne;
}

// this funcion will be used when we pulse ac button.
function clearResult () {
    document.getElementById("result").innerHTML = 0;
    actualOperator = '';
    operatorOne = null;
    operatorTwo = null;
    actualOperationSymbol = null;
}
// this function is used when we pulse undo button. 
function undoLastStep() {
    actualOperator = '';
    document.getElementById("result").innerHTML = 0;
}

// this function will be used for all the operations in the calculator.
function operations (operationSymbol, operatorOne, operatorTwo) {
    var result = 0;
    switch (operationSymbol) {
        case "+":
            result = operatorOne + operatorTwo;
            break;
        case "-":
            result = operatorOne - operatorTwo;
            break;
        case "*":
            result = operatorOne * operatorTwo;
            break;
        case "/":
            result = operatorOne / operatorTwo;
            break;
    }
    return result;
}

