/* "use strict";

// As an AWESOME DEVELOPER
// I want to FAKE AND ALREADY EXISTING FUNCTIONALLITY IN JS
//So that I CAN WASTE MY TIME

//Scenarios:
//Given a function wich receives 2 arguments
//When I pass to it an array and a function
//Then it applies this function to every element present in the array

let Bowl = {

  
  var numArray = [2, 2];
  //function double(num){    //PREGUNTAR A GILBERTO
  //    return num * 2
  //}
  
  function fakeMap(arr, func) {
    var newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray[i] = func(arr[i]);
    }
    return console.log(newArray);
  }
  fakeMap(numArray, function dos(x) {
    return (x = x * 2);
  })
  
  var numArray = [2, 2];
let numArray = [2, 4, 6, 8];

function calcLenght(num) {
  if (num > 4) {
    return true;
  }
}

function fakeFilter(arr, func) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      newArray[count] = numArray[i];
      count++
    }
  }
  return console.log(newArray)
}

fakeFilter(numArray, calcLenght)

var numArray = [2, 4, 6, 8, 10];

function match(num) {
  if (num > 8) {
    return true;
  }
}

function fakeFind(arr, func) {
  for (let i = 0; arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr[i];
    }
  }
}



 