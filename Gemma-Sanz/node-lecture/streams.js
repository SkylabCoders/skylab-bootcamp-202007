/* //on espera a la escucha de readable
process.stdin.on('readable', () => {
    //chunk es el meensaje que escribimos
	const chunk = process.stdin.read();
	if (chunk !== null) {
        //si lo que escribimos en terminal no es vacio la terminal nos devuelve el string 'que tal?'
		process.stdout.write('que tal?');
	}
}); */

const number = 5;
//Aquí tenemos una comunicación constante sin que se cancele el proceso, lo tenemos que cancelar nosotros manualmente
process.stdin.pipe(process.stdout);

//Con proces.exit cancelamos el proceso que está abierto, lo hacemos con un setTimeout que llamará a process.exit en X tiempo
setTimeout(() => process.exit(), number * 1000);
//el on es asincrono, pero el callback del on si es asíncrono, por eso tenemos que ponerlo en un callback, sino se ejecutaria immediatamente. Pasaria lo mismo con el .exit, sin el callback se ejecutaria automaticamente y saldria justo al entrar immediatamenre
process.on('exit', () => {
	console.log('Process will exit now. See you later!');
});

console.log(`Tienes ${number} segundos para hablar...`);
