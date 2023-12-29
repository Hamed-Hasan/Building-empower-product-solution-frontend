import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Table from "../pages/Table/Table";
import BlurBg from "../components/uploads/BlurBg";

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