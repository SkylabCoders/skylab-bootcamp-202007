/* const fs = require('fs');
const path = require('path');
//console.log(process.env.HOME); // C:\Users\Alish

const files = ['.npmrc', '0sadsd', 'adsadsad'];

// Iterar sobre el array y obtener los datos del fichero
// Leer cada uno de los ficheros del array files

files.forEach((file) => {
	//const filePath = process.env.HOME + '/' + file;
	try {
		const filePath = path.resolve(process.env.HOME, file);
		const data = fs.readFileSync(filePath, 'utf-811');
		//const data = await fetch(...)...
		console.log('File data is', data);
	} catch (error) {
		//console.log(file, ': File not found');
		if (error.code === 'ENOENT') {
			console.log(file, ': File not found');
		} else {
			throw error;
		}
	}
}); 

const { writeFile } = require('fs');*/

//-------------------------------------------------------------------------------

/* const fs = require('fs');

const data = fs.readFile(__filename, function callback(error, data) {
	fs.writeFile(__filename + '_copy', data, function callback2(error) {
		console.log('File data is:', data);
	});
});

console.log(data);
console.log('Test'); */

//-------------------------------------------------------------------------------

/* const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function main() {
	const data = await readFile(__filename);
	console.log('File data is:', data);
}

main();

console.log('Test'); */

//-------------------------------------------------------------------------------

const { readFile, writeFile } = require('fs').promises;

//console.dir(fs, { depth: 0 });

async function main() {
	try {
		const data = await readFile(__filename);
		await writeFile(__filename + '_copy', data);
		console.log(__filename, data);
	} catch (error) {
		//handle exceptions
		throw error;
	}
}

main();

console.log('Test');
