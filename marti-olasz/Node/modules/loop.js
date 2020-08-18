/*
const fs = require('fs');
const path = require('path');

const files = ['msg', '.npmrc'];

files.forEach((file) => {
	try {
		const filePath = path.resolve(process.env.HOME, file);
		const data = fs.readFileSync(filePath, 'utf-8');
		console.log('File data is', data);
	} catch (err) {
		switch (err.code) {
			case 'ENOENT':
				console.log('File not found');
				break;
			default:
				throw err;
				break;
		}
	}
});
*/
const { readFile, writeFile } = require('fs').promises;

async function main() {
	try {
		const data = await readFile(__filename, 'utf-8');
		await writeFile(__filename + '(copy)', data);
	} catch (err) {
		throw err;
	}
}

main();
