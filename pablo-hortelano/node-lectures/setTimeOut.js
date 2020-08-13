/* const customNumber = 1;

const callback = (seconds) => {
	console.log('Hello after ' + customNumber + 'second');
};

setTimeout(callback, customNumber * 1000);
 */

/* const seconds = 4;

const aVerEsaFunc = (secs) => {
	console.log(`Hello after ${secs} seconds`);
};

for (let i = 1; i <= 2; i++) {
	setTimeout(aVerEsaFunc, seconds * i, seconds * i);
}
 */
/*
  Print "Hello World" forever.
  
const seconds = 4;
const cont = 0;

const timer = (cont) => {
	console.log(`Hello world  ${cont}`);
};

const time = (i) => {
	return i * 1000;
};

for (let i = 0; i < Infinity; i++) {
	if (i === 500) {
		break;
	}
	const interval = setTimeout(timer, time(i), cont + i);
}

/*Print with delay

*/

/*
  Print "Hello World" forever but with delay
  
*/

let cont = 0;

let timer = (time, cont) => {
	debugger;
	if (cont === 5) {
		clearInterval(interval);
	}
	console.log(`Hello world  ${time * 100}`);
	cont++;
};

let time = (i) => {
	return i * 100;
};

for (let i = 1; i < Infinity; i++) {
	const interval = setInterval(timer, time(i), i, 0);
}
