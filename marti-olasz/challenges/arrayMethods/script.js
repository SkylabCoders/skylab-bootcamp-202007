const bowl = {
  map: function () {

  },
  filter: function () {

  },
  find: function (array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return element;
      }
    }
    return undefined;
  },
};

bowl.find([1, 2, 3, 4, 5], 3);
