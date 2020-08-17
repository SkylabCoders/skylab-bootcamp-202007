const express = require('express');
const path = require('path');
const VIEW_FOLDER = 'src/views';
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'));
});

app.get('/books', function (req, res) {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'boocks.html'));
});

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

const PORT = 3000;
app.listen(PORT, () => debug(`Server is running in port` + chalk.green(PORT)));
