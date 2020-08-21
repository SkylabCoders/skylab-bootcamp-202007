const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

// const skylabers = require('./skylabers.mock');

const app = express();
const port = 3000;

const config = {
	user: 'Esther',
	password: '123_123',
	server: 'skilibrary.database.windows.net',
	database: 'tourH',
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



const skylaberRoutes = require('./src/routes/skylaberRoutes')(nav);

app.use('/', skylaberRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
