'use strict';

const increment = (value) => {
    return value + 1;
};

const decrement = (value) => {
                                    return value - 1;
};

const printOperation = (value) => {
    console.log('Result: ' + value);
};

const operationEjec = (value, funct) => {
    printOperation(funct(value));
};

operationEjec(5, decrement);