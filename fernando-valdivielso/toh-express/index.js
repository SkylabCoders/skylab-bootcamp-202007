const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
// const sql = require('mssql');

const app = express(); // app es el servidor (nuestra aplicacion de servidor)
const port = 3000;

app.use(morgan('tiny'));

app.use(bodyParser.json()); // middleware.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(app);

// app.use((req, res, next) => {       // requestHandler. Intercepta todas las peticiones
//     debug("Skylab es el mejor bootcamp")
// })

// =====================
// const config = {                        // SQL database config
//     user: 'hydroFlask',
//     password: 'Skylab123',              // el password no se envia al cliente, porque no está en render
//     server: 'dfkylab.database.windows.net',
//     database: 'ToH-db',
//     option: {
//         encrypt: true  // because we are using MS Azure
//     }
// }

// sql.connect(config).catch(debug)

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views'); // los render van a buscar las vistas a la carpeta view
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signup', title: 'Sign Up' },
	{ link: '/auth/signin', title: 'Sign In' },
	{ link: '/auth/signout', title: 'Sign Out' }
];

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	const collectionName = 'heroes';
	let client;

	try {
		(async function mongo() {
			client = await MongoClient.connect(url);
			debug('Connection stablished... :)');

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

const heroRoutes = require('./src/routes/heroRoutes')(nav); // esta const apunta al resultado de la funcion router en heroRoutes.js pasandole los parametros nav y heroes

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav); // llama a la funcion router, con parametro 'nav' en shieldRoutes.js

app.use('/shield', shieldRoutes); // utiliza... ??

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes); // gestion de autorizacion y autenticacion

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`));
