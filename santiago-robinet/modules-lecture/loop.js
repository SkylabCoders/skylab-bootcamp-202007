/* const fs = require('fs');
const path = require('path');
const { ENOENT } = require('constants');
// console.log(process.env.HOME);
const files = ['myFileeeeeee.txt', 'myFile.txt']

//Iterar sobre el array y obtener los datos del fichero
//Leer cada uno de los ficheros del array files

console.log()
files.forEach((file) => {
    try{

        const filePath =path.resolve(process.env.HOME, file);
        const data = fs.readFileSync(filePath, 'utf-8oijojkm,');
        console.log('File data is,', data)
    } catch(error){
        if(error.code === 'ENOENT'){
            console.log(`File ${file} not found!`);
        } else {
            throw error;
        }

    }
})
*/

// const { writeFile } = require('fs');

// const fs = require('fs');
// const util =require('util');

// const readFile = util.promisify(fs.readFile);

// async function main(){
//     const data = await readFile( __filename, 'utf-8');
//     console.log(__filename, data);

// }

// main();

// console.log('testtttt')

const { readFile, writeFile } = require('fs').promises;

async function main() {
	const data = await readFile(__filename);
	await writeFile('loop_copy.js', data);
}

main();
