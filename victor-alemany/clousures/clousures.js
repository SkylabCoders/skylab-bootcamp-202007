'use strict';

const operation = {increment: 'increment',decrement:'decrement'};



//global function that includes increment and decrement a number 
function fnUpAndDown(currentOperation) {

   /* function result(value){ 
        return console.log("New value is :", value); 
    }*/

    //inner function decrement
    const incrementFn = function (number) {
        return number+1;
    }

    //inner function decrement
    const decrementFn = function (number) {
        return number-1;
    }

    let responseFunction = currentOperation;

    switch(responseFunction){


        case operation.increment:
            responseFunction = incrementFn;
            break;

        case operation.decrement:
            responseFunction = decrementFn;
            break;
        
        default: 
            alert("Unknow operation");
            break;
        
    }

    return responseFunction;
}

const myOperation = fnUpAndDown(operation.decrement);

myOperation(1);
myOperation.result();





