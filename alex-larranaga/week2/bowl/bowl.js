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

	this.callbackFunction = function (x) {
		if (x > 0) {
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

	this.find = function (arr, callback) {
		let result;
		for (let el of arr) {
			if (callback(el)) {
				return el;
			}
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
		return arr;
	};

	this.some = function (arr, callback) {
		for (let el of arr) {
			if (callback(el)) {
				return true;
			}
		}
		return false;
	};

	this.every = function (arr, callback) {
		debugger;
		let trueCounter = 0;
		for (let el of arr) {
			if (callback(el)) {
				trueCounter++;
			}
		}
		if (trueCounter === arr.length) {
			return true;
		} else {
			return false;
		}
	};

	this.reduce();
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
//COPY WITHIN
//console.log('Copy Within Method: ' + myBowl.copyWithIn(myArray, 2, 6)); [1,2,3,4,5,6,6,6,6,6,6,6]
//SOME
//console.log('Some Method: ' + myBowl.some(myArray, myBowl.callbackFunction)); // true
//EVERY
console.log('Every Method: ' + myBowl.every(myArray, myBowl.callbackFunction));
