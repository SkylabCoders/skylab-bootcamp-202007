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
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];

let myBowl = new Bowl();

console.log(myBowl.map(myArray, myBowl.mapCallback));
