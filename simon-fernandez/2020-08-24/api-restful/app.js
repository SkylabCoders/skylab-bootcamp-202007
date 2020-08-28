const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT } = process.env || 3000;

app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/heroAPI');

const Heroes = require('./src/models/heroModel');
const Users = require('./src/models/userModel');

app.get('/', (req, res) => {
	res.send('my server works');
});

const heroRoutes = require('./src/routes/heroRoutes')(Heroes);

app.use('/api/heroes', heroRoutes);

const userRoutes = require('./src/routes/userRoutes')(Users);

app.use('/users', userRoutes);

app.listen(PORT, () => debug(`server running on port ${PORT}`));
