const express = require('express');

const server = express();

/**
 * server.get('/', (req, res) => {
 *  res.send('Hello Express');
 * })
 *
 * server.get('/about', (req, res) => {
 *  res.send(About is working...);
 * })
 */

server.listen(4242, () => {
	console.log('Express Server is running...');
});

/**
 * See other frameworks:
 *
 * Koa
 * Sails
 * Meteor
 */
