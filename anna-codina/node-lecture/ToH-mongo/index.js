const express = require('express');
const path = require('path');

/* debug dependeces */
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

/* clean body info */
const bodyParser = require('body-parser');

/* mongo data base */
const { MongoClient } = require('mongodb');

/* For auth info */
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

/* Creating navBar dinamic info */
const nav = [
	{ link: '/', title: 'Dasboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signin', title: 'SignIn' },
	{ link: '/auth/profile', title: 'Profile' },
	{ link: '/auth/signout', title: 'SignOut' }
];

/* config app ass a server */
const app = express();
const port = process.env.PORT || 3001;

/* cofig morgan for more friendly debug */
app.use(morgan('tiny'));

/* clean body request info cofig wit body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* config dependeces of auth */
app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(app);

/* config public and views folders */
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

/* Main page */
app.get('/', (req, res) => {
	if (req.user) {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		const collectionName = 'heroes';
		let client;
		(async function query() {
			try {
				client = await MongoClient.connect(url);
				debug('conection stablished...');

				const db = client.db(dbName);

				const collection = await db.collection(collectionName);

				const mongoList = await collection.find().toArray();
				const dashboardList = mongoList.slice(0, 4);
				res.render('dashboard', { nav, dashboardList });
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
	} else {
		res.redirect('/auth/signin');
	}
});

/* create alternative routes */

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

/* display app in port */
app.listen(port, () =>
	debug(chalk.blue(`Server is running at port `) + chalk.green(port))
);
