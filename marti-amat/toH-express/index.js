const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');

const HEROES = require('./heroes');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Heroes',
		heroes: HEROES.slice(0, 4)
	});
});
const heroRoutes = require('./src/routes/heroRoutes')(nav, HEROES);

app.use('/heroes', heroRoutes);

app.listen(PORT, () => debug('server is running...'));
