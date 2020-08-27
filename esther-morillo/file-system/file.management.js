const {
    readdir,
    readdirSync,
    readFileSync,
    unlinkSync, 
    qriteFileSync,
    writeFileSync
} = require('fs');

const util = require('util');

// todas las operaciones que se hacen sobre un fichero
module.exports = { 
    createFile: (filename) => {
        if (!filename) {
            throw new Error('Filename is required!');
        }

        return writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
    },
    createFileInjected: (filename, fs) => {},
    createFileSafe: (filename) => {
        if (!filename) {
            throw new Error('Filename is required!');
        }

        try {
            writeFileSync(`./data/${filename}`, '', { flag: 'wx' })
        } catch (error) {
            const files = readdirSync('./data');
            const [name, extension] = filename.split('.');

            // buscamos todos los archivos que coincidan con esta exp. reg.
            // número máximos de files que cumplen ese patrón y sino da 0
            let max = files 
            .filter((file) => file.match(/test[1-9]/))
            .map((file) => Number(file.replace(name, '').replace(`.${extension}`, '')))
            .sort()
            .pop() || 0;

        const newName = `${name}${++max}.${extension}`;
        writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
        }
    },
    deleteFile: (filename) => {
        if (!filename) {
            throw new Error('Filename is required!');
        }

        return unlinkSync(`./data/${filename}`);
    },
    getFile: (filename) => {
        if (!filename) {
            throw new Error('Filename is required!');
        }

        return readFileSync(`./data/${filename}`);
    },
    getAllFiles: (callback) => {
        readdir('./data', callback);
    },
    getAllFilesPromise: () => {
        // promisify toma una función y te devuelve una promesa de esa función
        // para no tener que trabajar luego con callbacks
        const readPromise = util.promisify(readdir);
        return readPromise('./data')
    },
    saveFile: (filename, contents) => {
        if (!filename) {
            throw new Error('Filename is required!');
        }

        return writeFileSync(`./data/${filename}`, contents);
    }
};