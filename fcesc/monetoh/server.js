const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3010;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/signup', title: 'Sign up' },
	{ link: '/signin', title: 'Sign in' },
	{ link: '/signout', title: 'Sign out' }
];

const dashboardRoutes = require('./src/routes/dashboardRoutes')(nav);
app.use('/', dashboardRoutes);

const heroRoutes = require('./src/routes/heroRoutes')(nav);
app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();
app.use('/shield', shieldRoutes);

// const authRoutes = require('./src/routes/authRoutes')();
// app.use('/auth', authRoutes);

// const removeDuplicatesRoutes = require('./src/routes/removeDuplicatesRoutes')();
// app.use('/removeDuplicates', removeDuplicatesRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));