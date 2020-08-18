const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

const nav = [
	{ link: '/', title: 'Dasboard' },
	{ link: '/skylabers', title: 'Skylabers' }
];

const config = {
	user: 'alishpls',
	password: 'Aleix-toh',
	server: 'aleix-skylab.database.windows.net',
	database: 'aleix-anna-skylabers-db',
	opction: {
		encrypt: true // Because we are using Microsoft Azure
	}
};
sql.connect(config).catch(debug);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'));

const skylabersRoutes = require('./src/routes/skylabersRoutes')(nav);

app.use('/', skylabersRoutes);

app.listen(PORT, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(PORT))
);
