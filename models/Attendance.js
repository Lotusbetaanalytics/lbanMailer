const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Enrollment",
    required: [true, "Please add First name"],
  },
  location: {
    type: String,
    required: [true, "Unable to get your location, Try again"],
  },
  date: {
    type: String,
  },
  timein: {
    type: String,
  },
  timeout: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
