const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signin', title: 'Signin' },
	{ link: '/auth/signup', title: 'Signup' },
	{ link: '/auth/profile', title: 'Profile' }
];

app.get('/', (req, res) => {
	if (req.user) {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		const collectionName = 'heroes';
		let client;

		(async function mongo() {
			try {
				client = await MongoClient.connect(url);
				debug('connection ok');

				const db = client.db(dbName);

				const collection = await db.collection(collectionName);

				const heroes = await collection.find().toArray();

				res.render('dashboard', {
					nav,
					title: 'Top Heroes',
					heroes: heroes.slice(0, 4)
				});
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
	} else {
		res.redirect('/auth/signin');
	}
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`));
