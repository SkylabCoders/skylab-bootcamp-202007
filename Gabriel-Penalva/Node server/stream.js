// process.stdin.on('redable', () => {
//     const chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(chunk);
//     }
// });
const number = 6;
process.stdin.pipe(process.stdout);

setTimeout(() => process.exit(), 1000 * number)
process.on('exit', () => {
    console.log('Me aburres bye');
});

console.log('Tienes ' + number + ' segundos para responder')