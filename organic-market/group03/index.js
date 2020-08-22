const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

const PORT = 3003;

const nav = [
	{ link: '/', title: 'Home' },
	{ link: '/list', title: 'Products' },
	{ link: '/auth/signin', title: 'SignIn' },
	{ link: '/auth/profile', title: 'Profile' }
];

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.redirect('/list');
});

const recipesRoutes = require('./src/routes/recipesRoutes')(nav);

app.use('/list', recipesRoutes);

const dbRoutes = require('./src/routes/dbRoutes.js')();

app.use('/db', dbRoutes);

const authRoutes = require('./src/routes/authRoutes.js')(nav);

app.use('/auth', authRoutes);

app.listen(PORT, () => debug(`Listening in port ${chalk.green(PORT)}...`));
