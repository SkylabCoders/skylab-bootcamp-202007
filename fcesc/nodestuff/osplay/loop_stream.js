const fs = require('fs');
const path = require('path');

console.log(process.env.HOMEPATH);
const FILES = ['sample.txt', 'goodbye.txt']; //iterar sobre el array y obtener los datos del fichero
const DEFAULT_ENCODING = 'utf-8';

FILES.forEach( async (file, index) => {
  let status = undefined;
  try {
    const filePath = path.join(__dirname, file);
    const readStream = fs.createReadStream(filePath, DEFAULT_ENCODING);
    let data = await getDataFromFile(readStream);
    console.log(`file ${index} >>> ${data}`);
    status = 'closed';
  } catch(e) {
    console.log(`file ${index} >>> SYSTEM LOG - ${e}`);
    status = 'ignored';
  } finally {
    console.log(`         > \'${file}\' was ${status}.`);
  }
})

function getDataFromFile(stream){
  let data = [];

  stream.on('data', (chunk) => {
    data.push(chunk);
  });

  stream.on('end', () => {
    let formatedData = Buffer.concat(data);
    return formatedData;
  })

  stream.on('error', (err) => {
    throw err;
  })
}