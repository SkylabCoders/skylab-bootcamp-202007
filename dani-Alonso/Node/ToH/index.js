const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

const { MongoClient } = require('mongodb');

const nav = [
	{ link: '/', title: 'Dasboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signup', title: 'SignUp' },
	{ link: '/auth/signin', title: 'SignIn' },
	{ link: '/auth/signout', title: 'Signout' },
	{ link: '/auth/profile', title: 'Profile' }
];

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(
	session({
		secret: 'heroes',
		resave: true,
		saveUninitialized: true
	})
);
require('./src/config/passport')(app);

const heroRoutes = require('./src/routes/heroRoutes')(nav);

const shieldRoutes = require('./src/routes/shieldRoutes');

app.use('/shield', shieldRoutes);

app.use('/heroes', heroRoutes);

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	let client;

	if (req.user) {
		(async function query() {
			try {
				client = await MongoClient.connect(url);
				debug('Connection stablished...');
				const db = client.db(dbName);
				const collection = await db.collection('heroes');
				const heroes = await collection.find().toArray();
				res.render('dashboard', { nav, dashboardList: heroes.slice(0, 4) });
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
	} else {
		res.redirect('/auth/signin');
	}
});
const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
