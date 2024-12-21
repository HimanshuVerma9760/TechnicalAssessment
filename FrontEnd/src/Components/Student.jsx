import { Add } from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Select,
  MenuItem,
  Grid2,
  Button,
} from "@mui/material";
import { useState, useMemo } from "react";
import StudentsList from "./StudentsList";
import { Link, useLoaderData } from "react-router-dom";

export default function Student() {
  const drawerWidth = 248;
  const studentData = useLoaderData();

  const [academicYear, setAcademicYear] = useState("AY 2024-25");
  const [studentClass, setStudentClass] = useState("CBSE 9");

  const myStudentData = useMemo(() => {
    if(studentClass==="All"){
      return studentData;
    }
    return studentData.filter(
      (eachStudent) =>
        eachStudent.cohort === academicYear &&
        eachStudent.studentClass.toString() === studentClass.split(" ")[1]
    );
  }, [studentData, academicYear, studentClass]);

  const handleChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    switch (id) {
      case "year":
        setAcademicYear(value);
        break;
      case "studentClass":
        setStudentClass(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <Box
          sx={{
            position: "fixed",
            width: {xs:"23rem", sm: "76.5rem" },
            minHeight: "600px",
            ml: { sm: `${drawerWidth}px` },
            padding: "1rem",
            marginTop: { xs: "2rem", sm: "0rem" },
            backgroundColor: "white",
            left: {xs:"0.8rem",sm:"2.5rem"},
          }}
        >
          <Grid2
            container
            spacing={2}
            sx={{
              justifyContent: { sm: "space-between", xs: "center" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Grid2>
                <Select
                  value={academicYear}
                  onChange={handleChange}
                  displayEmpty
                  name="year"
                  // renderValue={(selected) => selected || "AY 2024-25"}
                  sx={{
                    fontSize: "15px",
                    color: "#3F526E",
                    fontWeight: 700,
                    height: "38px",
                    width: { xs: "150px", sm: "149px" },
                    backgroundColor: "#E9EDF1",
                    border: "1px solid transparent",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  }}
                >
                  <MenuItem value="AY 2024-25">AY 2024-25</MenuItem>
                  <MenuItem value="AY 2023-24">AY 2023-24</MenuItem>
                  <MenuItem value="AY 2022-23">AY 2022-23</MenuItem>
                  <MenuItem value="AY 2021-22">AY 2021-22</MenuItem>
                </Select>
              </Grid2>
              <Grid2>
                <Select
                  value={studentClass}
                  onChange={handleChange}
                  displayEmpty
                  // renderValue={(selected) => selected || "CBSE 9"}
                  name="studentClass"
                  sx={{
                    fontSize: "15px",
                    color: "#3F526E",
                    fontWeight: 700,
                    height: "38px",
                    width: { xs: "150px", sm: "117px" },
                    backgroundColor: "#E9EDF1",
                    border: "1px solid transparent",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="CBSE 9">CBSE 9</MenuItem>
                  <MenuItem value="CBSE 10">CBSE 10</MenuItem>
                  <MenuItem value="CBSE 11">CBSE 11</MenuItem>
                  <MenuItem value="CBSE 12">CBSE 12</MenuItem>
                </Select>
              </Grid2>
            </Box>
            <Grid2>
              <Button
                startIcon={<Add />}
                variant="contained"
                LinkComponent={Link}
                to="/new-student-form"
                style={{ color: "#3F526E" }}
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "12px", sm: "16px" },
                  fontWeight: 700,
                  height: "38px",
                  width: { xs: "fit-content", sm: "197px" },
                  backgroundColor: "#E9EDF1",
                  border: "1px solid transparent",
                  "&:hover": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  color: "black",
                  boxShadow: "none",
                }}
              >
                Add new Student
              </Button>
            </Grid2>
          </Grid2>
          <div style={{ marginTop: "2rem" }}>
            <StudentsList studentData={myStudentData} />
          </div>
        </Box>
      </Box>
    </>
  );
}
