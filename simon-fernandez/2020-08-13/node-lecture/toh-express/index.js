const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');
const { MongoClient } = require('mongodb');
let heroes = require('./heroes');

const app = express();
const port = 3000;

const config = {
	user: 'simonbesteiro',
	password: 'Simon.78951236',
	server: 'skylibrary.database.windows.net',
	database: 'tohdb',
	option: {
		encrypt: true // Because Azure force us
	}
};

sql.connect(config).catch(debug);

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	let client;
	(async function query() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection established...');

			const db = client.db(dbName);

			const collection = await db.collection('heroes');

			heroes = await collection.find().limit(4).toArray();

			res.render('dashboard', {
				nav,
				title: 'Top Heroes',
				heroes
			});
		} catch (error) {
			debug(error.stack);
		}
	})();
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
