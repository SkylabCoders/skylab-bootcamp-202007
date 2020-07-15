function map(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = func(array[i]); 
  }
  return newArray;
}

map( [1,2,3], function (x) { return x = x * 2} );



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



function find(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i]) === true) {
      return array[i];
    }

  }
}

find([2, 4, 50, 6, 89, 120], function (element) { element > 600})

