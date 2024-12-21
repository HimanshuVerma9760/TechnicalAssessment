const express = require("express");
const {
  getStudents,
  postStudent,
} = require("../Controller/Student-Controller");

const routes = express.Router();

routes.get("/", getStudents);
routes.post("/add-new-student", postStudent);

exports.routes = routes;
