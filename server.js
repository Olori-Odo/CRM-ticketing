// const PORT = 8080;
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
const path = require("path");

// const { route } = require("./src/pages/ticketpage/routes/route");
// const connectDB = require("./src/pages/dataBase");

const app = express();

dotenv.config({ path: "config.env" });
PORT = process.env.PORT;

// const url =
//   "https://517577e5-8274-427e-8c92-ec5ac6993ca4-eu-west-1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
// const token =
//   "AstraCS:YAhdeLjIWwDQFNyauRdwsbmm:04aa8da14cf558fba4471667a0b39d457064933856c0adc9ae909eec92966816";

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));

// app.use(route);

// app.post("/tickets", async (req, res) => {
//   const formData = req.body.formData;

//   try {
//     const response = await axios("http://localhost:8080", {
//       method: "POST",
//     });
//     res.status(200).json(response.data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err });
//   }
// });

// connectDB();

app.listen(PORT, () => {
  console.log(`Server port at PORT:${PORT}`);
});
