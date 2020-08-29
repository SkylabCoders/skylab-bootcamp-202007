const express = require('express');

const server = express();

server.set('view engine', 'ejs')

server.get('/', (request, response) => {
  response.render('dashboard');
});

server.get('/detail', (request, response) => {
  response.render('detail');
});

server.get('/list', (request, response) => {
    response.render('list');
  });

server.post('/detail', (request, response) => {
    console.log(request.body.h1)
    response.send('received')
    // response.render('detail');
  });

server.listen(4200, () => console.log('Server running for ejs toh project '));