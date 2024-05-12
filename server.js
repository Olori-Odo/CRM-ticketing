const PORT = 9002;
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("./dbconnection");
const MydbModel = require("./src/models/mydb");
const UserTicketModel = require("./src/models/UserTicket");

const app = express();

// PORT = process.env.PORT || 9002;

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Mongodb successfully connected");
});

app.post("/ticket", (req, res) => {
  const { name, value } = req.body;
  UserTicketModel.create({
    name: name,
    value: value,
  })
    .then((UserTicket) => res.json(UserTicket))
    .catch((err) => res.json(err));
});

app.post("/signup", async (req, res) => {
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
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  MydbModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("password is incorrect");
      }
    } else {
      res.json("no record existed");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server port at PORT:${PORT}`);
});
