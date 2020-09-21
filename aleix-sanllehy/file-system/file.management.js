const {
	readdir,
	readdirSync,
	readFileSync,
	unlinkSync,
	writeFileSync
} = require('fs');
const util = require('util');

module.exports = {
	//6
	createFile: (filename) => {
		if (!filename) {
			throw new Error('filename is required!');
		}
		return writeFileSync(`./data/${filename}`, '', { flag: 'wx' });
	},
	//TODO
	createFileInjected: (filename, fs) => {},
	//7
	createFileSafe: (filename) => {
		if (!filename) {
			throw new Error('filename is required!');
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
			// ++max incremented
			const newName = `${name}${++max}.${extension}`;
			writeFileSync(`./data/${newName}`, '', { flag: 'wx' });
		}
	},
	//5
	deleteFile: (filename) => {
		if (!filename) {
			throw new Error('filename is required!');
		}
		return unlinkSync(`./data/${filename}`);
	},
	//4
	getFile: (filename) => {
		if (!filename) {
			throw new Error('filename is required!');
		}
		return readFileSync(`./data/${filename}`);
	},
	//1
	getAllFiles: (callback) => {
		readdir('./data', callback);
	},
	//2
	getAllFilesPromise: () => {
		const readPromise = util.promisify(readdir);
		return readPromise('./data');
	},
	//3
	saveFile: (filename, contents) => {
		if (!filename) {
			throw new Error('filename is required!');
		}
		return writeFileSync(`./data/${filename}`, contents);
	}
};
