const express = require("express");
const path = require("path");
const debug = require("debug")("app");
const chalk = require("chalk");
const morgan = require("morgan");
const sql = require("mssql");

const app = express();
const port = process.env.PORT || 3000;

const config = {
  user: "alex",
  password: "Admin1234",
  server: "alex-db.database.windows.net",
  database: "skylab-alex",
  option: { encrypt: true /* because we are using Microsoft Aseure */ },
};

sql.connect(config).catch(debug);

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
const nav = [
  { link: "/", title: "Dashboard" },
  { link: "/heroes", title: "Heroes" },
];
app.set("views", "./src/views");

/* app.get("/", (req, res) => {
  res.render("dashboard", {
    nav,
    title: "Top Heroes",
    heroes: heroes.slice(0, 4),
  });
}); */

const heroRoutes = require("./src/routes/heroRoutes")(nav);

app.use("/", heroRoutes);
const shieldRoutes = require("./src/routes/shieldRoutes");

app.use("/shield", shieldRoutes);

app.listen(port, () =>
  debug(`Server is running in port ${chalk.yellow(port)}`)
);
