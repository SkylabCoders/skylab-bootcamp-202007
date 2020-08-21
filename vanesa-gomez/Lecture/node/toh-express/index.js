const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// app es nuestro servidor, lo declaramos aquí
const app = express();
const port = 3000;
const nav = [
	{
		link: '/',
		title: 'Dashboard'
	},
	{
		link: '/heroes',
		title: 'Heroes'
	},
	{
		link: '/auth/signin',
		title: 'Signin'
	}
];
// para que me devuelva las peticiones de manera más reducida y clara (en la terminal)
app.use(morgan('tiny'));
// el bodyParser - parsea el body de las peticiones entrantes en un use, antes de que los handles puedan leer la petición - la limpia para poder leerla mejor - los body del html que es donde el usuario crea el post al clicar o en un input... Hace la magia de que los datos que traemos los mete en un objeto al que apunta la propiedad body donde tendremos todo en un formulario para poder coger los datos.
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);

app.use(cookieParser());
app.use(session({ secret: 'heroes' }));

require('./src/config/passport')(app);

// requestHandle, que recibe 3 argumentos (req, res y next) - Hay que invocar el next para ir al siguiente punto de ejecuación
// con cada petición de la página se ejecuta esto de abajo

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app
	.all('/', (req, res, next) => {
		if (req.user) {
			next();
		} else {
			res.redirect('auth/signin');
		}
	})

	.get('/', (req, res) => {
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
// si lo ejecutamos aquí () o dentro de shieldRoutes da igual porque no depende de nada de fuera
const shieldRoutes = require('./src/routes/shieldRoutes')();
// a nuestra aplicación le decimos que use esta ruta dentro de shieldRoutes
// vamos a crear el fichero shieldRoutes dentro de rutas
// creamos la base de datos
app.use('/shield', shieldRoutes);
// creamos rutas de autentificación (verificar quién eres) y autorización(qué puede hacer el usuario dentro de mi aplicación) ==> estas dos cosas significan auth
const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);
app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
