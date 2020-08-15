const express = require("express");

const server = express();
//const { heroList } = require("./views/src/hero.mock");

server.use(express.static(__dirname + "/views"));
server.set("view engine", "ejs");
server.get("/", (request, response) => {
  response.render("hero-detail");
});

server.get("/hero-list", (request, response) => {
  response.render("hero-list");
});

server.get("/hero-dashboard", (request, response) => {
  response.render("hero-dashboard");
});

server.listen(4200, () => console.log("Server running in port 4200"));
