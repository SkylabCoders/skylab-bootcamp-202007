// Function definition
function Bowl() {
	this.items = [1, 2, 3, 4, 5];
	this.map = function (callback) {
		const newArray = [];
		for (let i = 0; i < this.items.length; i++) {
			newArray[i] = callback(this.items[i]);
		}
		return newArray;
	};

	this.forEach = function (callback) {
		for (let i = 0; i < this.items.length; i++) {
			return callback(this.items[i]);
		}
	};

	this.filter = function (callback) {
		const newArray = [];
		for (let i = 0; i < this.items.length; i++) {
			if (callback(this.items[i])) {
				newArray.push(this.items[i]);
			}
		}
		return newArray;
	};

	this.find = function (callback) {
		let result = null;
		for (let i = 0; i < this.items.length; i++) {
			if (callback(this.items[i])) {
				result = this.items[i];
			}
		}
		return result;
	};

	this.findIndex = function (callback) {
		for (let i = 0; i < this.items.length; i++) {
			if (callback(this.items[i])) {
				return i;
			}
		}
		return -1;
	};

	this.fill = function (value, start, end) {
		if (!start) start = 0;
		if (!end) end = this.items.length;
		for (let i = start; i < end; i++) {
			this.items[i] = value;
		}
		return this.items;
	};

	this.copyWithin = function (value, start, end) {
		if (!start) start = 0;
		if (!end) end = this.items.length;
		for (let i = start; i < end; i++) {}
		return this.items;
	};
}

const myBowl = new Bowl();

myBowl.map(function (value) {
	return value * 2;
});

myBowl.forEach(function (value) {
	return value + 2;
});

myBowl.filter(function (value) {
	return value > 2;
});

myBowl.find(function (value) {
	return value < 5;
});

myBowl.findIndex(function (value) {
	return value === 2;
});

let filledWithGael = myBowl.fill('Gael', 2);

console.log(filledWithGael);
