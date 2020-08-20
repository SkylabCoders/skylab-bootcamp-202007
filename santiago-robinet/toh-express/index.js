const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');



const app = express();
const port = process.env.PORT || 2427;

const nav = [
	{ link: '/', title: 'Dasboard' },
	{ link: '/heroes', title: 'Heroes' },
	{ link: '/auth/signin', title: 'Signin' },
	{ link: '/auth/signup', title: 'Signup' },
	{ link: '/auth/signout', title: 'Signout'},
	{ link: '/auth/profile', title: 'Profile'}
];


app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('tiny'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ));

app.use(cookieParser());
app.use(expressSession({secret: 'skylab'}));

require('./src/config/passport')(app);



app.use((req, res, next) => {

	debug('Skylab es el mejor bootcamp do mundo...');
	next();
})


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	const  collectionName = 'heroes';
	let client;

	(async function mongo(){
		try{
			client = await MongoClient.connect(url);

			const db = client.db(dbName);

			const collection = db.collection(collectionName);

			const heroes = await collection.find().limit(4).toArray();

			res.render('dashboard', {
				nav, title: 'Top Heroes', dashboardList:heroes
			})
			client.close()
		} catch (error){
			debug(error.stack)
		}
	}())
});

const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/routes/shieldRoutes')();

app.use('/shield', shieldRoutes)

const authRouter = require('./src/routes/authRoutes')(nav);

app.use('/auth', authRouter);

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
