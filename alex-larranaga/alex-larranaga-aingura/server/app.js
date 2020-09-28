const express = require("express");
const debug = require("debug")("app");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRouter = require("../server/api/apiRoutes");
const authRouter = require("./auth/authRouter");
const cors = require("cors");
const secretServices = require("./_helpers/secretServices");

const app = express();

const db = mongoose.connect("mongodb://localhost:27017/aingura", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const { PORT } = process.env;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("AINGURA-APP v0.0.1 Server working");
});

app.use("/api", apiRouter);

app.use("/login", authRouter);

app.listen(PORT, () => debug(`Server running on port ${PORT}`));

// Routes
