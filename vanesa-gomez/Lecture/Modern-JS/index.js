'use strict';

// function para multiplicar/sumar un valor * "x"
const mul = (numOne) => numOne * 2 
const sum = (numOne) => numOne + 4;

let arr2 = [1,3,5,7,9];

function bowl (arr, fn) {
    let copyArr = [];
    for (let i = 0; i < arr.length ; i++) {
        if (fn) {
            copyArr.push(fn(arr[i]))
        } else {
            copyArr.push(arr[i])
        }
    }
    return copyArr;
}

console.log(bowl(arr2, mul));

//function > 5
const biggerThanFive = (num) => num > 5 ? true : false;

function bowl2 (arr, fn) {
    let copyArr = [];
    for (let i = 0; i < arr.length ; i++) {
        if (fn) {
            const result = fn(arr[i]);
            if (result) {
                copyArr.push(arr[i]);
            }
        } else {
            copyArr.push(arr[i]);
        }
    }
    return copyArr;
}

//function devolver impares

console.log(bowl2(arr2, biggerThanFive));

//console.log(arr2.map((element) => element * 2));
