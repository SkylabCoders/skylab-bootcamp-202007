const http = require('http');
const fs = require('fs');
const path = require('path');
// const process = require('process');

const hostname = '127.0.0.1';
const port = 3013;

let userPath = process.argv;
let allPaths = [];
for (let el of userPath){
    allPaths.push(el.replace(/\\/g, '/'));
}
// console.log('AQUI', allPaths);

async function print(path) {
  const dir = await fs.promises.opendir(path);
    let tree = { directories: [], files: [], otherStuff: [] };
  for await (const dirent of dir) {
    if (dirent.isDirectory() === true) {
        tree.directories.push(dirent.name);
    } else if (dirent.isFile() === true){
        let filename = dirent.name;
        let splitted = filename.split('.');
        let extension = splitted[splitted.length - 1];
        const stats = fs.statSync(''+ path + '/' +  filename);
        tree.files.push({name: filename, type: extension, size: stats.size, created: stats.birthtimeMs, modified: stats.mtimeMs, accessed: stats.atimeMs});
    } else {
        tree.otherStuff.push(dirent.name);
    }
  }
  function formatDate(someTime){
    let someDate = new Date(someTime);
    let year = someDate.getFullYear();
    let month = someDate.getMonth() + 1;
    let day = someDate.getDate();
    let hour = someDate.getHours();
    if(hour < 10){ hour = '0' + hour};
    let minute = someDate.getMinutes();
    if(minute < 10){ minute = '0' + minute};
    let second = someDate.getSeconds();
    if(second < 10){ second = '0' + second};
    let date = `${day}/${month}/${year}`;
    let spaces1 = ' '.repeat(10 - date.length);
    let time = `${hour}:${minute}:${second}`;
    let spaces2 = ' '.repeat(8 - time.length);
    return `${spaces1}${date} ${spaces2}${time}`;
  }
  function printFiles(){
      for (let el of tree.files){
          let createdDate = formatDate(el.created);
          let modifiedDate = formatDate(el.modified);
          let accessedDate = formatDate(el.accessed);
          let spaces1 = ' '.repeat(25 - el.name.length);
          let spaces2 = ' '.repeat(10 - el.type.length);
          let spaces3 = ' '.repeat(10 - String(el.size).length - 5);
          console.log(`${el.name} ${spaces1} _ ${el.type} ${spaces2} _ ${spaces3} ${el.size} bytes _ c: ${createdDate} _ m: ${modifiedDate} _ a: ${accessedDate}`);
      }
  }
  console.log('-----------------------------------------------------------------------------------------------------------------------------------------');
  console.log('>>> Listing target directory:');
  console.log('---Directories:--------------------------------------------------------------------------------------------------------------------------');
  console.log(tree.directories.join('\n'));
  console.log('---Files:--------------------------------------------------------------------------------------------------------------------------------');
  printFiles();
  if(tree.otherStuff.length !== 0){
    console.log('---Other stuff:--------------------------------------------------------------------------------------------------------------------------');
    console.log(tree.otherStuff.join('\n'));
  }
  console.log('-----------------------------------------------------------------------------------------------------------------------------------------');
}

print(allPaths[2]);