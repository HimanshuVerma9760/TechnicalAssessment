import { redirect } from "react-router-dom";

const backendAPI = import.meta.env.VITE_BACKEND_API;

export const newStudentAction = async ({ request }) => {
  const formData = await request.formData();

  const studentName = formData.get("studentName");
  const studentClass = formData.get("studentClass");
  const cohortRaw = formData.get("cohort");
  const yearFrom = cohortRaw.split("-")[0];
  const yearTo = (parseInt(yearFrom) + 1).toString().split("0")[1];
  const cohort = `AY ${yearFrom}-${yearTo}`;

  const courseNames = formData.get("courseName").split(",");

  const studentData = {
    studentName,
    studentClass,
    cohort,
    courseNames,
  };

  // console.log(studentData)
  const response = await fetch(`${backendAPI}/add-new-student`, {
    method: "post",
    body: JSON.stringify(studentData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let responseData;
  if (!response.ok) {
    console.log("Some error occured while adding data to backend!");
    responseData = {
      message: "Some error occured while adding data to backend!",
      status: "failed",
    };
  } else {
    responseData = {
      message: "Student added Successfully!",
      status: "success",
    };
  }
  return responseData;
};
