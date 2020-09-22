//const fs = require('fs');
//console.log(process.env.HOME);
//importamos otra libreria de node que se llama path. Esta resuelve las rutas sin necesidad de escribir todas las rutas así
/* const path = require('path');

const files = ['myServer.js', 'myServerjipfjsd'];

//Iterar sobre el array y obtener la información del fichero
//Leer cada uno de loc ficheros del array files

files.forEach((file) => {
	try {
		const filePath = path.resolve(process.env.HOME, file);
		const data = fs.readFileSync(filePath, 'utf-8');
		console.log('File data is', data);
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('File not found!');
		} else {
			throw error;
		}
	}
}); */

//Si es una cosa o error que podemos controlar lo gestionamos, si no lo podemos controlar lo lanzamos. Si solo conocemos 'File not found!' gestionamos este y lanzamos los otros.
//Es bueno lanzar un error y que pete la aplicación en lugar que no lo haga

//Sin forzarlo tanto podemos escribirlo de la siguiente forma:

/* const data = fs.readFile(__filename, function callback(error, data) {
	fs.writeFile(__filename + '_copy', data, function callback2(error) {
		console.log('Hubo un error');
		//o ejecuta otra sync fn
		//CALLBACK HELL
	});
	//en un callback es una buena practica que el primer argumento sea el error y luego la data
	//este callback es asyncrono, se invoca en el momento en que la carga del fichero se complete. readFile es asincrono
}); */

//wrapper es una fn que recibe 5 argumentos (exports, module, require, __filname, __dirname)

const { readFile, writeFile } = require('fs').promises;

//const readFile = util.promisify(fs.readFile);

async function main() {
	const data = await readFile(__filename);
	await writeFile('newFile.js', data);
}

main();

//console.log(data);

console.log('Tests');

//promisify recube un callback que convierte en promesa una cosa
