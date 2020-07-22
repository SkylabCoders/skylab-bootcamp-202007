"use strict"


const operation = {increment: 'increment',decrement:'decrement'};

    //inner function decrement
    const incrementFn = function (number) {
        return number+1;
    }

    //inner function decrement
    const decrementFn = function (number) {
        return number-1;
    }

    // main callback function
    const fnUpAndDown = function (number, callback){
        


        return callback(number);
    }


    const myFunction = fnUpAndDown(8,incrementFn);

    myFunction;