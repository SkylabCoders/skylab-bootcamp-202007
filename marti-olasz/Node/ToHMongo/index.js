const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 2427;

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

const nav = [
	{ link: '/', title: 'Dasboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	const dashboardList = [{}, {}, {}, {}].slice(0, 4);
	res.render('dashboard', { nav, dashboardList });
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes.js')(nav);

app.use('/shield', shieldRoutes);

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
