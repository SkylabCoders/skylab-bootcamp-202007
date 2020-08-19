const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const path = require('path');
const morgan = require('morgan');
const heroes = require('./heroes');

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
		title: 'My heroes',
		heroes: heroes.splice(0, 4)
	});
});

const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes');

app.use('/shield', shieldRoutes);

app.listen(PORT, () => debug('server is running...'));
