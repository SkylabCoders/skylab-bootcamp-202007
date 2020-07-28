
// As a...  student
// I want... learn how the array methods work
// So that... I learn and become a pro



// Given... an array with any given arguments 
// and a function 

// When... I pass both arguments to the map function

// Then... I get a new array with the altered elements


function map(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = func(array[i]); 
  }
  return newArray;
}

map( [1,2,3], function (x) { return x = x * 2} );


// Given... an array with any given arguments 
// and a function 

// When... I pass both arguments to the filter function

// Then... I get an array with the elements that satisfy 
// the condition given in the function




function filter(array, func) {

  let newArray = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
     if (func(array[i]) === true) {
      newArray[count] = array[i];
      count++;
     }
  }
    return newArray;
}


filter(['john', 'ringo', 'paul', 'george'], function (element) { 
  for(let i = 0; i < element.length; i++) {
    if (element.length > 4) {
      return true;
    }
  }
});


// Given... an array with any given arguments 
// and a function 

// When... I pass both arguments to the find function

// Then... I get the first element that satisfies the condition
// given in the function




function find(array, func) {

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i]) === true) {
      return array[i];
    }
  }
  return undefined;
}

find([2, 4, 50, 6, 89, 120], function (element) { element > 600})


function findIndex(func) {
  let count = 0;
  for (let i = 0; i < this.items.length; i++) {
    if (func(array[i]) === true) {
      count++
      return count;
    }
  }
  return undefined;
}



function Bowl() {
  this.items = [];
  this.map = function map( func) {
    let newArray = [];
    for (let i = 0; i < this.items.length; i++) {
      newArray[i] = func(this.items[i]); 
    }
    return newArray;
  };
}

let myB = new Bowl();
console.log(myB);

