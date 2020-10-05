const mongoose = require("mongoose");
const config = require("../_CONFIG.json");

const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(
  process.env.MONGODB_URI || config.connectionString,
  connectionOptions
);
mongoose.Promise = global.Promise;

// module.exports = {
//   User: require("../src/models/users.model"),
// };
