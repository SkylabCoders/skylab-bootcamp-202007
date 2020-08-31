const sinon = require('sinon');
const proxyquire = require('proxyquire');

const fs = require('fs');
const { describe, afterEach, it, xit } = require('mocha');
const { expect } = require('chai');

// EL FAKE AUTOMATICAMENTE NO REEMPLAZA AL MÉTODO QUE QUEREMOS USAR
describe('File Management (WITH MOCK)', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		// No validamos las situaciones al final, sino que con el mock esperas que cumpla con un comportamiento
		const writeMock = sinon.mock(fs);
		// Esperas que este mock, el writeMock, hasa pasado writeFileSync una vez
		writeMock.expects('writeFileSync').once();

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		writeMock.verify();
	});
	it('should create a new file when there is a file with the same name', () => {
		// Las expects se escriben al rpincipio, remember!!
		const writeMock = sinon.mock(fs);
		// li hem de passar withArgs, funciona com un destructuring, el ordre importa
		writeMock.expects('writeFileSync').withArgs('./data/test.txt').throws();
		// cuando retorne un error el writeFileSync la 2a vez tiene que devolver args.... test1 (este argumento)
		writeMock
			.expects('writeFileSync')
			.withArgs('./data/test1.txt')
			.returns(undefined);
		// esperamos que el readdirSync nos retorne el elemento que teniamos
		writeMock.expects('readdirSync').returns(['text.txt']).once();

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFileSafe('test.txt');

		writeMock.verify();
	});
	it('should throw an error when creating a file without filename', () => {
		// eval ln 13-14 file.management
		// Estem verificant que mai s'executi el writeFileSync quan no hi ha un filename, que només llençi l'error. Endevinem comportaments de la fn a espiar mitjançant el mock
		// el sinon.mock, en este caso "mockea" la función fs, pero no tiene la misma lógica, pero si que llama a las mismas fn, es un 'reeemplazo'. Tiene la misma funcionalidad, argumentos,... pero no replica la unidad, la función
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').never();
		const fileManagement = proxyquire('../file.management', { fs });

		// tenemos que hace un try-catch
		try {
			// invocamos a la fn a testear
			fileManagement.createFile();
		} catch (error) {
			// verificamos la variable mock
			writeMock.verify();
		}
	});
});
