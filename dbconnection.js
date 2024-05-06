const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("error connecting to database");
  });
