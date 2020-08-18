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
	res.render('dashboard', { title: 'Top Heroes' });
});

app.get('/heroes', (req, res) => {
	res.render('heroes', {
		title: 'My Heroes',
		heroes: [
			{ id: 11, name: 'Dr Nice' },
			{ id: 12, name: 'Narco' },
			{ id: 13, name: 'Bombasto' },
			{ id: 14, name: 'Celeritas' },
			{ id: 15, name: 'Magneta' },
			{ id: 16, name: 'RubberMan' },
			{ id: 17, name: 'Dynama' },
			{ id: 18, name: 'Dr IQ' },
			{ id: 19, name: 'Magma' },
			{ id: 20, name: 'Tornado' }
		]
	});
});

app.get('/hero/:heroId', (req, res) => {
	res.render('hero-detail');
});

app.listen(PORT, () => debug('server is running...'));
