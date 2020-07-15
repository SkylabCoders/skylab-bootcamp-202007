const bowl = {
  map: function (array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = func(array[i]);
    }
    return result;
  },
  filter: function (array, func) {
    let result = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (func(array[i])) {
        result[j] = array[i];
        j++;
      }
    }
    return result;
  },
  find: function (array,func) {
    for (let i = 0; i < array.length; i++) {
      if (func(array[i])) {
        return array[i];
      }
    }
    return undefined;
  },
};

console.log(
  bowl.map([1, 2, 3, 4, 5], function (num) {
    return num * 2;
  })
);
console.log(
  bowl.filter([10, 20, 30, 40, 50], function (num) {
    return num > 25;
  })
);
console.log(
  bowl.find([10, 20, 30, 40, 50], function (num) {
    return num < 25;
  })
);
