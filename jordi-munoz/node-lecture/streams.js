/* process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('que tal?');
    }
}); */
const number = 5;
process.stdin.pipe(process.stdout);

setTimeout(() => process.exit(), number * 1000);

process.on('exit', () => {
    console.log('Me aburres.. adeu!');
})

console.log(`Tienes ${number} segundos para hablar...`);

