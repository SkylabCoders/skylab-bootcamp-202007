const { expect } = require('chai');

// si el eslint chirria podem importar de mocha describe i it, pero en teoria no hauria de chirriar
const { describe, it, afterEach, xit } = require('mocha');

const sinon = require('sinon');

const fs = require('fs');

// el proxiquire sirve cuando el require no carga las dependencias siempre bien, con proxiquire va a las dependencias de una forma poco invasiva
const proxiquire = require('proxyquire');

describe.skip('File Management (WITH SPY)', () => {
	// Buena praxis hacer esto
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		// el writeFileSync esta en fs, por lo tanto tenemos que espiar esto y requereirla arriba
		const writeSync = sinon.spy(fs, 'writeFileSync');

		// EL ORDRE IMPORTA!!! Antes hacer el espia, y luego el proxiquire
		const fileManagement = proxiquire('../file.management', { fs });

		const filename = 'newFile.txt';

		// invoke
		fileManagement.createFile(filename);
		// tambié ho podriem fer així
		// fileManagement.createFile("ted.txt");

		// asserts
		expect(writeSync.callCount).to.equal(1);
		// LOS ESPIAS NO PREVIENEN LOS EFECTOS SECUNDARIOS DEL MÉTODO DE ESTA EJECUCIÓN, POR LO QUE AQUÍ NOS VA CREANDO ESTE ARCHIVO TODO EL RATO QUE LO PASAMOS, ANTES DE PASARLO TENEMOS QUE ELIMINARLO
		// Para prevenir efectos 2arios, requerir.....
	});
	xit('should not create a file when there is no filename', () => {
		// AQUI COMPROVAMOS EL THROW
		const writeSync = sinon.spy(fs, 'writeFileSync');

		const fileManagement = proxiquire('../file.management', { fs });
		const filename = null;

		try {
			fileManagement.createFile();
		} catch (error) {
			const Error = sinon.spy();
		}

		fileManagement.createFile(filename);
		expect(writeSync.notCalled).to.be.true;
	});
});
