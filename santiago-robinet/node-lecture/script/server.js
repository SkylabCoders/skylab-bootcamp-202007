const express = require('express');

const server = express();

server.get('/', (request, response) => {
  response.send('Hello Express!!');
});

server.get('/about', (request, response) => {
  response.send('About Works.....!');
});

server.listen(4200, () => console.log('Server running in port 4200...'));
