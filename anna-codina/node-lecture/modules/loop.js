// // console.log(process.env.HOME);
// const fs = require('fs');
// const files = ['myServer.js'];
// const path = require('path');

// files.forEach((file) => {
// 	try {
// 		const filePath = path.resolve(process.env.HOME, file);
// 		const data = fs.readFileSync(filePath);
// 		console.log(`data is ${data}`);
// 	} catch (error) {
// 		if (error.code === 'ENOENT') {
// 			console.log('File not found!');
// 		} else {
// 			throw error;
// 		}
// 	}
// });
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const fs = require('fs');
// const util = require('util');

// const readFile = util.promisify(fs.readFile);

// async function main() {
// 	const data = await readFile(__filename);
// 	console.log('file data is ', data);
// }

// main();
// console.log('test');

// +++++++++++++++++++++++++++++++++++++++++

const { readFile, writeFile } = require('fs').promises;

async function main() {
	try {
		const data = await readFile(__filename);
		await writeFile('newFile.js', data);
	} catch (error) {
		// handle exceptions
		throw error;
	}
}

main();
console.log('test');
