// process.stdin.on('readeable', () => {
//     const chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(chunk);

//     }
// });

//========

// process.stdin.pipe(process.stdout);

//============


const number = 5;
process.stdin.pipe(process.stdout);

setTimeout(() => process.exit(), 7000);

process.on('exit', () => {
    console.log('Process will exit now. See you later!')
})

console.log(`Tienes ${number} para hablar`)