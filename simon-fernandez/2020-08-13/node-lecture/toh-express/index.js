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
	user: 'simonbesteiro',
	password: 'Simon.78951236',
	server: 'skylibrary.database.windows.net',
	database: 'tohdb',
	option: {
		encrypt: true //Because Azure force us
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
