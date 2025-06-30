import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <h3>Not Found</h3>,
      children: []
    },
])

export default router;