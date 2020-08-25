const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();
const port = process.env.PORT || 2427;

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dasboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signin', title: 'Signin' }
];

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';

	let client = null;
	(async () => {
		try {
			client = await MongoClient.connect(url);

			const db = client.db(dbName);

			const collection = await db.collection('heroes');

			const dashboardList = await collection.find().limit(4).toArray();
			res.render('dashboard', { nav, dashboardList });
		} catch (err) {
			debug(err);
		}
		client.close();
	})();
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes.js')();

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes.js')(nav);

app.use('/auth', authRoutes);

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
