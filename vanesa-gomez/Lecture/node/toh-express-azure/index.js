const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const heroes = require('./heroes');

const app = express();
const port = 3000;

const config = {
	user: 'admindb',
	password: 'tango182010!',
	server: 'skylab11.database.windows.net',
	database: 'skylab-db',
	option: {
		encrypt: true
	}
};

sql.connect(config).catch(debug);

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Heroes',
		heroes: heroes.slice(0, 4)
	});
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
