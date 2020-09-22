const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management', () => {
	afterEach(() => {
		sinon.restore();
	});
	it.skip('should not create a new file', () => {
		// setup
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', {fs});

		//invoke function
		fileManagement.createFile('text.txt');

		// asserts
		expect(writeSpy.called).to.be.true;
	});

	it('should create a new file', () => {
        const writeSpy = sinon.spy(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', {fs});

		try{
            fileManagement.createFile();
        } catch(error){
            expect(writeSpy.notCalled).to.be.true;
        }

		

	});
});
