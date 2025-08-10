import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPackagesPage from "../pages/AllPackagesPage/AllPackagesPage";
import AddPackage from "../pages/AddPackage/AddPackage";
import MyBookings from "../pages/MyBookings/MyBookings";
import ManagePackage from "../pages/ManagePackage/ManagePackage";
import PrivateRoute from "../context/PrivateRoute";
import PackageDetails from "../Components/PackageDetails/PackageDetails";
import BookingPage from "../pages/MyBookings/BookingPage";
import ZenAboutPage from "../pages/ZenAboutPage ";
import TermsAndConditions from "../Components/Footer/TermsAndConditions";
import PrivacyPolicy from "../Components/Footer/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/packages",
    Component: AllPackagesPage,
    loader: () => fetch("/allpackage.json"),
  },
  {
    path: "/packages/:id",
    element: (
      <PrivateRoute>
        <PackageDetails></PackageDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/allpackage.json"),
  },
  {
    path: "/add-package",
    element: (
      <PrivateRoute>
        <AddPackage></AddPackage>
      </PrivateRoute>
    ),
  },
  {
    path: "/bookings",
    element: (
      <PrivateRoute>
        <BookingPage></BookingPage>
      </PrivateRoute>
    ),
  },
  {
    path: "/manage-packages",
    element: (
      <PrivateRoute>
        <ManagePackage></ManagePackage>
      </PrivateRoute>
    ),
  },
{
  path: "/about",
  Component: ZenAboutPage,
},
{
  path: "/terms",
  Component: TermsAndConditions,
},
{
  path: "/PrivacyPolicy",
  Component: PrivacyPolicy,
},

{
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
