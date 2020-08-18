const express = require('express');
const debug = require('debug')('app');

const morgan = require('morgan');
const path = require('path');
const { request } = require('express');

const HEROES = require('./heroes');

const app = express();
const port = 3000;
const dashboardList = HEROES.slice(0, 4);

const heroRoutes = require('./src/routes/heroRoutes')(
	HEROES,
	request,
	dashboardList
);

app.use(morgan('tiny'));
app.use('/', heroRoutes);
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
	debug(`server running in port: ${port}`);
});
