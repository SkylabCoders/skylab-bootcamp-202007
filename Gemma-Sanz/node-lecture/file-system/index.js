const express = require('express');
const debug = require('debug')('app');

const { readdirSync } = require('fs');

const fileManagement = require('./file.management');

// fs no lo instalamos porque es un modulo de node

const app = express();

const port = 3001;

// Aquí definimos lo que usamos, ejs, html, .... lo que usaremos
// Estas 3 cosas son middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// dirname es uno de los 5 argumentos dinamicos del modulo
app.use('/public', express.static(`${__dirname}/public/`));

app.get('/', (req, res) => {
	fileManagement.getAllFiles((error, data) => {
		res.render('pages/index', {
			articles: data,
			content: null,
			selectedFile: null
		});
	});
});

app.get('/data/:file', (req, res) => {
	const files = readdirSync('./data');
	const data = fileManagement.getFile(req.params.file);
	res.render('pages/index', {
		articles: files,
		content: data,
		selectedFile: req.params.file
	});
});

app.post('/new-file', (req, res) => {
	fileManagement.createFileSafe(req.body.filename);
	res.redirect(`/data/${req.body.filename}`);
});

// al {body: {filename, contents}} li fa un destructuring del req
app.post('/save-file', ({ body: { filename, contents } }, res) => {
	fileManagement.saveFile(filename, contents);
	res.redirect(`/data/${filename}`);
});

app.listen(port, () => debug(`Server is running on port ${port}`));
