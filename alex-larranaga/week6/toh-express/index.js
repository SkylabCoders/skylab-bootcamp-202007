const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const path = require('path');
const morgan = require('morgan');
const heroes = require('./heroes');
const heroRoutes = require('./src/routes/heroRoutes');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		heroes: heroes.splice(0, 4)
	});
});

const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes);

app.use('/heroes', heroRoutes);

app.get('/heroes', (req, res) => {
	res.render('heroes', {
		nav,
		heroes: heroes
	});
});

app.get('/hero/:heroId', (req, res) => {
	res.render('hero-detail');
});

app.listen(PORT, () => debug('server is running...'));
