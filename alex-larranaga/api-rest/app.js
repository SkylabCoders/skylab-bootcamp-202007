const express = require('express');
const debug = require('debug')('app');
const HeroApi = require('./models/heroModel'); //IMPORT MODEL (SCHEMA)
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const heroRouter = require('./routes/heroRoutes')(HeroApi);

const db = mongoose.connect('mongodb://localhost:27017/heroes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/heroes', heroRouter);

app.get('/', (req, res) => {
	res.send('Hola-');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	debug(`SERVER RUNNING ON PORT ${PORT}`);
});
