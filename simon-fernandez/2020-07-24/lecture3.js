function outer() {}
function inner() {}

for (var i = 0; i < 5; i++) {}
setTimeout(
	(function outer(i) {
		return function inner() {
			console.log(i); // 0 1 2 3 4
		};
	})(i),
	3000
);
