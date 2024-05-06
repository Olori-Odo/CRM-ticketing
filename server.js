const PORT = 8080;
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
const MydbModel = require("./src/mydb");

const app = express();

dotenv.config({ path: "config.env" });

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(axios());

mongoose.connect("mongodb://172.24.89.1:27017/mydb");

// axios.post("/ola", async (req, res) => {
//   MydbModel.create(req.body)
//     .then((officials) => res.json(officials))
//     .catch((err) => res.json(err));
// });

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
