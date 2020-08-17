// process.stdin.on('readable', () => {
// 	const chunk = process.stdin.read();
// 	if (chunk !== null) {
// 		process.stdout.write('que tal?');
// 	}
// });

process.stdin.pipe(process.stdout);
setTimeout(() => process.exit(), 1000);

process.on('exit', () => {
	console.log('Process qillexit now. Seeyou later!');
});

console.log('Hello');
