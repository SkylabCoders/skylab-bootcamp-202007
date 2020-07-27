"use strict";

/*
As a skylaber,
I want to make a new object that replicates some array object methods
So that ...

MAP
Given an array and a callback
When the map function is called
Then
*/

const bowl = {
  map: function map(array, callback) {
    const newArray = [];
    for (let i in array) {
      newArray[i] = callback(array[i]);
    }
    return newArray;
  },

  filter: function filter(array, callback) {
    const newArray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        newArray[j] = array[i];
        j++;
      }
    }
    return newArray;
  },

  find: function (array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i];
      }
    }
  },

  findIndex: function (array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return i;
      }
    }
  },

  fill: function (array, callback) {
    debugger
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === undefined) {
        newArray[i] = callback();
      }
      else {
        newArray[i] = array[i];
      }
    }
    return newArray;
  }

}

console.log('map:', bowl.map([1, 2, 'string', 4, 5], function (num) {
  return num * 5;
})
);

console.log('filter:', bowl.filter([1, 3, 5, 10, 55], function (num) {
  return num > 7;
})
);

console.log('filter:', bowl.filter(['this is a string', 2, 3, 'this is a string too', 5], function (value) {
  if (typeof (value) === 'string') {
    return value;
  }
})
);

console.log('find:', bowl.find([10, 20, 30, 40, 50], function (num) {
  return num < 15;
})
);

console.log('find:', bowl.find(['this is a string', 'this is a string too', 3, 4, 5], function (value) {
  if (typeof (value) === 'string') {
    return value;
  }
})
);

console.log('findIndex:', bowl.findIndex([1, 2, 7, 4, 5], function (num) {
  if (num === 7) {
    return num;
  }
})
);

console.log('fill:', bowl.fill([1, , 3, , ,], function () {
  return 5;
})
);
