const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

/* app.use((req, res, next) => {
	debug('Skylab is the best s*** mankind ever made');
	next();
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs'); // app.set('view engine', 'pug');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/skylabers', title: 'Skylabers' },
	{ link: '/auth/signin', title: 'Sign in' },
	{ link: '/auth/profile', title: 'My profile' }
	// { link: '/auth/signout', title: 'Sign out' }
];

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldSkylabers';
	const collectionName = 'skylabers';
	let client;

	(async function query() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection stablished...');
			const db = client.db(dbName);
			const collection = await db.collection(collectionName);
			let skylabers = await collection.find().toArray();
			const orderDesc = (skylaber1, skylaber2) => {
				let result = 0;
				if (skylaber1.challenges > skylaber2.challenges) {
					result = -1;
				} else if (skylaber1.challenges < skylaber2.challenges) {
					result = 1;
				}
				return result;
			};
			skylabers = skylabers.sort(orderDesc);
			res.render('dashboard', {
				nav,
				title: 'Top Heroes',
				skylabers: skylabers.slice(0, 4)
			});
		} catch (error) {
			debug(error.stack);
		}
		client.close();
	})();
});

const skylabersRoutes = require('./src/routes/skylabersRoutes')(nav);

app.use('/skylabers', skylabersRoutes);

const beatlesRoutes = require('./src/routes/beatlesRoutes');

app.use('/beatles', beatlesRoutes);

app.listen(PORT, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(PORT))
);
