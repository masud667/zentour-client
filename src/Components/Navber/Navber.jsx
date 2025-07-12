import { Link, NavLink } from "react-router";
import {
  FaUser,
  FaSignOutAlt,
  FaPlus,
  FaList,
  FaHome,
  FaGlobeAsia,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-md px-4 py-3 sticky top-0 z-50">
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
                  <NavLink to="/my-bookings">
                    <FaList /> My Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add-package">
                    <FaPlus /> Add Package
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manage-packages">
                    <FaList /> Manage Packages
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
                  to="/my-bookings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600 font-semibold"
                      : "hover:text-cyan-500"
                  }>
                  <FaList className="mr-1" /> My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-package"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600 font-semibold"
                      : "hover:text-cyan-500"
                  }>
                  <FaPlus className="mr-1" /> Add Package
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manage-packages"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600 font-semibold"
                      : "hover:text-cyan-500"
                  }>
                  <FaList className="mr-1" /> Manage Packages
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
                <FaUser />
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
                <button>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-1">
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
    </div>
  );
};

export default Navbar;
