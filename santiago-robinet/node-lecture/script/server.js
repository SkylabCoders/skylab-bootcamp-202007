const express = require('express');

const server = express();

server.set('view engine', 'ejs');// esto va siempre que usemos EJS

server.get('/', (request, response) => {
  response.render('index');
});

server.get('/about', (request, response) => {
  response.render('about');
});

server.listen(4200, () => console.log('Server running in port 4200...'));
