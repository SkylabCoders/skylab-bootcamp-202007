const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { MongoClient } = require('mongodb');
let heroes = require('./heroes');

const app = express();
const port = 3000;

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signin', title: 'Sign in' },
	{ link: '/auth/signup', title: 'Sign up' },
	{ link: '/auth/profile', title: 'Profile' }
];

app.use(morgan('tiny'));

app.use((request, response, next) => {
	debug('***********************************************');
	debug('Done by @simonbesteiro');
	debug('***********************************************');

	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'bombasto' }));
require('./src/config/paspport')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app
	.route('/')
	.all((req, res, next) => {
		if (req.user) {
			next();
		} else {
			res.redirect('/auth/signin');
		}
	})
	.get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		let client;
		(async function query() {
			try {
				client = await MongoClient.connect(url);
				debug('Connection established...');

				const db = client.db(dbName);

				const collection = await db.collection('heroes');

				heroes = await collection.find().limit(4).toArray();
				res.render('dashboard', {
					nav,
					title: 'Top Heroes',
					heroes
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
