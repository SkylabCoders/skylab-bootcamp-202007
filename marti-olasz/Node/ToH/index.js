const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 2427;

const { heroList, nav } = require('./heroMock');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	const dashboardList = heroList.slice(0, 4);
	res.render('dashboard', { nav, dashboardList });
});

const heroRoutes = require('./src/routes/heroRoutes')(nav, heroList);

app.use('/heroes', heroRoutes);

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
