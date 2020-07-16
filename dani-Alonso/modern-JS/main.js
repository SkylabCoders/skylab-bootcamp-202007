" use strict ";

//map
/*As a skylab student
I want to map an array and multiply by 2 all the numbers
so that I made a fucntion that iterates he array and other function that returns the array *2*/

const bowl = {
    map: function(array, fn) {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            result[i] = fn(array[i]);
        }
        return result;
    }
}


function fn(array) {
    return array * 2;

}

bowl.map([1, 2, 3], fn);

//filter

/*As a skylab student
I want to filter an array and return de pair numbers
so that I made a fucntion that iterates an array and other function that returns the pair*/

function fn(e) {
    //return true or false
    return e % 2 === 0;

}

function filterFunction(array, fn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result = [...result, array[i]];
        }
    }
    return result;
}
console.log(filterFunction([1, 2, 3, 4, 5, 6, 7, 8], fn));

//find

/*As a skylab student
I want to find the first number bigger than 6
so that I made a fucntion that iterates an array and other function that returns the number bigger than 6*/

function fn(e) {

    return e > 6;

}

function findFunction(array, fn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result = [...result, array[i]];
            return result;
        }

    }

}
console.log(findFunction([1, 2, 3, 4, 5, 6, 10, 8], fn));




function fnUpAndDown(a) {

    function increment() {
        return a + 1;
    }
    return increment();
}
console.log('the resut is ', fnUpAndDown(2))




function funUpAndDown() {

    function increment(value) {
        return value + 1;
    }

    function decrement(value) {
        return value - 1;
    }
    return { increment, decrement }
}
const myFunc = funUpAndDown();

console.log('hte result is ' + myFunc.increment(3));
console.log('hte result is ' + myFunc.decrement(3));



const operation = { increment: 'increment', decrement: 'decrement' };

function pAndDown(currentOperation) {
    const myPrivateLog = (value) => {
        console.log('RESULT', value);
    }

    function increment(value) {
        return value + 1;
    }

    function decrement(value) {
        return value - 1;
    }

    if (currentOperation === operation.increment) {
        return increment;
    } else if (currentOperation === operation.decrement) {
        return decrement;
    } else {
        myPrivateLog('Unknown operation');
    }
}
const myOperation = pAndDown(operation.increment);
if (typeof myOperation === 'function') {
    myOperation(2);

}



//callback

const myPrivateLog =(value)=> {
    console.log('result', value);
}

const increment =(value)=> {
    myPrivateLog(value+1);
}
const decrement =(value)=> {
    myPrivateLog(value-1);
}

function upAnDown(value, callback){
    callback(value);
}
upAnDown(5, increment);