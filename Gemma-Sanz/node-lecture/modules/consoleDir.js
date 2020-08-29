//si añadimos promises todas las fn pasan a ser asincrona
//estamos leyendo de manera asincrona el contenido de este fichero
const { readFile } = require('fs').promises;

async function main() {
	const data = await readFile(__filename);
	console.log(__filename, data);
}

main();
console.log('Test');
//console.dir(fs, { depth: 0 });

module.export;
