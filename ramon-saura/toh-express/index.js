const express = require('express');
const path = require('path');
const debug = require('debug')('index');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');
const { MongoClient } = require('mongodb');

const index = express();
const port = process.env.PORT || 3000;

const config = {
	user: 'mons',
	password: 'Marina2016',
	server: 'skylabmons.database.windows.net',
	database: 'toh-database',
	option: { encrypt: true /* because we are using Microsoft Aseure */ }
};

sql.connect(config).catch(debug);

index.use(morgan('tiny'));
index.use(express.static(path.join(__dirname, 'public')));

index.set('view engine', 'ejs');
const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];
index.set('views', './src/views');

index.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	let client;
	(async function query() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection stablished...');

			const db = client.db(dbName);

			const colection = await db.collection('heroes');

			const heroesList = await colection.find().toArray();

			res.render('dashboard', {
				nav,
				title: 'My Heros',
				heroes: heroesList.slice(0, 4)
			});
		} catch (error) {
			debug(error.stack);
		}
		client.close();
	})();
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

index.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

index.use('/shield', shieldRoutes);

index.listen(port, () =>
	debug(`Server is running in port ${chalk.yellow(port)}`)
);
