const express = require('express');
const path = require('path');
const debug = require('debug');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const coockieParser = require('cookie-parser');
const expressSession = require('express-session');

const index = express();
const port = process.env.PORT || 3001;

index.use(morgan('tiny'));
index.use(express.static(path.join(__dirname, 'public')));

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));
index.use(coockieParser());
index.use(expressSession({ secret: 'marketList' }));
require('./src/config/passport')(index);

index.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'List' },
	{ link: '/auth', title: 'Login' }
];

index.set('views', './src/views');

const mainRoutes = require('./src/routes/mainRoutes')(nav);

index.use('/', mainRoutes);

const marketListRoutes = require('./src/routes/marketListRoutes')();

index.use('/marketList', marketListRoutes);

const authRoutes = require('./src/routes/authRoutes')();

index.use('/auth', authRoutes);

index.listen(port, () =>
	debug(`Server is running in port ${chalk.yellow(port)}`)
);
