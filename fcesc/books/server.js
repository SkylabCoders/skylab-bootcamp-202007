const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const { ROUTES } = require('./config/ROUTES');

const server = express();
const PORT = process.env.PORT || 3010;

server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, 'src/css')));
server.set('views', path.join(__dirname, '/src/views'));
server.set('view engine', 'ejs');

function sendToServer(path, bodyComponent, enableParams){
  server.get(path, function(request, response){
    let ROUTE_PARAMETERS = {};
    if(enableParams){
      ROUTE_PARAMETERS = { query: request.params[params], parameter: params, fromPage: path };
    }
    response.locals = { body: bodyComponent, header: ROUTES.get('HEADER'), footer: ROUTES.get('FOOTER') }; // pass here any data to children
    response.render('index.ejs');
  })
}

for(let [key, value] of ROUTES){
  let message;
  (value.type === 'page') ? message = `${key} route initialized` : message = `${key} component initialized`;
  console.log(message);
  sendToServer(value.path, value.page, value.enableParams);
}

server.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});
