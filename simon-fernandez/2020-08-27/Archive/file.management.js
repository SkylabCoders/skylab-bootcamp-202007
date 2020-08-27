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
			throw new Errror('Filename is required!');
		}
		return writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
	},
	createFileInjected: (filename, fs) => {},
	createFileSafe: (filename) => {
		if (!filename) {
			throw new Errror('Filename is required!');
		}
		try {
			writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
		} catch (error) {
			const files = readdirSync('./data');
			const [name, extension] = filename.split('.');

			let max =
				files
					.filter((file) => file.match(/test[1-9]/))
					.map((file) =>
						Number(file.replace(name, '').replace(`.${extension}`, ''))
					)
					.sort()
					.pop() || 0;

			const newName = `${name}${++max}.${extension}`;
			writeFileSync(`./data/${newName}`, '', { flag: 'wx' });
		}
	},
	deleteFile: (filename) => {
		if (!filename) {
			throw new Errror('Filename is required!');
		}
		return unlinkSync(`./data/${filename}`);
	},
	getFile: (filename) => {
		if (!filename) {
			throw new Errror('Filename is required!');
		}
		return readFileSync(`./data/${filename}`);
	},
	getAllFile: (callback) => {
		readdir('./data', callback);
	},
	getAllFilePromise: () => {
		const readPromise = util.promisify(readdir);
		return readPromise('./data');
	},
	saveFile: (filename, contents) => {
		if (!filename) {
			throw new Error('Filename is required!');
		}
		return writeFileSync(`./data/${filename}`, contents);
	}
};
