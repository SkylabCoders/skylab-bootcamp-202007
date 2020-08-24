const express = require('express');
const debug = require('debug')('app');

const app = express();
const { PORT: port } = process.env;

const mongoose = require('mongoose');
const Hero = require('./models/heroMode');

mongoose.connect('mongodb://localhost/heroes');

app.route('/heroes').get((req, res) => {
	Hero.find({}, (err, heroes) => {
		if (err) res.send(err);
		res.json(heroes);
	});
});

app.get('/', (req, res) => {
	res.send('My server works!');
});

app.listen(port, debug(`Server is running at port ${port}...`));
