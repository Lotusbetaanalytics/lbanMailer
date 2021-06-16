const mongoose = require("mongoose");

const CehSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please add First name"],
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  country: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  intrest: {
    type: String,
  },
  training: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ceh", CehSchema);
