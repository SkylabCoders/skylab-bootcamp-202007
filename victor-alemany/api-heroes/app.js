const express = require('express');
const debug = require("debug")("app");
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();


const mongoose = require('mongoose');
const Hero = require('./src/models/heroModel');
const User = require('./src/models/userModel');
const Company = require('./src/models/companyModel');

const db = mongoose.connect('mongodb://localhost/heroAPI');

// ahora en el body-parser le llega la info para luego poder parsearla a json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const heroRoutes = require('./src/routes/heroRoutes')(Hero);

app.use('/api/heroes', heroRoutes);

const userRoutes = require('./src/routes/userRoutes')(User);

app.use('/users', userRoutes);

const companyRoutes = require('./src/routes/companyRoutes')(Company);

app.use('/companys', companyRoutes);

app.listen(port, ()=>debug(`Server is running on port ${port}`));