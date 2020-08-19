const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const {
	MongoClient
} = require('mongodb');

// const heroes = require('./heroes');

const app = express();
const port = 3000;

const nav = [{
		link: '/',
		title: 'Dashboard'
	},
	{
		link: '/heroes',
		title: 'Heroes'
	}
];

// para que me devuelva las peticiones de manera más reducida y clara (en la terminal)
app.use(morgan('tiny'));

// el bodyParser - parsea el body de las peticiones entrantes en un use, antes de que los handles puedan leer la petición - la limpia para poder leerla mejor
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}));

// requestHandle, que recibe 3 argumentos (req, res y next) - Hay que invocar el next para ir al siguiente punto de ejecuación
// con cada petición de la página se ejecuta esto de abajo
app.use((req, res, next) => {
	debug('*********************************************');
	// todo lo que hagamos aquí va a oocurrir en este evento/proceso y va a afectar a todo lo que haya después de este use
	debug('Skylab es el mejor bootcamp de toda Barcelona y de todo el mundo!');
	// el use no deja seguir hacia abajo, no deja seguir el evento del servidor
	debug('*********************************************');
	// hay que permitir que el evento siga su camino
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