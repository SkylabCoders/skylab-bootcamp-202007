const express = require('express');

const server = express();

server.get('/', (request, response) => {
  response.send('Hello Expresss');
});

server.get('/about', (request, response) => {
  console.dir(request, { depth: 0 });
  response.send('About works');
});

server.listen(4200, () => {
  console.log('Server running in port 4200');
});
