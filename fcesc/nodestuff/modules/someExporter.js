const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream('./someSample.html');
const data = [];
let formatedData;

function getData(){
  readStream.on('data', (chunk) => {
    data.push(chunk);
    // console.log('data :', chunk, chunk.length);
  });

  readStream.on('end', () => {
    formatedData = Buffer.concat(data).toString();
    console.log('end :', formatedData);
    return formatedData;
  })

  readStream.on('error', (err) => {
    console.log('error :', err)
  })
}

module.exports = ( async (stuff)=>{ return await getData() } );

