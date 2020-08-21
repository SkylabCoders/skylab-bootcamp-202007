const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const ROUTES = require('./src/routes/ROUTES');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();
const port = 3010;

app.use(morgan('dev'));

/* configurar middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({
	secret: 'heroes',
	resave: true,
	saveUninitialized: false
}));

require('./src/config/passport')(app);

/* otros */
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: ROUTES.signup.path, title: 'Sign up' },
	{ link: ROUTES.signin.path, title: 'Sign in' },
	{ link: ROUTES.signout.path, title: 'Sign out' }
];

const dashboardRoutes = require('./src/routes/dashboardRoutes')(nav);
app.use('/', dashboardRoutes);

const heroRoutes = require('./src/routes/heroRoutes')(nav);
app.use('/heroes', heroRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);
app.use('/auth', authRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();
app.use('/shield', shieldRoutes);

const removeDuplicatesRoutes = require('./src/routes/removeDuplicatesRoutes')();
app.use('/db', removeDuplicatesRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));