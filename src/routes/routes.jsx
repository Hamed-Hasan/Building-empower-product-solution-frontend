import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Table from "../components/Table/Table";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/table",
      element: <Table />,
    },
  ]);

  
  export default router;