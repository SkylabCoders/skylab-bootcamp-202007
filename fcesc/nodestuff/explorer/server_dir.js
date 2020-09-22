const fs = require('fs');
const formaters = require('./../utils/formaters');

let userPath = process.argv;
let allPaths = [];
for (let el of userPath){
    allPaths.push(el.replace(/\\/g, '/'));
}

async function print(path) {
  const dir = await fs.promises.opendir(path);
    let tree = { directories: [], files: [], otherStuff: [], stats: { size: 0, files: 0, directories: 0, other: 0 } };
  for await (const dirent of dir) {
    if (dirent.isDirectory() === true) {
        tree.stats.directories++;
        tree.directories.push(dirent.name);
    } else if (dirent.isFile() === true){
        tree.stats.files++;
        let filename = dirent.name;
        let splitted = filename.split('.');
        let extension = splitted[splitted.length - 1];
        const stats = fs.statSync(''+ path + '/' +  filename);
        tree.stats.size += stats.size;
        tree.files.push({name: filename, type: extension, size: stats.size, created: stats.birthtimeMs, modified: stats.mtimeMs, accessed: stats.atimeMs});
    } else {
        tree.stats.other++;
        tree.otherStuff.push(dirent.name);
    }
  }

  function printFiles(){
      for (let el of tree.files){
          let createdDate = formaters.formatDate(el.created);
          let modifiedDate = formaters.formatDate(el.modified);
          let accessedDate = formaters.formatDate(el.accessed);
          let spaces1 = ' '.repeat(25 - el.name.length);
          let spaces2 = ' '.repeat(10 - el.type.length);
          let spaces3 = ' '.repeat(10 - String(el.size).length - 5);
          console.log(`${el.name} ${spaces1} _ ${el.type} ${spaces2} _ ${spaces3} ${el.size} bytes _ c: ${createdDate} _ m: ${modifiedDate} _ a: ${accessedDate}`);
      }
  }
  console.log('----------------------------------------------------------------------------------------------------------------------------------------');
  console.log('>>> Listing target directory:');
  console.log('> [ Directories: ] ---------------------------------------------------------------------------------------------------------------------');
  console.log(tree.directories.join('\n'));
  console.log('> [ Files: ] ---------------------------------------------------------------------------------------------------------------------------');
  printFiles();
  if(tree.otherStuff.length !== 0){
    console.log('---Other stuff:--------------------------------------------------------------------------------------------------------------------------');
    console.log(tree.otherStuff.join('\n'));
  }
  console.log('-----------------------------------------------------------------------------------------------------------------------------------------');
  console.log(`>>> directory ${allPaths[2]}`);
  console.log(`>>>           stats: ${tree.stats.directories} directories, ${tree.stats.files} files with ${tree.stats.size} bytes and ${tree.stats.other} other elements.`);
  console.log('-----------------------------------------------------------------------------------------------------------------------------------------');
}

print(allPaths[2]);