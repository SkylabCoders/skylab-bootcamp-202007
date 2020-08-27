const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const Hero = require('./src/models/heroModel');
const User = require('./src/models/userModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroAPI');

app.get('/', (req, res) => {
	res.send('My server works...');
});

const heroRouter = require('./src/routes/heroRouter')(Hero);
const userRouter = require('./src/routes/userRouter')(User);

app.use('/heroes', heroRouter);
app.use('/users', userRouter);

app.listen(port, () => debug(`Running on port ${port}`));
