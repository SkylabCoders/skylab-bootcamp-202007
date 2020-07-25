'use strict';
function bowl() {
	this.length = 0;
	this.items = [];

	this.push = function (element) {
		this.items[this.length] = element;
		this.length++;
	};

	this.forEach = function (func) {
		for (let i = 0; i < this.length; i++) {
			func(this.items[i]);
		}
	};

	this.map = function (func) {
		let result = [];
		for (let i = 0; i < this.length; i++) {
			result[i] = func(this.items[i]);
		}
		return result;
	};

	this.filter = function (func) {
		let result = [];
		let j = 0;
		for (let i = 0; i < this.length; i++) {
			if (func(this.items[i])) {
				result[j] = this.items[i];
				j++;
			}
		}
		return result;
	};

	this.find = function (func) {
		for (let i = 0; i < this.length; i++) {
			if (func(this.items[i])) {
				return this.items[i];
			}
		}
		return undefined;
	};

	this.findIndex = function (func) {
		for (let i = 0; i < this.length; i++) {
			if (func(this.items[i])) {
				return i;
			}
		}
		return undefined;
	};

	this.fill = function (element, fIndex, lIndex) {
		let firstIndex = null;
		if (fIndex === undefined) {
			firstIndex = 0;
		} else {
			firstIndex = fIndex;
		}
		let lastIndex = null;
		if (lIndex === undefined) {
			lastIndex = this.length - 1;
		} else {
			lastIndex = lIndex;
		}
		let result = [];
		for (let i = 0; i < this.length; i++) {
			result[i] = this.items[i];
			if (i >= firstIndex && i <= lastIndex) {
				result[i] = element;
			}
		}
		this.items = result;
		return result;
	};

	this.copyWithin = function (sIndex, fIndex, lIndex) {
		let startIndex = sIndex,
			firstIndex = fIndex,
			lastIndex = lIndex;
		if (fIndex === undefined) {
			firstIndex = 0;
		}
		if (lIndex === undefined) {
			lastIndex = this.length;
		}
		const copyArray = [];
		for (let i = firstIndex; i < lastIndex; i++) {
			copyArray[i - firstIndex] = this.items[i];
		}
		let result = [],
			j = 0;
		for (let i = 0; i < this.length; i++) {
			result[i] = this.items[i];
			if (i >= firstIndex && i <= lastIndex) {
				result[i] = copyArray[j];
				j++;
			}
			if (j === copyArray.length - 1) {
				j = 0;
			}
		}
		this.items = result;
		return result;
	};

	this.some = function (func) {
		for (let i = 0; i < this.length; i++) {
			if (func(this.items[i])) {
				return true;
			}
		}
		return false;
	};

	this.every = function (func) {
		for (let i = 0; i < this.length; i++) {
			if (!func(this.items[i])) {
				return false;
			}
		}
		return true;
	};

	this.reduce = function (func) {
		let result = this.items[0];
		for (let i = 1; i < this.length; i++) {
			result = func(result, this.items[i]);
		}
		return result;
	};
}

const calc = new bowl();
calc.push(1);
calc.push(2);
calc.push(4);
calc.push(8);

calc.forEach(function (num) {
	console.log('forEach', num);
});

console.log(
	'map',
	calc.map(function (num) {
		return num * 2;
	})
);

console.log(
	'filter',
	calc.filter(function (num) {
		return num % 4 === 0;
	})
);

console.log(
	'find',
	calc.find(function (num) {
		return num === 4;
	})
);

console.log(
	'findIndex',
	calc.findIndex(function (num) {
		return num === 2;
	})
);

console.log('fill', calc.fill(3, 1, 3));

console.log('copyWithin', calc.copyWithin((1, 2, 3)));

console.log(
	'some',
	calc.some(function (num) {
		return num === 3;
	})
);

console.log(
	'every',
	calc.every(function (num) {
		return num % 2 === 0;
	})
);

console.log(
	'reduce',
	calc.reduce(function (acc, num) {
		return acc * num;
	})
);
