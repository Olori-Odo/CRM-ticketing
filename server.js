const PORT = 9002;
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
//const axios = require("axios");
//const morgan = require("morgan");
require("./dbconnection");
const MydbModel = require("./src/mydb");

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//app.use(morgan("tiny"));
//app.use(axios());

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

// const url =
//   "https://517577e5-8274-427e-8c92-ec5ac6993ca4-eu-west-1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
// const token =
//   "AstraCS:YAhdeLjIWwDQFNyauRdwsbmm:04aa8da14cf558fba4471667a0b39d457064933856c0adc9ae909eec92966816";

// app.use(morgan("combined"));

// app.post("/tickets", async (req, res) => {
//   const formData = req.body.formData;

//   const options = {
//     method: "POST",
//     headers: {
//       Accepts: "application/json",
//       "X-Cassandra-Token": token,
//       "Content-Type": "application/json",
//     },
//     data: formData,
//   };

//   try {
//     const response = await axios(url, options);
//     res.status(200).json(response.data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err });
//   }
// });
