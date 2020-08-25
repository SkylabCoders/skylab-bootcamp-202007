const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const Hero = require('./src/models/heroModel');
const User = require('./src/models/userModel');
const Company = require('./src/routes/companyModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroAPI');

app.get('/', (req, res) => {
	res.send('My server works...');
});

// Routes
const heroRouter = require('./src/routes/heroRouter')(Hero);
const userRouter = require('./src/routes/userRouter')(User);
const companyRouter = require('./src/routes/companyRouter')(Company);

app.use('/heroes', heroRouter);
app.use('/users', userRouter);
app.use('/companies', companyRouter);

app.listen(port, () => debug(`Running on port ${port}`));
