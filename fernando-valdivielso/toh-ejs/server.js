const express = require("express");
const path = require('path');
const debug = require('debug')('server');
const morgan = require('morgan');


const server = express();
//const { heroList } = require("./views/src/hero.mock");

const port = process.env.PORT || 3000

const VIEW_FOLDER = 'views';


server.use(morgan('tiny'));

server.use(express.static(__dirname + "/views"));
server.set("view engine", "ejs");
server.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, VIEW_FOLDER, "hero-list.html"));
});

server.get("/hero-detail", (request, response) => {
  response.sendFile(path.join(__dirname, VIEW_FOLDER, "hero-detail.html"));
});

server.get("/hero-dashboard", (request, response) => {
  response.sendFile(path.join(__dirname, VIEW_FOLDER, "hero-dashboard.html"));
});

server.listen(port, () => debug(`Server running in port ${port}`));
