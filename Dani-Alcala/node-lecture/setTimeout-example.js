// const customNumber = 1;

// const callback = (seconds) => {
// 	console.log(
// 		`Hello after ${seconds} seconds Hello after ${seconds * 2} seconds`
// 	);
// };

// setTimeout(callback, customNumber * 1000, customNumber); 

// const seconds = 4;

// const callback = (secs) => {
// 	console.log(`Hello after ${secs} seconds`);
// };

// for (let counter = 1; counter < 3; counter++) {
// 	setTimeout(callback, seconds * 1000 * counter, seconds * counter);//el segundo customNumber es el argumento del callback (y el primero es el delay)
// }

let counter = 0;
const callback = () => {
	console.log('Hello World');
	if (counter === 5) {
		console.log('done');
		clearInterval(interval);
	}
	counter++;
};
const interval = setInterval(callback, 1000);

//recursividad:
// Print "Hello World" forever. Starting with a delay of 1 second
//   but then incrementing the delay by 1 second each time.
//   The second time will have a delay of 2 seconds
//   The third time will have a delay of 3 seconds.
//   Include the delay in the printed message
//   Hello World. 1
//   Hello World. 2
//   Hello World. 3
//   ...
//   Constraints: You can only use const (no let or var)

// const greeting = (delay) => {
// 	setTimeout(() => {
// 		console.log('Hello World. ' + delay)
// 		greeting(delay + 1)
// 	}, delay * 1000)
// }

// greeting(1)

//setInterval es más dificil para llamarse a sí mismo

// Just like Challenge 1 but this time with repeated delay values.
//   Print Hello World 5 times with a delay of 100 ms.
//   Then Print it again 5 more times with a delay of 200 ms.
//   Then print it again 5 more times with a delay of 300 ms.
//   And so on until the program is killed.
//   Include the delay in the printed message:
//   Hello World. 100
//   Hello World. 100
//   Hello World. 100
//   Hello World. 100
//   Hello World. 100
//   Hello World. 200
//   Hello World. 200
//   Hello World. 200
//   ...
//   Constraints:
//    - Only use setInterval (not setTimeout)
//    - Use only ONE if statement

// let counter = 5;
// let interval;
// const greeting = (delay) => {
// 	if (counter === 5) {
// 		clearInterval(interval);
// 		interval = setInterval(() => {
// 			console.log('Hello World. ' + delay);
// 			greeting(delay + 100);
// 		}, delay);
// 		counter = 0;
// 	}

// 	counter += 1;
// };

// greeting(100);

