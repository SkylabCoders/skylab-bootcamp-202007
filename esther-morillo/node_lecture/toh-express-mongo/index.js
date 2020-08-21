const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
// con bodyParser inserta dentro del obj request una propiedad body para cogerla en post
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')


// app es nuestro servidor, lo declaramos aquí
const app = express();
const port = 3000;

const nav = [{
		link: '/',
		title: 'Dashboard'
	},
	{
		link: '/heroes',
		title: 'Heroes'
	},
	{
		link: '/auth/signin', // 'auth/signin' si lo ponemos sin / delante de auth no coge la ruta inicial de la raíz
		title: 'Signin'
	}

];

// para que me devuelva las peticiones de manera más reducida y clara, que sea legible
app.use(morgan('tiny'));

// el bodyParser - parsea el body de las peticiones entrantes en un use, antes de que los handles puedan leer la petición - la limpia para poder leerla mejor - los body del html que es donde el usuario crea el post al clicar o en un input... Hace la magia de que los datos que traemos los mete en un objeto al que apunta la propiedad body donde tendremos todo en un formulario para poder coger los datos.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}));

// con passport cualquier req que hagamos al servidor passport nos ayudará a gestionar esa autentificación (con usuario y contraseña, con google...)
// session nos permite crear una sesión de usuario con el usuario y contraseña que hemos enviado
// con cookie-parser setearemos una cookie en esa llamada, que viajará del browser al servidor para saber si existe o no. Desloguearse será eliminar esa cookie
app.use(cookieParser());
// contiene un obj con una propiedad secret que ponemos lo que queramos
app.use(expressSession({ 
	secret: 'heroes',
	resave: true,
	saveUninitialized: true
 }));

require('./src/config/passport')(app);

// requestHandle, que recibe 3 argumentos (req, res y next) - Hay que invocar el next para ir al siguiente punto de ejecuación
// con cada petición de la página se ejecuta esto de abajo
/* app.use((req, res, next) => {
	debug('*********************************************');
	// todo lo que hagamos aquí va a oocurrir en este evento/proceso y va a afectar a todo lo que haya después de este use
	debug('Skylab es el mejor bootcamp de toda Barcelona y de todo el mundo!');
	// el use no deja seguir hacia abajo, no deja seguir el evento del servidor
	debug('*********************************************');
	// hay que permitir que el evento siga su camino
	next();
}); */

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');


app
.all('/', (req, res, next) => {
	if(req.user) {
		next();
	} else {
		res.redirect('/auth/signin');
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
// empieza así la ruta
app.use('/auth', authRoutes);


app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));