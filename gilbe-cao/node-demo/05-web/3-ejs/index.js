const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
	res.render('index');
});

server.get('/about', (req, res) => {
	res.render('about');
});

server.listen(4242, () => {
	console.log('Express Server is running...');
});

/**
 * Check also other embedded javascript templating languages like:
 * pug use to be called jade
 * handlebars
 * ejs is the simplest one
 * react + jsx can be used as another templating language in the server
 */
