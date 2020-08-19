const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3333;

app.use(morgan('tiny'));

/* app.use((req, res, next) => {
	debug('Skylab es the best s*** mankind ever made');
	next();
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs'); // app.set('view engine', 'pug');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	const collectionName = 'heroes';
	let client;

	(async function mongo() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection stablished...');
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
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

app.listen(port, () =>
	debug(`Server is running in ${chalk.cyan('port: ')}${chalk.cyan(port)}`)
);
