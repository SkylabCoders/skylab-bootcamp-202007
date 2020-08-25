const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');
const { heroList, nav } = require('./heroMock');

const app = express();
const port = process.env.PORT || 3000;

const config = {
	user: 'acodina',
	password: '5717purpurin$',
	server: 'anna-skylab.database.windows.net',
	database: 'tohdb',
	opction: {
		encrypt: true // Because we are using Microsoft Azure
	}
};

sql.connect(config).catch(debug);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	const dashboardList = heroList.slice(0, 4);
	res.render('dashboard', { nav, dashboardList });
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/shield', shieldRoutes);

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
