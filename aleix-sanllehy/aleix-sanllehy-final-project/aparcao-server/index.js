// server imports
const express = require("express");
const debug = require("debug")("app");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const chalk = require("chalk");
const cors = require("cors");
// database imports
const mongoose = require("mongoose");
const url = require("./db_utils/DB_CONFIG");

const app = express();
const port = process.env.PORT || 3000;

// const db = mongoose.connect("mongodb://localhost/aparcao", {
const db = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server works");
});

const carsMethods = require("./src/routes/carsRouter")();

app.use("/cars", carsMethods);

const spotsMethods = require("./src/routes/spotsRouter")();

app.use("/spots", spotsMethods);

const authMethods = require("./src/routes/authRouter")();

app.use("/auth", authMethods);

app.listen(port, () =>
  debug(`Server is running in ${chalk.cyan("port: ")}${chalk.cyan(port)}`)
);
