// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
	let acumulator = [];
	let number;
	for (let i = 0; i < array.length; i++) {
		number = `${i + 1}: ${array[i]}`;
		acumulator.push(number);
	}
	return acumulator;
};

/*   var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  } */
