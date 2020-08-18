const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

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
	express.static(path.join(__dirname, 'node_modules/jquery/dist'))
);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html')); // send es un alias de write + end

	/*
    res.write('.....');
    res.end();
    */
});

app.get('/books', (request, response) => {
	response.sendFile(path.join(__dirname, VIEW_FOLDER, 'books.html'));
});

app.listen(port, () => debug(`Server is running in port ${chalk.blue(port)}`));
