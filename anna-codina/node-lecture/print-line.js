const customNumber = 1;

let counter = 1;
const callBack = (seconds) => {
	let newTime = customNumber * counter;
	console.log(`Hello World, has pased ${newTime}`);
	if (counter === 5) {
		console.log('done');
		clearInterval(interval);
	}
	++counter;
};

const interval = setInterval(callBack, customNumber * 1000, customNumber);
