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

app.use("/jwtapi/", router);
app.use(notFound);
app.use(errorHandler);

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on port " + port);
});
