const express = require('express');

const server = express();
const heroList = require('./views/hero.mock');

console.log(heroList);

server.set('view engine', 'ejs');

server.use(express.static(__dirname + '/views'));

server.get('/', (request, response) => {
    response.render('details');
});

server.get('/dashboard', (request, response) => {
    response.render('dashboard');
});

server.get('/list', (request, response) => {
    response.render('list');
});

server.listen(4200, () => console.log('Server running in port 4200...'));
