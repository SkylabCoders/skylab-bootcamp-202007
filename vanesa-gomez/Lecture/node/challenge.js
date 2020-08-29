const { constants } = require('fs');

console.log(Math.pow(1, 1));
setTimeout(function () {
	console.log(2);
}, 0);
console.log(3);
var interval = setInterval(function () {
	console.log(4);
	setTimeout(function () {
		console.log(5);
	}, 500);
}, 1000);
setTimeout(function () {
	clearInterval(interval);
	console.log(6);
}, 1100);
console.log(7);

//---------------------

/*
 "abcde"
 "aabbcde"
 "aAbBcde"
 "invisibility"
 */

const characters = 'ABBA'.toLowerCase().split('');

const charReducer = (accumulator, currentLetter) => {
	const value = accumulator[currentLetter] ? ++accumulator[currentLetter] : 1;
	return {
		...accumulator,
		[currentLetter]: value
	};
};

const response = characters.reduce(charReducer, {});
console.log(response);

//-----------------

/*Print "Hello World" forever. Starting with a delay of 1 second
  but then incrementing the delay by 1 second each time.
  The second time will have a delay of 2 seconds
  The third time will have a delay of 3 seconds.
  Include the delay in the printed message
  Hello World. 1
  Hello World. 2
  Hello World. 3
  ...
  Constraints: You can only use const (no let or var) */

const greeting = (delay) => {
	setTimeout(() => {
		console.log(`Hello World! ` + delay);
		greeting(delay + 1);
	}, delay * 1000);
};

greeting(1);

//-----------------

/* Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.
  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...
  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement */

let counter = 5;
let interval;
const greeting = (delay) => {
	if (counter === 5) {
		clearInterval(interval);
		interval = setInterval(() => {
			console.log(`Hello World! ` + delay);
			greeting(delay + 100);
		}, delay);
		counter = 0;
	}
	counter += 1;
};
greeting(100);
