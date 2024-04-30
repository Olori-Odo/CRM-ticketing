const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 7000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/jason",
      "X-Cassandra-Token": token,
    },
  };

  try {
    const response = await axios(`${url}?page-size=20`, options);
    res.status(200).jason(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).jason({ message: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
