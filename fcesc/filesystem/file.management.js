const {
  readdir,
  readdirSync,
  readFile,
  readFileSync,
  unlink,
  unlinkSync,
  writeFile,
  writeFileSync
} = require('fs');
const ROOT = './data';
const util = require('util');

module.exports = {
  createFile: (filename) => {
    if (!filename) {
      throw new Error('Filename is required');
    }
    return writeFileSync(`${ROOT}/${filename}`, '', { flag: 'wx'});
  },
  createFileInjected: (filename)=>{},
  createFileSafe: (filename) => {
    if (!filename) {
      throw new Error('Filename is required');
    }
    try {
      writeFileSync(`${ROOT}/${filename}`, '', { flag: 'wx' });
    } catch (error) {
      const files = readdirSync(ROOT);
      const [ name, extension ] = filename.split('.');
      let max = files
        .filter((file)=>{file.match(/.*test{1}.*[1-9]+/)})
        .map((file) => { Number(file.replace(name, '').replace(`.${extension}`, ''))})
        .sort()
        .pop() || 0;

      const newName = `${name}${++max}.${extension}`;
      console.log('AQUI', newName);
      writeFileSync(`${ROOT}/${newName}`, '', { flag: 'wx' });
    }
  },
  deleteFile: (filename) => {
    if (!filename) {
      throw new Error('Filename is required');
    }
    return unlinkSync(`${ROOT}/${filename}`);
  },
  getFile: (filename) => {
    if (!filename) {
      throw new Error('Filename is required');
    }
    return readFileSync(`${ROOT}/${filename}`);
  },
  getAllFiles: (callback) => {
    readdir(ROOT, callback);
  },
  getAllFilesPromise: () => {
    const readPromise = util.promisify(readdir);
    return readPromise(ROOT); // promisify devuelve una promesa de la función
  },
  saveFile: (filename, contents) => {
    if (!filename) {
      throw new Error('Filename is required');
    }
    return writeFileSync(`${ROOT}/${filename}`, contents);
  }
}