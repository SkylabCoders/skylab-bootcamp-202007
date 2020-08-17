const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();

const VIEW_FOLDER = 'src/views';

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
	express.static(path.join(__dirname, 'node_modules/jquery/dist/'))
);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'));
});

app.get('/books', (req, res) => {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'books.html'));
});

const PORT = 2427;
app.listen(PORT, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(PORT))
);
