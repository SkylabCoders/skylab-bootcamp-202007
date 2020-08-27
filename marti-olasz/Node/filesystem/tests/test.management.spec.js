const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File management', () => {
	describe('Create file', () => {
		afterEach(() => sinon.restore());

		it('should create file', () => {
			const writeFileSyncSpy = sinon.spy(fs, 'writeFileSync');

			const { createFile } = require('../file.management');

			const fileName = 'test.txt';
			createFile(fileName);
		});
	});
});
