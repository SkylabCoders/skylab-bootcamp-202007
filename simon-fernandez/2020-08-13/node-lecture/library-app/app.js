const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const VIEW_FOLDER = 'src/views/';

app.use(morgan('tiny'));
const port = process.env.PORT || 1234;
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (request, response) {
	response.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'));
});

app.get('/books', function (request, response) {
	let hero = +request.query.heroId;
	response.sendFile(path.join(__dirname, VIEW_FOLDER, 'book.html'));
});
app.listen(port, () => {
	debug(`server running in port: ${port}`);
});
console.log('My server');
