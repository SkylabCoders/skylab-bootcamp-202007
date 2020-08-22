const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();
const port = 3000;

const nav = [
	{
		link: '/products',
		title: 'Products'
	},
	{
		link: '/auth/signin', // 'auth/signin' si lo ponemos sin / delante de auth no coge la ruta inicial de la raíz
		title: 'Signin'
	},
	{
		link: '/cart',
		title: 'Cart'
	}
];

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);

app.use(cookieParser());
// contiene un obj con una propiedad secret que ponemos lo que queramos
app.use(
	expressSession({
		secret: 'food',
		resave: true,
		saveUninitialized: true
	})
);

require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app
	/* .all('/', (req, res, next) => {
		if (req.user) {
			next();
		} else {
			res.redirect('/auth/signin');
		}
	}) */
	.get('/', (req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'mongoProducts';
		const collectionName = 'products';
		let client;

		(async function mongo() {
			try {
				client = await MongoClient.connect(url);
				const db = client.db(dbName);
				const collection = db.collection(collectionName);
				const products = await collection.find().toArray();

				res.render('food-dashboard', {
					nav,
					title: 'Top Products',
					products: products.filter(product => product.rating === 5)
				});
				debug(products)
			} catch (error) {
				debug(error.stack);
			}

			client.close();
		})();
	});

const foodRoutes = require('./src/routes/foodRoutes')(nav);

app.use('/products', foodRoutes);

const insertRoutes = require('./src/routes/insertRoutes')();

app.use('/insertProducts', insertRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(port, () => debug(`Listener on port ${chalk.yellowBright(port)}`));
