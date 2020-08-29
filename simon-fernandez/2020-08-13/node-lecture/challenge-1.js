/*
Challenge 1:
  Print "Hello World" forever. Starting with a delay of 1 second
  but then incrementing the delay by 1 second each time.
  The second time will have a delay of 2 seconds
  The third time will have a delay of 3 seconds.
  Include the delay in the printed message
  Hello World. 1
  Hello World. 2
  Hello World. 3
  ...
  Constraints: You can only use const (no let or var)

*/
let counter = 1;
const recurrencia = (delay) => {
	setTimeout(() => {
		console.log('Hello world ', delay);
		recurrencia(delay + 1);
	}, delay * 1000);
};

recurrencia(1);
