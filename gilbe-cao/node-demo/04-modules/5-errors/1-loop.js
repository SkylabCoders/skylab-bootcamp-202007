const path = require('path');
const fs = require('fs');

const files = ['.npmrc'];

files.forEach((file) => {
	const filePath = path.resolve(process.env.HOME, file);
	const data = fs.readFileSync(filePath); // Try adding argument 'utf-8' or 'utf-42'
	console.log('File data is', data);
});
