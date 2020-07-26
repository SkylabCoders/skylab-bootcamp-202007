function Bowl() {
	this.mapCallback = function (x) {
		return x + 2;
	};
	this.map = function (arr, callback) {
		let mapArray = [];
		for (let i = 0; i < arr.length; i++) {
			mapArray.push(callback(arr[i]));
		}
		return mapArray;
	};

	this.filterCallback = function (x) {
		if (x > 5) {
			return x;
		} else {
			return;
		}
	};

	this.filter = function (arr, callback) {
		let filterArray = [];

		for (let el of arr) {
			let flag = callback(el);
			if (flag) {
				filterArray.push(callback(el));
			}
		}
		return filterArray;
	};

	this.findCallback = function (x) {
		if (x < 5) {
			return x;
		}
	};

	this.find = function (arr, callback) {
		let result;
		for (let el of arr) {
			if (callback(el)) {
				return el;
			}
		}
	};

	this.findIndexCallback = function (x) {
		if (x > 5) {
			return x;
		}
	};
	this.findIndex = function (arr, callback) {
		for (let i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				return i;
			}
		}
	};

	this.fill = function (arr, val, sindex = 0, eindex = arr.length) {
		for (let i = sindex; i <= eindex; i++) {
			arr[i] = val;
		}
		return arr;
	};

	this.copyWithIn = function (arr, target, start = 0, end = arr.length) {
		let tar;
		for (let i = 0; i < arr.length; i++) {
			if (target === arr[i]) {
				tar = arr[i];
			}
		}
		for (let i = start; i <= end; i++) {
			arr[i] = tar;
		}
		return 'hola';
	};
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myBowl = new Bowl();

//MAP

//console.log("Map Method:" myBowl.map(myArray, myBowl.mapCallback)); // [2, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//FILTER
//console.log('Filter Method:' + myBowl.filter(myArray, myBowl.filterCallback)); // [6,7,8,9,10]
//FIND
//console.log('Find method: ' + myBowl.find(myArray, myBowl.findCallback)); //[1]
//FINDINDEX
//console.log('FindIndex Method: ' + myBowl.findIndex(myArray, myBowl.findIndexCallback));
//FILL
//console.log("Fill Method: " + myBowl.fill(myArray, 1, 3, 5)); // [1, 2, 3, 1, 1, 1, 7, 8, 9, 10]
console.log('Copy Within Method: ' + myBowl.copyWithIn(myArray, 2, 6));
