const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File Management Fake', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a new file', () => {
		const writeFake = sinon.fake();
        sinon.replace(fs, 'writeFileSync', writeFake);
        
		const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.createFile('test.txt');

		expect(writeFake.calledWith('./data/test.txt', '', { flag: 'wx' })).to.be.true;
    });
    
    it('should throw an exception when a file already exists', () => {
        const writeFake = sinon.fake.throws(new Error());;
        sinon.replace(fs, 'writeFileSync', writeFake);

		const fileManagement = proxyquire('../file.management', { fs });


        expect(() => fileManagement.createFile('test.txt')).to.throw();
    });

    it('should return a list of files ' , () => {
        const readDirFake = sinon.fake.yields(null, ['test.txt']);
        sinon.replace(fs, 'readdir', readDirFake);

        const fileManagement = proxyquire('../file.management', { fs });
        

        fileManagement.getAllFiles((error, data) => {
            expect(data).to.eql(['test.txt']);
        })

    })
});


