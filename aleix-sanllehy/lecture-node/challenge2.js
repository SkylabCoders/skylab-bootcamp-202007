/* 
Challenge 2:  Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement
*/

let counter = 0;
let delay = 100;

const callback = (counter, delay) => {
	debugger;
	setInterval(() => {
		if (counter < 5) {
			console.log(`Hello World. ${delay}`);
			counter++;
			callback(counter, delay);
		} else {
			counter = 0;
			delay += 100;
			callback(counter, delay);
			clearInterval(interval);
		}
	}, delay);
};

const interval = setInterval(callback(counter, delay));

// Gilberto
let counter = 5;
let interval;
const greeting = (delay) => {
	debugger;
	if (counter === 5) {
		clearInterval(interval);
		interval = setInterval(() => {
			console.log('Hello World. ' + delay);
			greeting(delay + 100);
		}, delay);
		counter = 0;
	}
	counter += 1;
};
greeting(100);
