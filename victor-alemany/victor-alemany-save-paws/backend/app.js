const express = require('express');
const debug = require("debug")("app");
const chalk = require('chalk');
const port = process.env.PORT || 4201;
const bodyParser = require('body-parser');
const mongoUrl = require('./src/config/server.config');
const app = express();
const mongoose = require('mongoose');

const Alert = require('./src/models/alertModel');
const User = require('./src/models/userModel');
const Category = require('./src/models/categoriesModel');

const db = mongoose.connect(mongoUrl.url, { useUnifiedTopology: true, useNewUrlParser: true })

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const alertRoutes = require('./src/routes/alertRoutes')(Alert);

app.use('/api/alerts', alertRoutes);

const userRoutes = require('../backend/src/routes/userRoutes')(User);

app.use('/api/user', userRoutes);

const categoriesRoutes = require('../backend/src/routes/categoriesRoutes')(Category);

app.use('/api/categories', categoriesRoutes);

app.listen(port, ()=>debug(`Server is running on port ${chalk.green(port)}`));