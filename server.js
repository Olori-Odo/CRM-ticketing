const PORT = 8080;
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");

dotenv.config();

const app = express();

const url =
  "https://517577e5-8274-427e-8c92-ec5ac6993ca4-eu-west-1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
  "AstraCS:BjnOExYxeTONoeFfXOFonCRr:a9e3331a9734dd81f9f1652e6afbc32a87f7765882ccc95a787b48a594e480ac";

app.use(morgan("combined"));

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server port at PORT:${PORT}`);
});
