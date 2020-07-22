'use strict';

function calculator() {
    const increment = function(num) {
        return num + 1;
    }
    const decrement = function(num) {
        return num - 1;
    }
    return {increment, decrement}; 
}
const calc = calculator();

console.log('The increment result is: ' + calc.increment(2));
console.log('The decrement result is: ' + calc.decrement(2));

//scenario #3

function calculator(num, operation) {
    let result = null;
    const increment = () => {
        return 'the increment is: ' + (num + 1);
    }
    const decrement = () => {
        return 'the decrement is: ' + (num - 1);
    }
    if (operation === 'increment') {
        result = increment();
    } else if (operation === 'decrement') {
        result = decrement();
    } else {
        console.log('error');
    }
    return result;
}
const calc = calculator(2, 'increment');
console.log(calc);

console.log()