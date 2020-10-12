const express = require("express");
const debug = require("debug")("app");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const DBCONFIG = require("./db_utils/dbconfig");

const app = express();

const vetsRouter = require("./src/routes/vetsRouter");
const authRouter = require("./src/routes/authRouter");
const questionRouter = require("./src/routes/questionRouter");
const questionVetRouter = require("./src/routes/questionVetRouter");

const PORT = process.env.PORT || 3000;

const db = mongoose.connect("mongodb://localhost/myvet");

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ exteded: true }));
app.get("/", (req, res) => {
  res.send("THIS WORKS");
});
app.use(bodyParser.json());

app.use("/api/vet", vetsRouter);
app.use("/api/question", questionRouter);
app.use("/api/questionVet", questionVetRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => debug(`Server running on port ${PORT}`));
