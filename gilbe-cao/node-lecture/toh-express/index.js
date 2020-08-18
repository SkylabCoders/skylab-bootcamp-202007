const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const heroes = require('./heroes');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Heroes',
		heroes: heroes.slice(0, 4)
	});
});

const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes);

app.use('/heroes', heroRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));
