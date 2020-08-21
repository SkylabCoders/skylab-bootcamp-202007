const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3002;

const nav = [
	{ link: '/', title: 'Home' },
	{ link: '/list', title: 'Recipies' },
	{ link: '/detail', title: 'Details' },
	{ link: '/signin', title: 'SignIn' }
];

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const recipesRoutes = require('./src/routes/recipesRoutes')();
app.use('/list', recipesRoutes);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => debug(`Listening in port ${chalk.green(PORT)}...`));
