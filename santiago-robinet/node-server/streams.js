// process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     if(chunk !== null){
//         process.stdout.write('Hola ' + process.env.USERNAME);
//     }
// })

process.stdin.pipe(process.stdout);

setTimeout(() => process.exit(), 10000);
process.on('exit', () => {
    console.log('Process will exit now. See you later!!')
})

console.log('Hello')