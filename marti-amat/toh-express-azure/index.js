const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
//const heroes = require('./heroes');
const app = express();
const port = 3000;
const session = require('express-session');
const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signIn', title: 'SignIn' }

];

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({ secret: 'heroes' }));
require('./src/config/passport')(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
	debug('*********************');
	debug('Skylab es el mejor bootcamp del mundo!!!!!');
	debug('*********************');
	// Si no ponemos el next() este use, middleware no deja avanzar y se queda runeando siempre
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	if (req.user) {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		const collectionName = 'heroes';
		let client;

		(async function mongo() {
			try {
				client = await MongoClient.connect(url);
				debug('Connection stablished...');
				const db = client.db(dbName);
				const collection = db.collection(collectionName);
				res.render('signIn', {
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
const shieldRoutes = require('./src/routes/shieldRoutes')();
app.use('/shield', shieldRoutes);
const authRoutes = require('./src/routes/authRoutes')(nav);
app.use('/auth', authRoutes);
app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
