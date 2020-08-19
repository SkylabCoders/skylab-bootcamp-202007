const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const heroes = require('./heroes');

const dashboardList = heroes.slice(1, 5);

const app = express();
const port = 3333;

const config = {
	user: 'alishpls',
	password: 'Aleix-toh',
	server: 'aleix-skylab.database.windows.net',
	database: 'aleix-toh-db',
	option: {
		encrypt: true // Because we are using Microsoft Azure
	}
};

sql.connect(config).catch(debug);

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs'); // app.set('view engine', 'pug');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Heroes',
		heroes: dashboardList
	});
});

const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes);

app.use('/heroes', heroRoutes);

app.listen(port, () =>
	debug(`Server is running in ${chalk.cyan('port: ')}${chalk.cyan(port)}`)
);
