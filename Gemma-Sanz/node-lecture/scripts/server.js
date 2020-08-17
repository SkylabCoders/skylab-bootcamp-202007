// lo importamos
const express = require('express');

// Creo servidor invocando express, que directamente te da servidor
const server = express();

server.set('view engine', 'ejs');
// Creas rutas
server.get('/', (request, response) => {
  // Sin ejs   response.send('Hello Express');
  response.render('index');
});

server.get('/about', (request, response) => {
  // console.dir(response, { depth: 0 });
  // Sin ejs    response.send('About works....!');
  response.render('about');
});
server.listen(4200, () => console.log('Server running in port 4200...'));
