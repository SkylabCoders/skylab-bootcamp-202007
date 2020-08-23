const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 2222;

app.use(morgan('tiny'));

/* app.use((req, res, next) => {
	debug('Organic Market works');
	next();
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({ secret: 'products' }));
require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Home' },
	{ link: '/products', title: 'Products' },
	{ link: '/auth/profile', title: 'My profile' },
	{ link: '/auth/signin', title: 'Login' },
	{ link: '/cart', title: 'Cart' }
	// { link: '/auth/signout', title: 'Sign out' }
];

app
	.get('/', (req, res) => {
		const url =
			'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
		const dbName = 'organics';
		const collectionName = 'products';
		let client;

		(async function mongo() {
			try {
				client = await MongoClient.connect(url);
				debug('Connection for home works');
				const db = client.db(dbName);
				const collection = db.collection(collectionName);
				const products = await collection.find({ rating: 5 }).toArray();
				res.render('home', { nav, title: 'Home', products });
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
	})
	.post('/', (req, res) => {
		if (req.user) {
			const { addtocart } = req.body;
			debug('-- addtocart value from POST method -->', addtocart);
			const { _id } = req.user;
			const url =
				'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
			const dbName = 'organics';
			const collectionName = 'carts';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const result = await collection.findOne({ userid: ObjectId(_id) });
					debug('-- result -->', result);
					const filter = { userid: ObjectId(_id) };
					debug('-- filter -->', filter);

					// CART NOT EXISTS -> CREATE CART
					const createCart = {
						userid: ObjectId(_id),
						status: 'open',
						products: [{ productid: addtocart, qty: 1 }]
					};

					/* const { qty } = result.products[0].qty;
				debug('qty', qty);
				const quantity = Number(qty + 1);
				debug('quantity', quantity);

				const increaseQty = {
					$set: { products: { productid: addtocart, qty: quantity } }
				};
				debug('-- increase qty -->', increaseQty); */

					// CART EXISTS BUT PRODUCT NOT IN CART -> PUSH TO CART
					const pushToCart = {
						$push: { products: { productid: addtocart, qty: 1 } }
					};

					if (result) {
						// CART EXISTS -> PUSH TO CART
						debug('-- push to cart -->', pushToCart);
						await collection.updateOne(filter, pushToCart);
					} else {
						// CART NOT EXISTS -> CREATE CART
						debug('-- Go to create cart -->', createCart);
						await collection.insertOne(createCart);
					}
					res.redirect('/');
				} catch (error) {
					debug(error.stack);
				}
			})();
		} else {
			res.redirect('/auth/signin');
		}
	});

const mongoRoutes = require('./src/routes/mongoRoutes');

app.use('/getproducts', mongoRoutes);

const productsRoutes = require('./src/routes/productsRoutes')(nav);

app.use('/products', productsRoutes);

const findRoutes = require('./src/routes/findRoutes')(nav);

app.use('/find', findRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

const cartRoutes = require('./src/routes/cartRoutes')(nav);

app.use('/cart', cartRoutes);

app.listen(port, () =>
	debug(`Server is running in ${chalk.cyan('port: ')}${chalk.cyan(port)}`)
);
