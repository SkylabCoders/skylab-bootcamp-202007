const {
    readdir,
    readdirSync,
    readFileSync,
    writeFileSync,
    unlinkSync
} = require('fs');

const util = require('util');

module.exports = {                                  // todas las operaciones que se hacen sobre un fichero
    createFile: (filename) => {
        if (!filename) {
            throw new Error('filename is required!')
        }

        return writeFileSync(`./data/${filename}`, '', { flag: 'wx' })  // crear fichero vacio en data. (mirar que es la flag!!)
    },
    createFileInjected: (filename, fs) => { },
    createFileSafe: (filename) => {
        if (!filename) {
            throw new Error('filename is required!')
        }
        try {
            writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
        } catch (error) {
            const files = readdirSync('./data');
            const [name, extension] = filename.split('.');

            let max =           // el numero max de files que cumples el patron, y si no da nada, da 0
                files
                    .filter((file) => file.match(/test(1-9)/))  // todos los ficheros que coincidan con esta regExp, que empiecen por test y tengan un numero del 1 al 9
                    .map((file) =>
                        Number(file.replace(name, '').replace(`.${extension}`, '')))
                    .sort()
                    .pop() || 0;

            const newName = `${name}${++max}.${extension}`;
            writeFileSync(`./data/${newName}`, '', { flag: 'wx' })
        }
    },
    deleteFile: (filename) => {
        if (!filename) {
            throw new Error('filename is required!')
        }

        return unlinkSync(`./data/${filename}`)  // unlink es el nombre que se le da a la accion de borrar un fichero
    },
    getFile: (filename) => {
        if (!filename) {
            throw new Error('filename is required!')
        }

        return readFileSync(`./data/${filename}`)
    },
    getAllFiles: (callback) => {
        readdir('./data', callback);           // data es donde estan los archivos
    },
    getAllFilesPromise: () => {
        const readPromise = util.promisify(readdir);   // promisify toma una funcion y te devuelve una promesa de esa funcion
        return readPromise('./data')                    // al hacer una promesa nos permite no tener que trabajar con callbacks
    },
    saveFile: (filename, contents) => {
        if (!filename) {
            throw new Error('filename is required!')
        }

        return writeFileSync(`./data/${filename}`, contents)  // path del fichero a guardar + contenidos
    }
};