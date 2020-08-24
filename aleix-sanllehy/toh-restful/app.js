const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const Hero = require('./src/models/heroModel');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroAPI');

app.get('/', (req, res) => {
	res.send('My server works...');
});

const heroRouter = require('./src/routes/heroRouter')(Hero);

app.use('/heroes', heroRouter);

// app.listen(3000)
app.listen(port, () => debug(`Server is running on port ${port}`));
