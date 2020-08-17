// console.log(process.env.HOME);
const fs = require('fs');
const files = ['.npmrc', '.npmrcasdfafg'];
const path = require('path')

// Iterar sobre el array y obtener los datos del fichero 
// Leer cada uno de los ficheros del array files

// files.forEach((file) => {
//     try {
//         const filePath = path.resolve(process.env.HOME, file)
//         const data = fs.readFileSync(filePath, 'utf-8');
//         console.log('File data is', data);
//     } catch (error) {
//         if (error.code === 'ENOENT') {      //ENOENT error -> no such file or directoryht
//             console.log('File not found');
//         } else {
//             throw error;         //deja que JS reviente y se cierre el programa
//         }
//     }
// });


//=================

const { readFile, writeFile } = require('fs').promises;

async function main() {
    const data = await readFile(__filename, 'utf-8');
    console.log(__filename, data);
    await writeFile('newFile.js', data)
}

main();


