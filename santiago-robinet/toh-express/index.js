const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');
const { MongoClient } = require('mongodb');


const app = express();
const port = process.env.PORT || 2427;

const config = {
	user:'santiadmin',
	password:'santi123!',
	server:'santidatabase.database.windows.net',
	database:'santiDB',
	option: {
		encrypt: true 
	}
};

sql.connect(config).catch(debug);

const { nav } = require('./heroMock');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	const url = 'mongodb://localhost:27017';
	const dbName = 'shieldHeroes';
	const  collectionName = 'heroes';
	let client;

	(async function mongo(){
		try{
			client = await MongoClient.connect(url);
			debug('asoidhjasoidjsaoidjas');

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

app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
