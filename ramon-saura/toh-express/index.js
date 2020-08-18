const express = require('express');
const path = require('path');
const debug = require('debug')('index');
const chalk = require('chalk');
const morgan = require('morgan');
const heroes = require('./heroes');

const index = express();
const port = process.env.PORT || 3000;

index.use(morgan('tiny'));
index.use(express.static(path.join(__dirname, 'public')));

index.set('view engine', 'ejs');
const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];
index.set('views', './src/views');

index.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Heroes',
		heroes: heroes.slice(0, 4)
	});
});

index.get('/heroes', (req, res) => {
	res.render('heroes', {
		nav,
		title: 'My Heros',
		heroes
	});
});
index.get('/detail/:hero', (req, res) => {
	res.render('detail', {
		nav,
		heroes: heroes[0]
	});
});

const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes);

index.use('/detail', heroRoutes);

index.listen(port, () =>
	debug(`Server is running in port ${chalk.yellow(port)}`)
);
