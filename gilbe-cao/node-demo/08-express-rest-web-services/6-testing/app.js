const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.ENV === 'Test') {
	const db = mongoose.connect('mongodb://localhost/heroAPI_Test');
} else {
	const db = mongoose.connect('mongodb://localhost/heroAPI-prod');
}

const port = process.env.PORT || 3000;
const Hero = require('./models/heroModel');
const heroRouter = require('./routes/heroRouter')(Hero);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', heroRouter);

app.get('/', (req, res) => {
	res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
	console.log(`Running on port ${port}`);
});

module.exports = app;
