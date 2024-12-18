import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Student 1", 159, 6.0, 24, 4.0),
  createData("Student 2", 237, 9.0, 37, 4.3),
  createData("Student 2", 237, 9.0, 37, 4.3),
  createData("Student 2", 237, 9.0, 37, 4.3),
  createData("Student 2", 237, 9.0, 37, 4.3),
];

export default function StudentsList() {
  return (
    <TableContainer
      component={Paper}
      sx={{ border: "none", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Student Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Cohort
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Courses
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Date joined
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Last login
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
