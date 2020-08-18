const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('dashboard');
});

app.get('/heroes', (req, res) => {
	res.render('heroes');
});

app.get('/heroes/:heroId', (req, res) => {
	res.render('heroDetail');
});

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
