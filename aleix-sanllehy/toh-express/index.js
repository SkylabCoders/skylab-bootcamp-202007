const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3333;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs'); // app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('dashboard');
});

app.get('/heroes', (req, res) => {
	res.render('list');
});

app.get('/heroes/:heroId', (req, res) => {
	res.render('hero');
});

app.listen(port, () =>
	debug(`Server is running in ${chalk.cyan('port: ')}${chalk.cyan(port)}`)
);
