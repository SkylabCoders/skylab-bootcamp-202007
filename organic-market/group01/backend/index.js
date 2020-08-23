const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const nav = [
	{ link: '/', title: 'Home' },
	{ link: '/market', title: 'Products' },
	{ link: '/auth/signin', title: 'Log in' }
];

app.use(morgan('tiny'));

app.use((request, response, next) => {
	debug('***********************************************');

	debug('GROUP 01');

	debug('***********************************************');

	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'organic-market' }));
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
		const dbName = 'market';
		let client;
		(async function query() {
			try {
				client = await MongoClient.connect(url);
				debug('Connection established...');

				const db = client.db(dbName);

				const collection = await db.collection('market');

				const market = await collection.find().limit(4).toArray();
				res.render('cart', {
					nav,
					title: 'Market Home',
					market
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});

const marketApi = require('./src/routes/marketApi');

app.use('/api', marketApi);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
