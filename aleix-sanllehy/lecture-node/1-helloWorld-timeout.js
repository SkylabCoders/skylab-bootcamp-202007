//----------------------------------------------------------------------------
// Call Hello World after 4 and 8 seconds. No invervals
//----------------------------------------------------------------------------
const seconds = 4;
const callback = (secs) => {
	console.log(`Hello after ${secs} seconds!`);
};

setTimeout(callback, seconds * 1000, seconds * 1);
setTimeout(callback, seconds * 2000, seconds * 2);
