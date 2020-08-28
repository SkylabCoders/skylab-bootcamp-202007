const express = require('express');

const { readdirSync } = require('fs');
const { ppid, allowedNodeEnvironmentFlags } = require('process');
const fileManagementt = require('./file.management.js');

const app = express();

const PORT = 4200;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
	fileManagementt.getAllFiles((error, data) => {
		res.render('pages/index', {
			articles: data,
			content: null,
			selectedFile: null
		});
	});
});

app.get('/data/:file', (req, res) => {
	const files = readdirSync('./data');
	const data = fileManagementt.getFile(req.params.file);
	res.render('pages/index', {
		articles: files,
		content: data,
		selectedFile: req.params.file
	});
});

app.post('/new-file', (req, res) => {
	fileManagementt.createFileSafe(req.body.filename);
	res.redirect(`/data/${req.body.filename}`);
});

app.post('/save-file', ({ body: { filename, contents } }, res) => {
	fileManagementt.saveFile(filename, contents);
	res.redirect(`/data/${filename}`);
});

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
