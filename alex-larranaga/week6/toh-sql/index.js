const express = require("express");
const path = require("path");
const debug = require("debug")("index");
const chalk = require("chalk");
const morgan = require("morgan");
const sql = require("mssql");
const heroes = require("./heroes");

const index = express();
const port = process.env.PORT || 3000;

const config = {
  user: "alex",
  password: "Admin1234",
  server: "alex-db.database.windows.net",
  database: "skylab-alex",
  option: { encrypt: true /* because we are using Microsoft Aseure */ },
};

sql.connect(config).catch(debug);

index.use(morgan("tiny"));
index.use(express.static(path.join(__dirname, "public")));

index.set("view engine", "ejs");
const nav = [
  { link: "/", title: "Dashboard" },
  { link: "/heroes", title: "Heroes" },
];
index.set("views", "./src/views");

index.get("/", (req, res) => {
  res.render("dashboard", {
    nav,
    title: "Top Heroes",
    heroes: heroes.slice(0, 4),
  });
});

const heroRoutes = require("./src/routes/heroRoutes")(nav);

index.use("/heroes", heroRoutes);

index.listen(port, () =>
  debug(`Server is running in port ${chalk.yellow(port)}`)
);
