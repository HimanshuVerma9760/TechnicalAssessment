const mongoose = require("mongoose");
require("dotenv").config();


const API = process.env.MONGO_URL;
const db = async () => {
  let res;
  try {
    res = await mongoose.connect(API);
  } catch (error) {
    console.log("No response from database!", error);
  }
  if (res) {
    console.log("Successfully Connected to Database!");
  } else {
    console.log("Some Error Occurred!");
  }
};

module.exports = db;
