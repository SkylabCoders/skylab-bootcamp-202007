console.log(Math.pow(1, 1));
setTimeout(function () {
	console.log(2);
}, 0);
console.log(3);
var interval = setInterval(() => {
	console.log(4);
	setTimeout(() => {
		console.log(5);
	}, 500);
}, 1000);
setTimeout(() => {
	clearInterval(interval);
	console.log(6);
}, 1100);
console.log(7);
