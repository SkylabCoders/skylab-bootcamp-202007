const express = require('express');
const { request, response } = require('express');

const server = express();
server.set('view engine', 'ejs');

server.get('/', (request, response) => {
  response.render('index');
});

server.get('/about', (request, response) => {
  response.render('about');
});

server.listen(4200, () => console.log('Server runing in port 4200 with express'));
