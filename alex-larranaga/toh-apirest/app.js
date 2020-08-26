const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT } = process.env;

const Hero = require('./src/models/heroModel');

const db = mongoose.connect('mongodb://localhost/heroAPI');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('My server works');
});

app.listen(PORT, () => debug(`Server running on port ${PORT}`));

// Routes
const heroRoutes = require('./src/routes/heroRoutes')(Hero);

app.use('/heroes', heroRoutes);
