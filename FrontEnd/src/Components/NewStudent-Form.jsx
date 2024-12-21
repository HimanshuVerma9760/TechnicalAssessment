import { Form, useActionData, useNavigation } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";

const AddStudentForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [actionResponse, setActionResponse] = useState({
    message: "",
    status: "",
  });

  const actionData = useActionData();

  // Update actionResponse state when actionData changes
  useEffect(() => {
    if (actionData) {
      setActionResponse({
        message: actionData.message || "",
        status: actionData.status || "",
      });
    }
  }, [actionData]);

  const handleCourseChange = (event) => {
    setSelectedCourses(event.target.value);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 600,
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Add New Student
      </Typography>
      <Form method="post">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="studentName"
              label="Name"
              fullWidth
              required 
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="cohort"
              label="Admission Date"
              type="date"
              fullWidth
              defaultValue={new Date().toISOString().split("T")[0]}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Course Name</InputLabel>
              <Select
                label="Course Name"
                name="courseName"
                multiple
                value={selectedCourses}
                onChange={handleCourseChange}
                renderValue={(selected) => selected.join(", ")}
              >
                <MenuItem value="Maths">
                  <Checkbox checked={selectedCourses.includes("Maths")} />
                  <ListItemText primary="Maths" />
                </MenuItem>
                <MenuItem value="Science">
                  <Checkbox checked={selectedCourses.includes("Science")} />
                  <ListItemText primary="Science" />
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="studentClass"
              label="Class"
              type="number"
              fullWidth
              required
              variant="outlined"
            />
          </Grid>

          {actionResponse.message && (
            <Grid item xs={12}>
              <Typography
                component="p"
                color={actionResponse.status === "success" ? "green" : "red"}
                align="center"
              >
                {actionResponse.message}
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              sx={{ padding: 1.5 }}
            >
              {isSubmitting ? "Submitting..." : "Add Student"}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default AddStudentForm;
