const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');
const { MongoClient } = require('mongodb');
const { nav } = require('./heroMock');

const app = express();
const port = process.env.PORT || 3001;

const config = {
	user: 'acodina',
	password: '5717purpurin$',
	server: 'anna-skylab.database.windows.net',
	database: 'tohdb',
	opction: {
		encrypt: true // Because we are using Microsoft Azure
	}
};

sql.connect(config).catch(debug);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	const collectionName = 'heroes';
	let client;
	(async function query() {
		try {
			client = await MongoClient.connect(url);
			debug('conection stablished...');

			const db = client.db(dbName);

			const collection = await db.collection(collectionName);

			const mongoList = await collection.find().toArray();
			const dashboardList = mongoList.slice(0, 4);
			res.render('dashboard', { nav, dashboardList });
		} catch (error) {
			debug(error.stack);
		}
		client.close();
	})();
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes');

app.use('/shield', shieldRoutes);

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
