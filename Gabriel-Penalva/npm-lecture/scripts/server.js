const express = require('express');
const { request, response } = require('express');
const { routes } = require('./routes')
const server = express();
server.set('view engine', 'ejs');
//server.set('views', path.join(__dirname, './views'))

for (x of routes) {
  generateRoutes(x)
}
function generateRoutes({ path, file }) {
  server.get(path, (request, response) => {
    response.render(file);
  });
}

server.listen(4200, () => console.log('Server runing in port 4200 with express'));
