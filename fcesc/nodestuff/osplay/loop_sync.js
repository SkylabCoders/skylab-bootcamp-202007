const fs = require('fs');
const path = require('path');

console.log(process.env.HOMEPATH);
const FILES = ['sample.txt', 'someInexistentStuff.txt', 'goodbye.txt']; //iterar sobre el array y obtener los datos del fichero
const DEFAULT_ENCODING = 'utf-8';

FILES.forEach( (file, index) => {
  let status = undefined;
  try {
    const filePath = path.join(__dirname, file);
    const data = fs.readFileSync(filePath, DEFAULT_ENCODING);
    console.log(`file ${index} >>> ${data}`);
    status = 'closed';
  } catch(e) {
    console.log(`file ${index} >>> SYSTEM LOG - ${e}`);
    status = 'ignored';
  } finally {
    console.log(`         > \'${file}\' was ${status}.`);
  }
})
