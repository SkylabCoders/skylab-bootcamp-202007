const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function MyBowl() {
	this.mapCallback = function (x) {
		return x + 2;
	};

	this.filterCallback = function (x) {
		if (x > 8) {return x};
	};

	this.everyCallback = function (x) {
		if (x > 8) {
			return x;
		}
	};

	this.findCallback = function (x) {
		if (x > 3) {
			return x;
		}
	};

	this.map = function (arr, callback) {
		let newArr = [];
		for (let element of arr) {
			newArr = [...newArr, callback(element)];
		}

		return newArr;
	};

	this.filter = function (arr, callback) {
        let newOne = [];
		for (let element of arr) {
            if(callback(element)){
                newOne  = [...newOne, callback(element)];
            }
		}

		return newOne;
	};

	this.find = function (arr, callback) {
		for (let el of arr) {
			if (callback(el) === el) {
				return el;
			}
		}
		return undefined;
	};

	this.findIndex = function (arr, callback) {
		for (let i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				return i;
			}
		}

		return -1;
	};

	this.fill = function (arr, value, startIndex = 0, endIndex = arr.length) {
		for (let i = startIndex; i <= endIndex; i++) {
			arr[i] = value;
		}

		return arr;
	};

	this.copyWithin = function (
		arr,
		indexToReplace,
		startIndex = 0,
		endIndex = arr.length
	) {
		for (let i = 0; i < arr.length; i++) {
			arr[indexToReplace] = arr[startIndex];
			if (startIndex < endIndex) {
				indexToReplace++;
				startIndex++;
			}
		}

		return arr;
	};

	this.some = function (arr, callback) {
		for (let element of arr) {
			if (callback(element)) {
				return true;
			}
		}

		return false;
	};

	this.every = function (arr, callback) {
		let everycounter = 0;
		for (let element of arr) {
			if (callback(element)) {
				everycounter++;
			}
		}
		if (everycounter === arr.length) {
			return true;
		} else {
			return false;
		}
    };
    
}

const myBowl = new MyBowl();
myBowl.filter(items, myBowl.filterCallback);
