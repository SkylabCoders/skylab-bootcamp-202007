const {
    readdir,
    readdirSync,
    readFileSync,
    unlinkSync,
    writeFileSync
} = require('fs');

// forzamos a crear una promesa con promesify de utils
const util = require('util');

module.exports = { 
    createFile: (fileName)=>{
        if(!fileName){
            throw new Error('Filename is required');
        } 
            return writeFileSync(`./data/${fileName}`,'',{flag:'wx'})
    }, 
    createFileInjected: (fileName,fs)=>{},
    createFileSafe: (fileName) => {
        if(!fileName){
            throw new Error('Filename is required');
        }
        try{
            writeFileSync(`./data/${fileName}`,'',{flag:'wx'})
        }catch(error){
            const files = readdirSync('./data');
            const [name,extension] = fileName.split('.');

            // expresión regular que indica que vamos a buscar todos los ficheros que coincidan con esta expresión regular
            let max = files
            .filter((file) => file.match(/test[1-9]/))
            .map((file)=> Number(file.replace(name,'').replace(`.${extension}`,'')))
            .sort()
            .pop( ) || 0

            const newName = `${name}${++max}.${extension}`;
            writeFileSync(`./data/${newName}`,'',{flag:'wx'});
        }
    },
    deleteFile: (fileName) => {
        if(!fileName){
            throw new Error('Filename is required');
        }
            return unlinkSync(`./data/${fileName}`)
    },
    getFile: (fileName)=>{
        if(!fileName){
            throw new Error('Filename is required');
        }
            return readFileSync(`./data/${fileName}`)
    },
    getAllFiles: (callback)=>{
        // la función readdir recibe el path dónde quieres leer los ficheros y el callback que luego va a ejecutar
        readdir('./data', callback);
    },
    getAllFilesPromise: ()=> {
        // convertimos a promesa la función readdir y nos ayuda q a n ivel de código no tengamos que trabajar con callbacks
        const readPromise = util.promisify(readdir);
        return readPromise('./data');
    },
    saveFile: (fileName,contents)=>{
        if(!fileName){
            throw new Error('Filename is required');
        }
            return writeFileSync(`./data/${fileName}`, contents);
    },
}