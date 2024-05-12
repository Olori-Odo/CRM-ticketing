const mongoose = require("mongoose");

const UserTicketSchema = new mongoose.Schema({
  email: String,
  requestType: String,
  status: String,
  complain: String,
});

const UserTicketModel = mongoose.model("UserTicket", UserTicketSchema);

module.exports = UserTicketModel;
