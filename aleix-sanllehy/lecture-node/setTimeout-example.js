const customNumber = 4000;
setTimeout(() => {
	console.log(`Hello after ${customNumber} seconds!`);
}, customNumber);

const callback = (seconds) => {
	console.log(`Hello after ${customNumber / 1000} seconds!`);
};
