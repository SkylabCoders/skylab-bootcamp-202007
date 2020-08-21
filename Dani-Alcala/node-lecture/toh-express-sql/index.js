const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql')
const heroes = require('./heroes');

const app = express();
const port = 3000;

const config = {
	user: 'danidani',
	password: 'D4n1d4n1',
	server: 'danidani.database.windows.net',
	database: 'DaniDani',
	option: {
		encrypt: true // because we use microsoft azure
	}
}

sql.connect(config).catch(debug)

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Heroes',
		heroes: heroes.slice(0, 4)
	});
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`));
