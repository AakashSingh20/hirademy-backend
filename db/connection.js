const mongoose = require("mongoose");

const connectDB = async (uri) => {
  mongoose
    .connect(uri)
    .then(console.log("Connected to DB ..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
