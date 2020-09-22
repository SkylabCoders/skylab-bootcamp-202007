const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const VIEWS_FOLDER = 'src/views';

const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	'/css',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/jquery/dist'))
);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, VIEWS_FOLDER, 'index.html'));
});

app.get('/books', (req, res) => {
	res.sendFile(path.join(__dirname, VIEWS_FOLDER, 'books.html'));
});
app.listen(PORT, () =>
	debug('Server is running in port ' + chalk.yellow(PORT))
);
