const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Hero = require('./src/models/heroModel');
const User = require('./src/models/userModel');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroesAPI');

app.get('/', (req, res) => {
	res.send('My server works');
});

const heroRouter = require('./src/routes/heroRoute')(Hero);

app.use('/heroes', heroRouter);

const authRouter = require('./src/routes/authRoute')(User);

app.use('/auth', authRouter);

app.listen(
	PORT,
	debug(chalk.cyanBright(`Port working in port ${chalk.blue(PORT)}`))
);
