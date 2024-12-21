const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cohort: {
    type: String,
    required: true,
    trim: true,
  },
  courses: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  studentClass: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
