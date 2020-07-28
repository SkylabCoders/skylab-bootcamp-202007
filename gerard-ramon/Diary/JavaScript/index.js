'use strict';

/*
    As a skylaber
    I want to replicate some Array object methods
    So that I can improve my programming skills

    -- MAP --
    Given an array and a callback function
    When map function is called
    Then it should return a new array with the callback function applied to every element.

    -- FILTER --
    Given an array and a callback function
    When FILTER function is called
    Then it should return a new array only with the elements matching the callback function criteria.

    -- FIND --
    Given an array and a callback function
    When FIND function is called
    Then it should return the first element that matches the callback function criteria.

    -- FINDINDEX --
    Given an array and a callback function
    When FINDINDEX function is called
    Then it should return the index of the first element that matches the callback function criteria.

     -- FILL --
    Given an array, and a value, and an optional start and end position
    When FILL function is called
    Then it should fill the array with the given value from start to end position (0 and arr.lenght for default). 

*/

const Bowl = {
	map: function (arr, callback) {
		try {
			if (!this.checkArgumentsAreCorrect) {
				return arr;
			}

			let newArr = [];
			for (let i = 0; i < arr.length; i++) {
				newArr[i] = callback(arr[i]);
				newArr = [...newArr, callback(arr[i])];
			}

			return newArr;
		} catch (error) {
			console.log(error);
			return arr;
		}
	},

	filter: function (arr, callback) {
		try {
			if (!this.checkArgumentsAreCorrect) {
				return arr;
			}

			let newArr = [];
			for (let i = 0; i < arr.length; i++) {
				if (callback(arr[i])) {
					newArr = [...newArr, arr[i]];
				}
			}
			return newArr;
		} catch (error) {
			console.log(error);
			return arr;
		}
	},

	find: function (arr, callback) {
		try {
			if (!this.checkArgumentsAreCorrect) {
				return arr;
			}

			for (let i = 0; i < arr.length; i++) {
				if (callback(arr[i])) {
					return arr[i];
				}
			}

			return undefined;
		} catch (error) {
			console.log(error);
			return arr;
		}
	},

	findIndex: function (arr, callback) {
		if (!this.checkArgumentsAreCorrect) {
			return arr;
		}

		for (let i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				return i;
			}
		}

		return -1;
	},

	fill: function (arr, value, start, end) {
		if (arr === undefined || value === undefined) {
			console.log('Fill function must recieve an array and a value');
			return undefined;
		}

		if (start === undefined) {
			start = 0;
			end = arr.length;
		}

		if (end === undefined) {
			end = arr.length;
		}

		for (let i = start; i < end; i++) {
			arr[i] = value;
		}

		return arr;
	},

	checkArgumentsAreCorrect: function (arr, callback) {
		if (typeof callback !== 'function') {
			console.log('The callback argument must be a function');
			return false;
		}
		if (!Array.isArray(arr)) {
			console.log('arr argument must be an array');
			return false;
		}
		return true;
	}
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let outputArr = Bowl.findIndex(testArr, (element) => element > 4);

let outputArr = Bowl.fill(testArr, 9, 4, 8);
console.log(outputArr);
