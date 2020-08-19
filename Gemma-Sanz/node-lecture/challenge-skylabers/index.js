const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');
const chalk = require('chalk');
const sql = require('mssql');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('short'));

app.use(express.static(path.join(__dirname, 'public')));

const nav = [
	{ link: '/', title: 'Home' },
	{ link: '/skylabers', title: 'Skylabers' }
];

const config = {
	user: '',
	password: '',
	server: '',
	database: '',
	option: {
		encrypt: true
	}
};

sql.connect(config).catch(debug);

const skylabersRoutes = require('./src/routes/skylabersRoutes')(nav);

app.use('/', skylabersRoutes);

app.listen(PORT, () => debug(`Listening on port ${chalk.magentaBright(PORT)}`));
