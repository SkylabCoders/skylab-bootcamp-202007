let counter = 1;
const interval = setInterval(() => {
	console.log(`Hello World. ${counter}`);
	if (counter === 5) clearInterval(interval);
	counter++;
}, 1000);
