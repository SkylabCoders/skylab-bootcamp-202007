const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const { MongoClient } = require('mongodb');

// app es el servidor
const app = express();
const port = 3036;

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signin', title: 'SignIn' }
	//	{ link: '/signout', title: 'SignOut' }
];

app.use(morgan('dev'));

// Con esto evitamos que el use se quede interceptando un evento y transformandolo y creando un efecto secundario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookieParser te devuelve una fn, por lo tanto la tendremos que llamar luego
app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));

require('./src/config/passport')(app);

app.use((req, res, next) => {
	debug('*********************');
	debug('Skylab es el mejor bootcamp del mundo!!!!!');
	debug('*********************');
	// Si no ponemos el next() este use, middleware no deja avanzar y se queda runeando siempre
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Aquí le decimos que busque las vistas todo dentro de src/views, en auth tendremos que poner auth/___
app.set('views', './src/views');

app.set('view engine', 'ejs');

app
	.all('/', (req, res, next) => {
		if (req.user) {
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

// Para heroes decimos que use la configuración de heroRoutes, el primer fragmento, cualquier ruta que definamos dentro de heroRoutes tendrá un fragmento inicial que será /heroes
app.use('/heroes', heroRoutes);

// shieldRoutes la requerimos y como es una función hay que invocarla, lleve argumentos (como es el caso), o no lleva argumentos!
const shieldRoutes = require('./src/routes/shieldRoutes');

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
