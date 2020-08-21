const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { MongoClient } = require('mongodb');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 2222;
require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const nav = [
	{ link: '/', title: 'Home' },
	{ link: '/products', title: 'Products' },
	{ link: '/auth/profile', title: 'My profile' },
	{ link: '/auth/login', title: 'Login' }
];

app.use((req, res, next) => {
	debug('Organic Market works');
	next();
});
app.use(cookieParser());
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'organics';
	const collectionName = 'products';
	let client;
	(async function mongo() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection for home works');
			const db = client.db(dbName);
			const collection = db.collection(collectionName);
			const query = { rating: 5 };
			const products = await collection.find({ rating: 5 }).toArray();
			res.render('home', { nav, title: 'Home', products });
		} catch (error) {
			debug(error.stack);
		}
	})();
});

const mongoRoutes = require('./src/routes/mongoRoutes');

app.use('/getproducts', mongoRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);


const productsRoutes = require('./src/routes/productsRoutes')(nav);

app.use('/products', productsRoutes);

app.listen(port, () => debug(`Server is running on port`, chalk.cyan(port)));
