// // // console.log(process.env.HOME)
// // const fs = require('fs'); //fs es file system
// // const path = require('path');

// // const files = ['a', 'myFile.txt'];

// // //queremos iterar sobre el array y obtener la info del fichero

// // files.forEach((file) => {
// // 	try {
// // 		const filePath = path.resolve(process.env.HOME, file);
// // 		const data = fs.readFileSync(filePath, 'utf-8');
// // 		console.log('file data is', data);
// // 		// } catch(error) {
// // 		//     console.log('file not found')//el fichero a no existe y no pasa nada, tira adelante
// // 	} catch (error) {
// // 		if (error.code === 'ENOENT') {
// // 			console.log('file not found');
// // 		} else {
// // 			throw error;
// // 		}
// // 	}
// // });

// //-----------------------------
// //ahora pone readFile que es llamada asíncrona por defecto

// const fs = require('fs');

// const data = fs.readFile(__filename, function callback(error, data) {
//     fs.writeFile(__filename + 'copy', data, function callback2(error) {
//         //ejecuta otra async function etc
//     })
// })

// console.log('test')

// //--------------------------------
// //esto es mismo pero de una forma más limpia. Promisify te devuelve una promesa a partir de la ejecucion de una funcion
// const fs = require('fs');
// const util = require('util')

// const readFile = util.promisify(fs.readFile)
// // const writeFile = util.promisify(fs.writeFile)

// async function main() {
//     const data = await readFile(__filename)//_filename es este fichero
//     // await writeFile(filename + '_copy', data,)//se pueden concatenar de un modo lineal
//     // await writeFile(filename + '_copy', data,)
//     // await writeFile(filename + '_copy', data,)
//     // await writeFile(filename + '_copy', data,)
//     // await writeFile(filename + '_copy', data,)
//     // await writeFile(filename + '_copy', data,)
//     console.log('File data is', data)
// }

// main()

// console.log('test')

//----------------------------------
// //queremos ver q expone esta api de fs
// const fs = require('fs').promises;

// console.dir(fs, {depth:0})

// vemos q readFile es una opcion dentro de promises

//----------------------

// const { readFile } = require('fs').promises;
// async function main() {
// 	const data = await readFile(__filename);
// 	console.log(__filename, data);
// }
// //estamos leyendo de manera asíncrona el contenido del fichero __filename, q es este fichero
// main();

// console.log('test');

//----------------------
//ejercicio de escribir lo anterior en otor fichero://es un click derecho duplicar

const { readFile, writeFile } = require('fs').promises;

async function main() {
    try {
    const data = await readFile(__filename);
	await writeFile('newFile.txt', data);
} catch (error) {
    //handle exceptions
    throw error
}
}


main();

console.log('test');
