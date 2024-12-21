const Student = require("../Model/Student");

const getStudents = async (req, res, next) => {
  let studentData;
  try {
    studentData = await Student.find().exec();
  } catch (error) {
    console.log("Error occurred, while fetching data fron db!");
    res.status(500).json({ error: error });
  }
  console.log(studentData);
  if (studentData) {
    res.json(studentData);
  } else {
    console.log("Error occurred, while fetching data fron db!");
    res
      .status(500)
      .json({ error: "Error occurred, while fetching data fron db!" });
  }
};

const postStudent = async (req, res, next) => {
  const { studentName, cohort, courseNames, studentClass } = req.body;
  let result;
  const newStudent = new Student({
    name: studentName,
    cohort,
    courses: courseNames,
    studentClass,
  });
  try {
    result = await newStudent.save();
    res.json(result);
  } catch (error) {
    console.log("error occurred while saving new Student!");
    res.status(500).json({ error: error });
  }
};
exports.postStudent = postStudent;
exports.getStudents = getStudents;
