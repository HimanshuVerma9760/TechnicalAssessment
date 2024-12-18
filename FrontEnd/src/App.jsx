import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Student from "./Components/Student";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/students",
          element: <Student />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

 
  return <RouterProvider router={router}/>;
}
