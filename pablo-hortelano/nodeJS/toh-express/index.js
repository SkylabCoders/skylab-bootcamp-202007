const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('dashboard');
});

app.get('/heroes', (req, res) => {
	res.send('Hero List  Works');
});

app.get('/heroes/:heroId', (req, res) => {
	res.send('Detail works');
});

app.listen(port, () => {
	console.log(`Listening in port ${port}`);
});
