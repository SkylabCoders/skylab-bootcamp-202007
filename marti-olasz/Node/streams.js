/*process.stdin.on('readable', () => {
	const chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write(chunk);
	}
});*/

process.stdin.pipe(process.stdout);

setTimeout(() => process.exit(), 15000);
process.on('exit', () => {
	console.log('Dew bro');
});

console.log('KLK hermano');
