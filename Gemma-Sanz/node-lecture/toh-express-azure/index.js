const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const heroes = require('./heroes');

const app = express();
const port = 3000;

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('dashboard', { title: 'Top Heroes' });
});

app.get('/heroes', (req, res) => {
	res.render('heroes', {
		nav,
		heroes: heroes[0]
	});
});

app.get('/heroes/:heroId', (req, res) => {
	res.render('heroDetail');
});

const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes);

app.use('/detail', heroRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
