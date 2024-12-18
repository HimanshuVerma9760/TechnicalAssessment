import { Add, ArrowDropDown } from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Select,
  MenuItem,
  Grid2,
  Button,
  Divider,
} from "@mui/material";
import { useState } from "react";
import StudentsList from "./StudentsList";

export default function Student() {
  const drawerWidth = 240;
  const [academicYear, setAcademicYear] = useState("");

  const handleChange = (event) => {
    setAcademicYear(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          sx={{
            position: "fixed",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            padding: "1rem",
            marginTop: { xs: "2rem", sm: "0rem" },
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
                  renderValue={(selected) => selected || "Academic Year"}
                  sx={{
                    fontSize: "15px",
                    height: "2.8rem",
                    width: { xs: "150px", sm: "200px" },
                    backgroundColor: "rgb(228, 223, 223)",
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
                  }}
                >
                  <MenuItem value="2024-2025">AY 2024-25</MenuItem>
                  <MenuItem value="2023-2024">AY 2023-24</MenuItem>
                  <MenuItem value="2022-2023">AY 2022-23</MenuItem>
                  <MenuItem value="2021-2022">AY 2021-22</MenuItem>
                </Select>
              </Grid2>
              <Grid2>
                <Select
                  value={academicYear}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(selected) => selected || "CBSE Class"}
                  sx={{
                    fontSize: "15px",
                    height: "2.8rem",
                    width: { xs: "150px", sm: "200px" },
                    backgroundColor: "rgb(228, 223, 223)",
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
                  }}
                >
                  <MenuItem value="CBSE-9">CBSE 9</MenuItem>
                  <MenuItem value="CBSE-10">CBSE 10</MenuItem>
                  <MenuItem value="CBSE-11">CBSE 11</MenuItem>
                  <MenuItem value="CBSE-12">CBSE 12</MenuItem>
                </Select>
              </Grid2>
            </Box>
            <Grid2>
              <Button
                startIcon={<Add />}
                variant="contained"
                sx={{
                  height: "2.8rem",
                  fontSize: "15px",
                  backgroundColor: "rgb(228, 223, 223)",
                  width: { xs: "100%", sm: "fit-content" },
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
                Add New Student
              </Button>
            </Grid2>
          </Grid2>
          <div style={{marginTop:'2rem'}}>
            <StudentsList />
          </div>
        </Box>
      </Box>
    </>
  );
}
