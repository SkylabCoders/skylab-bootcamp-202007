const {
	readdir,
	readdirSync,
	readFileSync,
	// unlink es el nombre que se le da a eliminar un fichero en el backend
	unlinkSync,
	writeFileSync
} = require('fs');
const util = require('util');

module.exports = {
	createFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}
		// flap es una cosa que wx es la w de write i la x ....
		return writeFileSync(`./data/${filename}`, '', { flap: 'wx' });
	},
	createFileInjected: (filename, fs) => {},
	createFileSafe: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}
		// intentamos escribir un fichero, y si no esta creado(catch), crearemos un nuevo fichero
		try {
			writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
		} catch (error) {
			const files = readdirSync('./data');
			const [name, extension] = filename.split('.');
			// buscaremos todos los ficheros que coincidan con esta expresión regular que empiezen con test y luego tengan un numero del 1 al 9
			// esta fn de files la podemos encontrar por internet, es una fn directa basica para escribir...
			// max deveria dar el numero máximo de files que cumplan este patrón y si no da nada daria 0
			let max =
				files
					.filter((file) => file.match(/test[1-9]/))
					.map((file) =>
						Number(file.replace(name, '').replace(`.${extension}`, ''))
					)
					// hacemos un sort para ordenar
					.sort()
					// hacemos el pop o sino un 0
					.pop() || 0;

			const newName = `${name}${++max}.${extension}`;
			writeFileSync(`./data/${newName}`, '', { flag: 'wx' });
		}
	},
	deleteFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}
	},
	getFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}
		// Aqui leeremos la ruta de este fichero
		return readFileSync(`./data/${filename}`);
	},
	getAllFiles: (callback) => {
		// pinta la lista de elementos dentro de la carpeta data
		readdir('./data', callback);
	},
	getAllFilesPromise: () => {
		// Aqui estamos creando una promesa y el callback lo podremos ejecutar a través de la promesa. Aqui podremos hacer un await o un .then
		const readPromise = util.promisify(readdir);
		return readPromise('./data');
	},
	saveFile: (filename, contents) => {
		if (!filename) {
			throw new Error('File name is required!');
		}
		return writeFileSync(`./data/${filename}`, contents);
	}
};

// si queremos crear un fichero lo hacemos dentro de data dandole un nombre y un contenido
// cuando hacemos un split por el punto tendremos un array con la 1a pos file y la 2a txt:
// file.tst
// split"."
// [file, txt]
