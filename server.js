const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = 9000;

app.use(morgan("tiny"));

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
