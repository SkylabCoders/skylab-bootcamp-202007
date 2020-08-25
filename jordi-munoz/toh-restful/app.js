const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/heroes-api');

app.get('/', (req, res) => {
  res.send('My server works...');
});

const heroRouter = require('./src/routes/heroRouter')();

app.use('/heroes', heroRouter);

const companyRouter = require('./src/routes/heroRouter')();

app.use('/companies', companyRouter);

app.listen(port, () => debug(`Running on port ${port}`));