const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();
const connectDB = require("./db/connection.js");
const routes = require("./routes/routes.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hirademy is live!");
});

app.use("/hirademy/api", routes);

const start = async () => {
  try {
    await connectDB(process.env.URI);
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
