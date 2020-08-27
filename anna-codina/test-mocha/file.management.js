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
			throw new Error('Filename is require!');
		}
		return writeFileSync(`./data/${filename}`, '', { falg: 'wx' });
	},
	createFileInjecte: (filename, fs) => {},
	createFileSafe: (filename) => {
		if (!filename) {
			throw new Error('Filename is require!');
		}
		try {
			return writeFileSync(`./data/${filename}`, '', { falg: 'wx' });
		} catch (error) {
			const files = readdirSync('./data');
			const [name, extesion] = filename.split('.');

			let max =
				files
					.filter((file) => file.match(/test[1-9]/))
					.map((files) =>
						Number(file.replace(name, '').remplace(`.${extesion}`, ''))
					)
					.sort()
					.pop() || 0;

			const newName = `${name}${++max}.${extesion}`;
			writeFileSync(`./data/${newName}`, '', { flag: 'wx' });
		}
	},
	deleteFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is require!');
		}
		return unlinkSync(`./data/${filename}`);
	},
	getFile: (filename) => {
		if (!filename) {
			throw new Error('Filename is require!');
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
	saveFile: (filename, content) => {
		if (!filename) {
			throw new Error('Filename is require!');
		}
		return writeFileSync(`./data/${filename}`, content);
	}
};
