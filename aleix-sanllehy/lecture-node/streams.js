//process.stdin.on('readable', () => {
//	const chunk = process.stdin.read();
//	if (chunk !== null) {
//		process.stdout.write('sup, ' + chunk + ' ?');
//	}
//});
const number = 6;
process.stdin.pipe(process.stdout);

setTimeout(() => process.exit(), number * 1000);

process.on('exit', () => {
	console.log('Me aburres... Adeu!');
});

console.log(`Tienes ${number} segundos para hablar...`);
