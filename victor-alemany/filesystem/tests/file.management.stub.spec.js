const { expect } = require("chai")
//const fileManagement = require('../file.management');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const fileManagement = require("../file.management");

describe('File Management Stub', () => {

    afterEach(() => {
        sinon.restore();
    })

    it('Should create a new file', () => {
        // el spy antes del proxy para que coja bien las dependencias
        const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        const fileName = "Prueba.txt";

        fileManagement.createFile(fileName);

        expect(writeFileSyncStub.called).to.be.true;
    })
    it('Should not create a new file where there is no filename', () => {
        // el spy antes del proxy para que coja bien las dependencias
        const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        try{
            fileManagement.createFile();
        } catch (error){
            expect(writeFileSyncStub.called).to.be.false;
        }
        
    })

    it('Should force to capture throw error with stup default behaviour', () => {
        // el spy antes del proxy para que coja bien las dependencias
        const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');
        // podemos indicar que comportamiento hará el stub:
        writeFileSyncStub.throws(new Error('Filename already created'));
        const fileManagement = proxyquire('../file.management', { fs });

        // podemos crear que este stub va a lanzar cada vez un error
        // y luego podemos esperar que al llamar a esa función ocurre y lo esperamos
        // en el expect si no le ponemos la función falla el expect
        expect(()=> fileManagement.createFile('prueba.txt')).to.throw();
        
    })

    it.skip('Should controle error if file is created by another secondary action or test', () => {
        // el spy antes del proxy para que coja bien las dependencias
        const writeStub = sinon.stub(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });
        // aquí le "forzamos" a indicarle que cuando llamemos a la función writeStub
        // ya ha llamado con esa ruta definida y forzamos a que ha lanzado un error
        // para que pueda entrar en el catch de la función
        writeStub.withArgs('./data/test.txt').throws(new Error());

        fileManagement.createFileSafe('test.txt');

        expect(writeStub.calledWith('./data/prueba1.txt')).to.be.true;
        expect(writeStub.callCount).to.equal(2);
        
    })

    it('Controlling behaviours of stubs of the functions', () => {
       
        const writeStub = sinon.stub(fs, 'writeFileSync');
        const readDirStub = sinon.stub(fs,'readdirSync');
        const fileManagement = proxyquire('../file.management', { fs });
    
        writeStub.withArgs('./data/test.txt').throws(new Error());
        writeStub.returns(undefined);
        readDirStub.returns(['test1.txt','test5.txt'])

        fileManagement.createFileSafe('test.txt');

        expect(writeStub.calledWith('./data/test6.txt')).to.be.true;
       // expect(writeStub.callCount).to.equal(2);
        
    })

    it('should getAllFiles and return a list of files',()=>{
        const readDirStub = sinon.stub(fs,'readdir');

        const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.getAllFiles((error,data)=>{
            expect(data).to.equal(['text.txt']);
        })
    })

    it('should return a list of files from getAllFilesPromise',()=>{
        const readDirStub = sinon.stub(fs,'readdir');

        const util = {
            // "obligamos" que la promesa trabaje con el stub y nos devuelva ese stub declarado
            promisify: sinon.stub().returns(readDirStub)
        }

        // requerimos las dependencias
        const fileManagement = proxyquire('../file.management', { fs, util });

        // resolve porque queremos probar que se resuelve la promesa (reject si queremos que pete)
        readDirStub.resolves(['test.txt'])

        // lo importante es poner el expect dentro de la promesa para poder validar que se resuelve
        return fileManagement.getAllFilesPromise().then((files)=>{
            expect(files).to.eql(['test.txt']);
        })
    })

})