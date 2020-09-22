const { readFile, writeFile } = require('fs').promises;
const path = require('path');

console.log(process.env.HOMEPATH);
const FILES = ['sample.txt', 'mediumSample.txt', 'goodbye.txt']; //iterar sobre el array y obtener los datos del fichero
const DEFAULT_ENCODING = 'utf-8';

FILES.forEach( (file, index) => {
  let status = undefined;
  try {
    const filePath = path.join(__dirname, file);
    async function getData(){
      const data = await readFile(filePath, DEFAULT_ENCODING);
      console.log(`file ${index} >>> ${data}`);
      const resultFilePath = path.join(__dirname, 'nuevoFichero.txt');
      let partialData = data + '\n';
      writeFile(resultFilePath, partialData, DEFAULT_ENCODING);
    }
    getData();
    status = 'closed';
  } catch(e) {
    console.log(`file ${index} >>> SYSTEM LOG - ${e}`);
    status = 'ignored';
  } finally {
    console.log(`         > \'${file}\' was ${status}.`);
  }
})