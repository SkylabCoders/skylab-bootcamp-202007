
const util = require('util');
const { writeFile, readFile } = require('fs').promises;


async function main() {
    try {
        const data = await readFile(__filename);

        await writeFile('./modules/nfile.txt', data);
    } catch (error) {
        throw error;
    }

}
main();

console.log('test');