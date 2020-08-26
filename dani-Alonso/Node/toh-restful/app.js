const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT } = process.env;

const Hero = require('./src/models/heroModel');

// const company = require('./src/models/companyModel');

const User = require('./src/models/userModel');

const db = mongoose.connect('mongodb://localhost/heroAPI');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('My server works');
});

app.listen(PORT, () => debug(`Server running on port ${PORT}`));

// Routes
const heroRoutes = require('./src/routes/heroRoutes')(Hero);

const userRoutes = require('./src/routes/userRoutes')(User);
// const companyRoutes = require('./src/routes/companyRoutes')(Company);

app.use('/heroes', heroRoutes);
app.use('/users', userRoutes);
// app.use('/company', companyRoutes);
