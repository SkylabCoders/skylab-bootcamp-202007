const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

const { MongoClient } = require('mongodb');

const nav = [
	{ link: '/', title: 'Dasboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

// app.get('/', (req, res) => {
// 	const dashboardList = heroList.slice(0, 4);
// 	res.render('dashboard', { nav, dashboardList });
// });

const heroRoutes = require('./src/routes/heroRoutes')(nav);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

app.use('/heroes', heroRoutes);

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	let client;
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
});

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
