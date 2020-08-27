const express = require('express');

const debug = require('debug')('app');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

const mongoose = require('mongoose');
const Hero = require('./src/models/heroModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroAPI');

app.get('/', (req, res) => {
	res.send('my server works');
});

const heroRouter = require('./src/routes/heroRouter')(Hero);

app.use('/heroes', heroRouter);
app.listen(port, () => debug(`running on port ${port}`));
