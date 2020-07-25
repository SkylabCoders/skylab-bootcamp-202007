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
		}
	};

	this.filter = function (arr, callback) {
		let filterArray = [];
		for (let el of arr) {
			//filterArray = [...callback(el)];
			filterArray.push(callback(el));
		}
		return filterArray;
	};
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myBowl = new Bowl();

//MAP
//console.log("Map Method:" myBowl.map(myArray, myBowl.mapCallback)); // [2, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log('Filter Method:' + myBowl.filter(myArray, myBowl.filterCallback));
