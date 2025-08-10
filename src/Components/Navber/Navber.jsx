import { Link, NavLink } from "react-router";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  FaUser,
  FaSignOutAlt,
  FaPlus,
  FaList,
  FaHome,
  FaGlobeAsia,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { use } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire(
              "Logged out!",
              "You have been successfully logged out.",
              "success"
            );
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };
  return (
    <div className="navbar w-11/12 mx-auto">
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/packages">
                <FaGlobeAsia /> All Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/bookings">
                    <FaList /> My Bookings
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mr-2">
            <span className="text-white text-2xl">✈️</span>
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
            ZenTour
          </span>
        </Link>
      </div>

      {/* Navbar center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
              }>
              <FaHome className="mr-1" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/packages"
              className={({ isActive }) =>
                isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
              }>
              <FaGlobeAsia className="mr-1" /> All Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
              }>
              About Us
            </NavLink>
          </li>

          {user && (
            <>
              <li className="ml-4 border-l pl-4 border-gray-200">
                <NavLink
                  to="/bookings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600 font-semibold"
                      : "hover:text-cyan-500"
                  }>
                  <FaList className="mr-1" /> My Bookings
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end space-x-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Photo"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <FaUser className="w-10 h-10 text-gray-500" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/add-package">
                  <FaPlus /> Add Package
                </Link>
              </li>
              <li>
                <Link to="/manage-packages">
                  <FaList /> Manage Packages
                </Link>
              </li>
              <li className="border-t mt-1 pt-1">
                <button onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-1 flex gap-2">
            <Link
              to="/login"
              className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 border-0">
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 border-0">
              Register
            </Link>
          </div>
        )}
      </div>
      <button
        onClick={toggleTheme}
        className="btn btn-sm btn-circle ml-2 p-1 text-4xl"
        title="Toggle Theme">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Navbar;
