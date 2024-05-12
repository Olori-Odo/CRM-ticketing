const mongoose = require("mongoose");

const mydbSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
    min: 3,
    max: 100,
  },
  lastName: {
    type: String,
    // required: true,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
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

const MydbModel = mongoose.model("Register", mydbSchema);

module.exports = MydbModel;
