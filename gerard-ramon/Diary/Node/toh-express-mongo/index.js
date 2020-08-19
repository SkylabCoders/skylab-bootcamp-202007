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
	user: 'jordi',
	password: 'Skylab202007',
	server: 'tohdb-jordi.database.windows.net',
	database: 'tohdb',
	option: {
		encrypt: true // because I using Microsoft Azure
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
	let client = null;

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

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));
