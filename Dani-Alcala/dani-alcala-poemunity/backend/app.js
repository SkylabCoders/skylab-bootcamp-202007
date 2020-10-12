const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;
const Poem = require('./src/models/poemModel');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const db = mongoose.connect('mongodb://localhost/poemsAPI');

app.get('/', (req, res) => {
	res.send('My server is running');
});

const poemRouter = require('./src/routes/poemRouter')(Poem)

app.use('/api/poems', poemRouter)

app.listen(port, () => debug(`running on port ${port}`));
