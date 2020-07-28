/* Francesc Brugarolas - skylab bootcamp 202007 - challenge #6 */
"use strict";
function strictEquals(a, b){
    if (Number.isNaN(a) && Number.isNaN(b)) {return false;}
    if ( (Object.is(0, a) || Object.is(-0, a)) && (Object.is(0, b) || Object.is(-0, b)) ){ return true; }
    return Object.is(a, b);
}


const FACIL = [1, 'a', 0, -0, NaN, [1, 2], {}, false, true, undefined, null];
const CRASH = [0, -0, '', [], {}, false, true, 1, '1', '0', NaN, undefined, null, Infinity, -Infinity, 3, 'a', '3', [[]], [0], [{}], {someprop: 0}, function (){ return 0;}];

function test(testSet){
    let res = {
        result: undefined,
        tests: 0,
        failed: 0,
        successful: 0
    }
    for (let someel of testSet){
        for (let another of testSet){
            if ( (someel === another) === (strictEquals(someel, another))){
                res.successful++;
            } else {
                console.log(`%cTEST FAILED AT: ${someel} === ${another}`, 'color: red;');
                res.failed++;
            }
            res.tests++;
        }
    }
    if (res.result === undefined) {res.result = true;}
    if (res.failed !== 0) {res.result = false;}
    return res;
}

console.log(test(FACIL));
console.log(test(CRASH));