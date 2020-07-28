'use strict';

function Bowl() {
	this.items = [1, 2, 3, 4, 5, 6, 7];

	this.checkArgumentsAreCorrect = function (func) {
		let exec = true;
		if (typeof func !== 'function') {
			console.log('The callback argument must be a function');
			exec = false;
		}
		return exec;
	};

	this.map = function (callback) {
		try {
			if (!this.checkArgumentsAreCorrect) {
				return this.items;
			}

			let newArr = [];
			for (let i = 0; i < this.items.length; i++) {
				newArr = [...newArr, callback(this.items[i])];
			}

			return newArr;
		} catch (error) {
			console.log(error);
			return this.items;
		}
	};

	this.filter = function (callback) {
		try {
			if (!this.checkArgumentsAreCorrect) {
				return this.items;
			}

			let newArr = [];
			for (let i = 0; i < this.items.length; i++) {
				if (callback(this.items[i])) {
					newArr = [...newArr, this.items[i]];
				}
			}
			return newArr;
		} catch (error) {
			console.log(error);
			return this.items;
		}
	};

	this.findIndex = function (callback) {
		if (!this.checkArgumentsAreCorrect) {
			return this.filter;
		}

		for (let i = 0; i < this.filter.length; i++) {
			if (callback(this.filter[i])) {
				return i;
			}
		}

		return -1;
	};

	this.find = function (callback) {
		try {
			if (!this.checkArgumentsAreCorrect) {
				return this.items;
			}

			for (let i = 0; i < this.items.length; i++) {
				if (callback(this.items[i])) {
					return this.items[i];
				}
			}

			return undefined;
		} catch (error) {
			console.log(error);
			return this.items;
		}
	};

	this.fill = function (value, start, end) {
		if (this.items === undefined || value === undefined) {
			console.log('Fill function must recieve an array and a value');
			return undefined;
		}

		if (start === undefined) {
			start = 0;
			end = this.items.length;
		}

		if (end === undefined) {
			end = this.items.length;
		}

		for (let i = start; i < end; i++) {
			this.items[i] = value;
		}

		return this.items;
	};

	this.some = function (value) {
		let result = false;
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i] === value) {
				result = true;
			}
		}
		return result;
	};

	this.every = function (value) {
		let result = true;
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i] != value) {
				result = false;
			}
		}
		return result;
	};

	this.copyWithin = function (target, start, end) {
		if (start === undefined) {
			start = 0;
			end = this.items.length;
		}
		if (end === undefined) {
			end = this.items.length;
		}

		let arrCopy = [];
		for (let i = start; i < end; i++) {
			arrCopy.push(this.items[i]);
		}

		let count = 0;
		for (let i = target; i < arrCopy.length; i++) {
			this.items[i] = arrCopy[count];
			count++;
		}

		return this.items;
	};

	this.reduce = function (callback) {
		let acc = 0;
		for (let i = 0; i < this.items.length; i++) {
			acc = callback(this.items[i], acc);
		}

		this.items = acc;
		return this.items;
	};
}

const myBowl = new Bowl();

const testFunct = (acc, next) => {
	return acc - next;
};

console.log(myBowl.reduce(testFunct));
