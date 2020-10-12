const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { url } = require('./Database/DATABASE_CONFIG');

const app = express();
const port = process.env.PORT || 4000;
const Diver = require('./src/models/diverModel');
const DiveSite = require('./src/models/diveSiteModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
	.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
	.catch(debug);

const diverRoutes = require('./src/Routes/diverRoutes')(Diver);

app.use('/api/diver', diverRoutes);

const diveSitesRoutes = require('./src/Routes/diveSitesRoutes')(DiveSite);

app.use('/api/dive-sites', diveSitesRoutes);

app.listen(port, () => debug(`Back-end server running on port ${port}`));
