const express = require('express');
const path = require('path');
const debug = require('debug')('index');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const coockieParser = require('cookie-parser');
const expressSession = require('express-session');

const index = express();
const port = process.env.PORT || 3000;

index.use(morgan('tiny'));
index.use(express.static(path.join(__dirname, 'public')));

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));
index.use(coockieParser());
index.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(index);

index.set('view engine', 'ejs');
const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth', title: 'Login' }
];
index.set('views', './src/views');

const mainRoutes = require('./src/routes/mainRoutes')(nav);

index.use('/', mainRoutes);

const heroRoutes = require('./src/routes/heroRoutes')(nav);

index.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();

index.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

index.use('/auth', authRoutes);

index.listen(port, () =>
	debug(`Server is running in port ${chalk.yellow(port)}`)
);
