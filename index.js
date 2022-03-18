require("dotenv").config();
require("express-async-errors");

const express = require("express");
app = express();

const main = require("./controller/main");
const router = require("./routes/route");
const notFound = require("./middleware/notfound");
const errorHandler = require("./middleware/errorhandler");

//middleware
app.use(express.json());

// routes
app.use("/jwtapi/", router);
app.use(notFound);
app.use(errorHandler);

// start
port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, console.log(`server is listening on ${port}`));
  } catch (e) {
    console.log(e);
  }
};
start();
