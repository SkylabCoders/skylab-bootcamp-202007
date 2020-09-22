/* process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('que tal?');
    }
}) */

const number = 5;

process.stdin.pipe(process.stdout); // event loophola


// Cancelar un evento
// process.exit();

//Podemos escribir pero a los 2seg se corta y cierra
setTimeout(() => process.exit(), number * 1000);
process.on('exit', () => {
    console.log('Me aburres! Adeu!')
});

console.log(`Tienes ${number} segundos para hablar...`);