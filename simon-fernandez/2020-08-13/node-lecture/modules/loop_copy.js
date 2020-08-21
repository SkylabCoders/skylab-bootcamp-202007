const { readFile, writeFile } = require('fs').promises;

async function main() {
	const data = await readFile(__filename, 'utf-8');
	console.log(__filename, data);

	await writeFile('./loop_copy.js', data);
}

main();

console.log('TEST');

//iterar array de file s y obtener los datos del fichero
