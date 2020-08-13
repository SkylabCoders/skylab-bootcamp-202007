function secondAugment(time) {
	console.log('Hello World! ' + time);
	setTimeout(secondAugment, time, time + 1000);
}
//secondAugment(1000);

function callback(time) {
	clearInterval(interval);
	for (let i = 0; i < 5; i++) {
		console.log('Hello world! ' + time);
	}
	interval = setInterval(callback, time, time + 1000);
}
let interval = null;
//callback(1000);
