const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

const Hero = require('./src/models/heroModel');
const User = require('./src/models/userModel');
// const Worker = require('./src/models/workerModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroesAPI');

app.get('/', (req, res) => {
	res.send('My server works...');
});

const heroRouter = require('./src/routes/heroRouter')(Hero);

app.use('/heroes', heroRouter);

const userRouter = require('./src/routes/userRouter')(User);

app.use('/users', userRouter);

// TODO
// const workerRouter = require('./src/routes/workerRouter')(Worker);
// app.use('/workers', workerRouter);

// app.listen(3000)
app.listen(port, () => debug(`Server is running on port ${port}`));
