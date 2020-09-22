//----------------------------------------------------------------------------
// Call Hello World 5 times with only intervals
//----------------------------------------------------------------------------
let counter = 0;
const callback = () => {
	console.log('Hello World!');
	if (counter === 4) {
		console.log('Done');
		clearInterval(interval);
	}
	counter++;
};

const interval = setInterval(callback, 1000);
