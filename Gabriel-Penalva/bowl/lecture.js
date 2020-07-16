'use strict';
function incDec() {

    function showLog(value) {
        console.log('The result is:' + value);
    }
    let increment = function (d) {
        showLog(d + 1);
    }
    let decrement = function (value) {
        showLog(value - 1);
    }
    let upAndDown = function (f, value) {
        return f(value);
    }
    return { increment, decrement, upAndDown };
}
let operation = incDec();
console.log('increments:');
operation.increment(0);
operation.increment(1);
operation.increment(3);
operation.increment(10);

console.log('decrements:');
operation.decrement(2);
operation.decrement(3);
operation.decrement(5);
operation.decrement(12);

console.log('upsandowns:');
operation.upAndDown(operation.increment, 1);
operation.upAndDown(operation.increment, 20);
operation.upAndDown(operation.increment, 15);
operation.upAndDown(operation.increment, 4);
operation.upAndDown(operation.decrement, 1);
operation.upAndDown(operation.decrement, 13);
operation.upAndDown(operation.decrement, 4);
operation.upAndDown(operation.decrement, 7);

console.log("super Bonus!");
console.log(operation.upAndDown((function (x) { return x * 3; }), 10));
console.log(operation.upAndDown((x) => x * x, 5));


