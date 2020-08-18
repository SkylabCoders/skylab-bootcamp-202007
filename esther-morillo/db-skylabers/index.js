const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const skylabers = require('./skylabers.mock');

const app = express();
const port = 3000;

const config = {
	user: 'Skylab2007',
	password: 'Gilbert_Cao',
	server: 'skylab2007-server.database.windows.net',
	database: 'toh-database',
	option: {
		encrypt: true // Because we are using Microsoft Azure
	}
};

sql.connect(config).catch(debug);

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/skylabers', title: 'Skylabers' }
];

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Skylabers',
		skylabers: skylabers.slice(0, 4)
	});
});

const skylaberRoutes = require('./src/routes/skylaberRoutes')(nav);

app.use('/skylabers', skylaberRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
