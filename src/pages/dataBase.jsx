// const cassandra = require("cassandra-driver");

// const cloud = {
//   secureConnectBundle: process.env["ASTRA_DB_SECURE_BUNDLE_PATH"],
// };
// const authProvider = new cassandra.auth.PlainTextAuthProvider(
//   "token",
//   process.env["ASTRA_DB_APPLICATION_TOKEN"]
// );

// const client = new cassandra.Client({ cloud, authProvider });

// async function run() {
//   await client.connect();

//   // ...
// }

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.CONNECTION);
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(`Sorry ${error}`);
  }
};

module.exports = connectDB;
