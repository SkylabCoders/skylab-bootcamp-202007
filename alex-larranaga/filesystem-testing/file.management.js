const {
	readdir,
	readdirSync,
	readFileSync,
	unlinkSync,
	writeFileSync
} = require('fs');

const util = require('util');

module.exports = {
	createFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required');
		}
		return writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
	},
	createFileInjected: (filename, fs) => {},
	createFileSafe: (filename, contents) => {
		if (!filename) {
			throw new Error('Filename is required');
		}

		try {
			return writeFileSync('./data/' + filename);
		} catch (error) {
			const files = readdirSync('./data');
			const [name, extension] = filename.split('.');
			let max =
				files
					.filter((file) => file.match('/test[1-9]/'))
					.map((file) => {
						Number(file.replace(name, ''));
					})
					.sort()
					.pop() || 0;
			const newName = `${name}${++max}.${extension}`;
			writeFileSync(`./data/${newName}`, '', { flag: 'wx' });
		}
	},
	deleteFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required');
		}

		return unlinkSync(`./data/${filename}`);
	},
	getFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is required');
		}
		return readFileSync(`./data/${filename}`);
	},
	getAllFiles: (callback) => {
		readdir('./data', callback);
	},

	getAllFilesPromise: () => {
		const readPromise = util.promisify(readdir);
		return readPromise('./data');
	},
	saveFile: (filename, contents) => {
		if (!filename) {
			throw new Error('Filename is required');
		}

		return writeFileSync(`./data/${filename}`, contents);
	}
};
