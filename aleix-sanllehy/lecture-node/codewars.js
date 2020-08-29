//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
//Testing 1-2-3

var number = function (array) {
	const newArray = [];
	for (i = 0; i < array.length; i++) {
		newArray.push([i + 1] + ': ' + array[i]);
	}
	return newArray;
};

var number = function (array) {
	return array.map((element, index) => {
		return index + 1 + ': ' + element;
	});
};

//https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1
//The Lazy Startup Office
function binRota(arr) {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			for (let j = 0; j < arr[i].length; j++) {
				newArray.push(arr[i][j]);
			}
		} else {
			for (j = arr[i].length - 1; j >= 0; j--) {
				newArray.push(arr[i][j]);
			}
		}
	}
	return newArray;
}

//
//
function customFib(signature, indexes, n) {
	let append = 0;
	let newArray = [...signature];
	while (newArray.length <= n) {
		debugger;
		for (let i = 0; i < indexes.length; i++) {
			append += signature[indexes[i]];
		}
		append = 0;
		newArray.push(append);
	}
	console.log(newArray);
}

//customFib([1, 1], [0, 1], 2); //=== 2 //classical fibonacci!
//customFib([1, 1], [0, 1], 3); //=== 3 //classical fibonacci!
//customFib([1, 1], [0, 1], 4); //=== 5 //classical fibonacci!
//customFib([3, 5, 2], [0, 1, 2], 4); //=== 17 //similar to my Tribonacci
//customFib([7, 3, 4, 1], [1, 1], 6); //=== 2 //can you figure out how it worked ;)?
