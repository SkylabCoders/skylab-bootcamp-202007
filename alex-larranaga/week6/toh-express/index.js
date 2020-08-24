const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const session = require('express-session');

const path = require('path');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'heroes';
let client = null;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'heroes' })); //WE NEED TO DEFINE A SECRET AND PASS IT HERE.CAN BE WHATEVER WE WANT
require('./src/config/passport')(app);

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signof', title: 'SignOff' },
	{ link: '/auth/signup', title: 'SignUp' },
	{ link: '/auth/signin', title: 'SignIn' }
];

app.get('/', (req, res) => {
	(async function query() {
		try {
			client = await MongoClient.connect(url);
			debug('Connection established...');
			const db = await client.db(dbName);
			const collection = await db.collection('heroes');
			const heroes = await collection
				.find({ 'powerstats.strength': { $gt: 99 } })
				.toArray();
			debug(heroes);
			res.render('dashboard', {
				nav,
				title: 'My Heroes',
				heroes
			});
			client.close();
		} catch (error) {
			debug(error.stack);
		}
	})();
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRoutes);

app.listen(PORT, () => debug('server is running...'));
