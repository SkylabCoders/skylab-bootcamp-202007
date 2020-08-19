const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3010;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

const dashboardRoutes = require('./src/routes/dashboardRoutes')(nav);
app.use('/', dashboardRoutes);

const heroRoutes = require('./src/routes/heroRoutes')(nav);
app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();
app.use('/shield', shieldRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));