const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 2222;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	debug('Organic Market works');
	next();
});

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('Organic dashboard');
});

const productsRoutes = require('./src/routes/productsRoutes');

app.use('/getproducts', productsRoutes);

app.listen(port, () => debug(`Server is running on port`, chalk.cyan(port)));
