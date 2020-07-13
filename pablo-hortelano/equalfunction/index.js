function strictEquals(a, b) {
    if((Object.is(a, 0) || Object.is(a, -0)) && (Object.is(b, 0) || Object.is(b, -0))) {
        return true
    } 
    else if(Object.is(NaN, b) && Object.is(a, NaN)) {
        return false
    }
    else{
        return Object.is(a,b)}
}

/*TESTS*/

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
console.log(test(CRASH)); //{result: true, tests: 529, failed: 0, successful: 529}