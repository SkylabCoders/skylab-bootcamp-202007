const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.use(morgan('dev'));

// Con esto evitamos que el use se quede interceptando un evento y transformandolo y creando un efecto secundario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	debug('*********************');
	debug('Skylab es el mejor bootcamp del mundo!!!!!');
	debug('*********************');
	// Si no ponemos el next() este use, middleware no deja avanzar y se queda runeando siempre
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

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

			const collection = db.collection(collectionName);

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

// Para heroes decimos que use la configuración de heroRoutes
app.use('/heroes', heroRoutes);

// shieldRoutes la requerimos y como es una función hay que invocarla, lleve argumentos (como es el caso), o no lleva argumentos!
const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
