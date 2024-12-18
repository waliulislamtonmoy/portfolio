import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "#About",
        element: <About></About>,
      },
    ],
  },
]);
