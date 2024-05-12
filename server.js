const PORT = 9002;
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("./dbconnection");
const MydbModel = require("./src/mydb");

const app = express();

// PORT = process.env.PORT || 9002;

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));

// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Mongodb successfully connected");
});

app.post("/registers", async (req, res) => {
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
  console.log(savedofficials);
  // .then(console.log({ savedofficials }))
  // .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server port at PORT:${PORT}`);
});
