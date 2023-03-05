const mongoose = require("mongoose");
const config = require("../config");
mongoose.set("strictQuery", false);

module.exports.opendb = () => {
  console.log("starting database");
  mongoose.connect(
    config.DB_CONNECTION,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  );
  console.log("successfully database connected");
};
