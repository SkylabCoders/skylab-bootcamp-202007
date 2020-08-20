const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

// Aixo s'executa i afecta a tot el que hi hagi despres d'aquest use. Es fa justament dps de definir el server.
// Intercepta totes les request que es fan (x fer un log suposo) i dps deixa seguir amb el next
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'heroes' }));
require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signin', title: 'Sign In' },
	{ link: '/auth/signup', title: 'Sign Up' }
];

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	let client = null;

	if (!req.user) {
		res.redirect('/auth/signin');
	}

	(async function query() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection established...');

			const db = await client.db(dbName);

			const collection = await db.collection('heroes');

			const filterHeroes = await collection
				.find({
					$and: [
						{ 'powerstats.strength': { $gt: 99 } },
						{ 'powerstats.combat': { $gt: 99 } },
						{ 'powerstats.power': { $gt: 99 } },
						{ 'powerstats.speed': { $gt: 99 } }
					]
				})
				.toArray();

			res.render('dashboard', {
				nav,
				title: 'My Heroes',
				heroes: filterHeroes
			});
		} catch (error) {
			debug(error.stack);
		}
	})();
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));
