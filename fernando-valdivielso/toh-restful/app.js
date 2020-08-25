const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const Hero = require('./src/models/heroModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroes-api');

app.get('/', (req, res) => {
  res.send('My server works...');
});

const heroRouter = require('./src/routes/heroRouter')(Hero);

app.use('/heroes', heroRouter);

app.listen(port, () => debug(`Running on port ${port}`));