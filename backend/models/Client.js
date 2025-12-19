const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    designation: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
