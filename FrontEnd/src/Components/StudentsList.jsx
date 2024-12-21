import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";

import { useMediaQuery } from "@mui/material";

export default function StudentsList({ studentData }) {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  function monthSelection(month) {
    switch (month) {
      case "1":
        return "Jan";
      case "2":
        return "Feb";
      case "3":
        return "March";
      case "4":
        return "April";
      case "5":
        return "May";
      case "6":
        return "June";
      case "7":
        return "July";
      case "8":
        return "Aug";
      case "9":
        return "Sept";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        return "";
    }
  }

  function getFormattedTime(dateString) {
    const date = new Date(dateString);

    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();

    hours += 5;
    if (hours >= 24) hours -= 24;

    minutes += 30;
    if (minutes >= 60) {
      minutes -= 60;
      hours++;
    }

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const strMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${strMinutes} ${ampm}`;
  }

  function parseDate(date) {
    const parseDate = date.toString().split("T")[0];
    const newDateFormat = parseDate.split("-");
    const year = newDateFormat[0];
    const month = monthSelection(newDateFormat[1]);
    const day = newDateFormat[2];
    const newDate = day + ". " + month + ". " + year;
    return newDate;
  }

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          border: "none",
          boxShadow: "none",
          overflowY: "auto",
          maxHeight: "525px",
          overflowX: "hidden",
        }}
      >
        <Table
          stickyHeader
          sx={{ minWidth: isSmallScreen ? "400px" : "650px" }}
          aria-label="students table"
        >
          <TableHead style={{ backgroundColor: "white" }}>
            <TableRow style={{ backgroundColor: "white" }}>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "10px", sm: "12px" },
                  backgroundColor: "white",
                  width: "130px",
                }}
              >
                Student Name
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "10px", sm: "12px" },
                  backgroundColor: "white",
                }}
              >
                Cohort
              </TableCell>
              {!isSmallScreen && (
                <TableCell
                  align="left"
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "10px", sm: "12px" },
                    backgroundColor: "white",
                  }}
                >
                  Courses
                </TableCell>
              )}
              <TableCell
                align="left"
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "10px", sm: "12px" },
                  backgroundColor: "white",
                  width: "150px",
                }}
              >
                Date Joined
              </TableCell>
              {!isSmallScreen && (
                <>
                  <TableCell
                    align="left"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "10px", sm: "12px" },
                      backgroundColor: "white",
                    }}
                  >
                    Last Login
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "10px", sm: "12px" },
                      backgroundColor: "white",
                    }}
                  >
                    Status
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.length > 0
              ? studentData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontSize: { xs: "10px", sm: "12px" },
                        width: "fit-content",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: { xs: "10px", sm: "12px" },
                        width: "fit-content",
                      }}
                    >
                      {row.cohort}
                    </TableCell>
                    {!isSmallScreen && (
                      <TableCell
                        align="left"
                        sx={{ fontSize: { xs: "10px", sm: "12px" } }}
                      >
                        {row.courses.map((eachCourse, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: "#F6F8FA",
                              marginRight: "10px",
                              padding: "5px",
                            }}
                          >
                            <img
                              src={
                                eachCourse === "Maths"
                                  ? "/image1.svg"
                                  : "/image2.svg"
                              }
                              style={{ marginRight: "5px" }}
                            />
                            {`CBSE ${row.studentClass} ${eachCourse}`}
                            {idx !== row.courses.length - 1 && "  "}
                          </span>
                        ))}
                      </TableCell>
                    )}
                    <TableCell
                      align="left"
                      sx={{ fontSize: { xs: "10px", sm: "12px" } }}
                    >
                      {parseDate(row.dateJoined)}
                    </TableCell>

                    {!isSmallScreen && (
                      <>
                        <TableCell
                          align="left"
                          sx={{ fontSize: { xs: "10px", sm: "12px" } }}
                        >
                          {parseDate(row.lastLogin) +
                            " " +
                            getFormattedTime(row.lastLogin)}
                        </TableCell>
                      </>
                    )}
                    {!isSmallScreen && (
                      <TableCell
                        align="center"
                        sx={{ fontSize: { xs: "10px", sm: "12px" } }}
                      >
                        <CircleIcon sx={{ color: "#4AEA40" }} />
                      </TableCell>
                    )}
                  </TableRow>
                ))
              : "No student for selected year and/or class"}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
