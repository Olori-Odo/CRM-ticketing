const PORT = 9002;
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
//const axios = require("axios");
const morgan = require("morgan");
require("./dbconnection");
const MydbModel = require("./src/mydb");

const app = express();

// PORT = process.env.PORT || 9002;

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));

//app.use(axios());

app.get("/", (req, res) => {
  res.send("MongoDB connected Successful...");
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const officials = new MydbModel({
    firstName,
    lastName,
    email,
    password,
  });

  const savedofficials = await officials.save();
  res.json({
    messages: "new officials added ",
    savedofficials: savedofficials,
  });
});

app.listen(PORT, () => {
  console.log(`Server port at PORT:${PORT}`);
});
