const mongoose = require("mongoose");

const mydbSchema = new mongoose.Schema({
  firstNname: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 100,
  },
});

const MydbModel = mongoose.model("officials", mydbSchema);

module.exports = MydbModel;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const con = await mongoose.connect(process.env.CONNECTION);
//     console.log(`MongoDB connected: ${con.connection.host}`);
//   } catch (error) {
//     console.log(`Sorry ${error}`);
//   }
// };

// module.exports = connectDB;

// import { DataAPIClient } from "@datastax/astra-db-ts";

// // Initialize the client
// const client = new DataAPIClient(
//   "  AstraCS:YAhdeLjIWwDQFNyauRdwsbmm:04aa8da14cf558fba4471667a0b39d457064933856c0adc9ae909eec92966816 "
// );
// const db = client.db(
//   "https://49d504e0-2b09-44db-8916-f91e653a9d57-us-east-2.apps.astra.datastax.com"
// );

// (async () => {
//   const colls = await db.listCollections();
//   console.log("Connected to AstraDB:", colls);
// })();
