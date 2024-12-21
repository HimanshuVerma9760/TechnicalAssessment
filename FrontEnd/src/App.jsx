import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Student from "./Components/Student";
import theme from "../Theme";
import { studentLoader } from "./Components/studentLoader";
import NewStudentForm from "./Components/NewStudent-Form";
import { newStudentAction } from "./Components/newStudentAction";
import Settings from "./Components/Settings";
import Report from "./Components/Report";
import Help from "./Components/Help";
import Chapter from "./Components/Chapter";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          loader: studentLoader,
          element: <Student />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/new-student-form",
          action: newStudentAction,
          element: <NewStudentForm />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/report",
          element: <Report />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/chapter",
          element: <Chapter />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
