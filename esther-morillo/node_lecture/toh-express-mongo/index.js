const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');
const {
	MongoClient
} = require('mongodb');

// const heroes = require('./heroes');

const app = express();
const port = 3000;

const config = {
	user: 'Skylab2007',
	password: 'Gilbert_Cao',
	server: 'skylab2007-server.database.windows.net',
	database: 'toh-database',
	option: {
		encrypt: true // Because we are using Microsoft Azure
	}
};

sql.connect(config).catch(debug);

const nav = [{
		link: '/',
		title: 'Dashboard'
	},
	{
		link: '/heroes',
		title: 'Heroes'
	}
];

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	const collectionName = 'heroes';
	let client;

	(async function mongo() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection dashboard');
			const db = client.db(dbName);
			const collection = db.collection(collectionName);
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

// Creamos una nueva ruta IMPORTANTE INVOCAR LA FUNCIÓN QUE CREAMOS EN RUTAS (nav)
const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

// a nuestra aplicación le decimos que use esta ruta dentro de shieldRoutes
// vamos a crear el fichero shieldRoutes dentro de rutas
app.use('/shield', shieldRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));