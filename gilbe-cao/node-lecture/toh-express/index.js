const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const config = {
	user: 'admindb',
	password: 'T0urofheroes',
	server: 'gcao.database.windows.net',
	database: 'tohdb',
	option: {
		encrypt: true // Because we are using Microsoft Azure
	}
};

sql.connect(config).catch(debug);

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	const collectionName = 'heroes';
	let client;

	try {
		(async function mongo() {
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

			client.close();
		})();
	} catch (error) {
		debug(error.stack);
	}
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();

app.use('/shield', shieldRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));
