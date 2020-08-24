
const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Hero = require('./models/heroModel');

const heroRouter = require('./routes/heroRoutes')(Hero);


const app = express();
const { PORT } = process.env || 3000;
const db = mongoose.connect('mongodb://localhost:27017/TOH-REST')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/heroes', heroRouter)

app.get('/', (req, res) => {
    res.send('my server works');
})
app.listen(PORT, () => debug(`Runing server on port ${PORT}`));