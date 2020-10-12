const express = require("express");
const debug = require("debug");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const { PORT } = process.env || 2626;

app.use(cors());
app.options("*", cors, (req, res) => {
  res.end();
});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/spotshot", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", (req, res) => {
  res.send("SpotShot Backend");
});

const spotsRoutes = require("./src/routes/spotsRoutes");

app.use("/api/spots", spotsRoutes);

const authRoutes = require("./src/routes/authRoutes");

app.use("/auth", authRoutes);

app.listen(PORT, () => debug(`server running at port ${PORT}`));
