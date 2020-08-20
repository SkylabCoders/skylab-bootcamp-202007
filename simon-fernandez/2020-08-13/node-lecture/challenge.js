Array.prototype.groupBy = function (fn) {
	let returnObj = {};
	const arrReducer = (accumulator, currentValue) => {
		let result = fn(currentValue);
		let value = accumulator[result]
			? (accumulator[result] = [...accumulator[result], currentValue])
			: (accumulator[result] = [currentValue]);
		return {
			...accumulator,
			[result]: value
		};
	};
	returnObj = this.reduce(arrReducer, {});
	return returnObj;
};

const callback = function (val) {
	return val % 3;
};

const array = [1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy(callback);
