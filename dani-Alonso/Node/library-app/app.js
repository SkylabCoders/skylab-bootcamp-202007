const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');

const app = express();

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
	res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.get('/books', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/views', 'books.html'));
});

const PORT = 3000;
app.listen(3000, () =>
	debug(`server is running in port${chalk.greenBright(PORT)}`)
);
