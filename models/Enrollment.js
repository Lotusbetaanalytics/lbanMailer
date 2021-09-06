const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please add First name"],
  },
  lastname: {
    type: String,
    required: [true, "Please add Last name"],
  },
  email: {
    type: String,
    unique: true,
  },
  pin: {
    type: String,
    selected: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
