import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPackagesPage from "../pages/AllPackagesPage/AllPackagesPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/register",
          Component: Register
        },
    ]
  },
 {
  path: "/packages",
   element : <AllPackagesPage />,
 },
  {
    path: '/*',
    Component: ErrorPage,
  },
]);

export default router;