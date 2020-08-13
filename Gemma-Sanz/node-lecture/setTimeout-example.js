/* const seconds = 1;

const callback = () => {
    if (seconds <= 5) {
        console.log(`Hello World!`);
        seconds++
    } else {
        console.log("Done!")
    }
};
if (seconds < 1) {
    const myInterval = setInterval(callback, 1000);
    clearInterval(myInterval)
    seconds++
} else {
} */

let counter = 0;
const interval = setInterval(() => {
	console.log('Hello World!');
	if (counter === 4) {
		console.log('Done!');
		clearInterval(interval);
	}
	counter++;
}, 1000);

/* Print 4s i 8s
const callback = (secs) => {
    console.log(`Hello after ${secs} seconds!`);
};
for (let counter = 1; counter < 3; counter++) {
    setTimeout(callback, seconds * 1000 * counter, seconds * counter);
}
 */
/* Tip:
 setTimeout(callback, seconds * 1000 * 1, seconds * 1)
setTimeout(callback, seconds * 1000 * 2, seconds * 2) */
//setTimeout recibe una callback y esta le pasa como argumentos un delay y opcionalmente otros argumentos
