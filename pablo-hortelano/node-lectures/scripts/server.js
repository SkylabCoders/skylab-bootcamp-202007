const express = require('express');

const server = express();

server.set('view engine', 'ejs'); // Añadida con ejs

server.get('/', (request, response) => {
  /* response.send('Hello Expresss'); */
  response.render('index');
});

server.get('/about', (request, response) => {
  console.dir(request, { depth: 0 });
  /* response.send('About works'); */
  response.render('about');
});

server.listen(4200, () => {
  console.log('Server running in port 4200');
});
