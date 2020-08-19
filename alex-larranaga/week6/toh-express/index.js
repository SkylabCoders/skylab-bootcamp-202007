const express = require('express');
const debug = require('debug')('app');

const path = require('path');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'heroes';
let client = null;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.get('/', (req, res) => {
	(async function query() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection established...');
			const db = await client.db(dbName);
			const collection = await db.collection('heroes');
			const heroes = await collection
				.find({ 'powerstats.strength': { $gt: 99 } })
				.toArray();
			debug(heroes);
			res.render('dashboard', {
				nav,
				title: 'My Heroes',
				heroes
			});
		} catch (error) {
			debug(error.stack);
		}
	})();
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes');

app.use('/shield', shieldRoutes);

app.listen(PORT, () => debug('server is running...'));
