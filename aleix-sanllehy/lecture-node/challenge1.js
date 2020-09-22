/*
Challenge 1:  Print "Hello World" forever. Starting with a delay of 1 second
  but then incrementing the delay by 1 second each time.
  The second time will have a delay of 2 seconds
  The third time will have a delay of 3 seconds.  Include the delay in the printed message
  Hello World. 1
  Hello World. 2
  Hello World. 3
  ...  Constraints: You can only use const (no let or var)
*/

// own approach
const counter = 1;
const interval = 1000;

const callback = (counter, interval) => {
	setTimeout(() => {
		console.log(`Hello World. ${counter}`);
		counter++;
		interval += 1000;
		callback(counter, interval);
	}, interval);
};

callback(counter, interval);

// Gilberto
const greeting = (delay) => {
	setTimeout(() => {
		console.log('Hello World. ' + delay);
		greeting(delay + 1);
	}, delay * 1000);
};

greeting(1);

function binRota(arr) {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			for (let j = 0; j < arr[i].length; j++) {
				newArray[i][j] = arr[i][j];
			}
		} else {
			for (j = arr[i].length; j > 0; j--) {
				newArray[i][j] = arr[i][j];
			}
		}
	}
	return newArray;
}
