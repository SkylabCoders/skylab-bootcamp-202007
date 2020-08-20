const baseNumber = 1;
let counter = 1;
const trigerNumber = 5;
const mulyiplierNumber = 1000;

const callback = (second) => {
	console.log(`${second * counter} Bombasto still rocks`);
	if (second * counter === trigerNumber) clearInterval(interval);
	counter++;
};

const interval = setInterval(
	callback,
	baseNumber * mulyiplierNumber,
	baseNumber
);
