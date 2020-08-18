const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.render('dashboard');
});

app.get('/heroes', (req, res) => {
	res.render('heroes');
});

app.get('/hero/:heroId', (req, res) => {
	res.render('hero-detail');
});

app.listen(PORT, () => debug('server is running...'));
