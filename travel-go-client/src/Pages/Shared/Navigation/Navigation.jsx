import React, { useContext } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Navigation = () => {
  const { user, logOut, isLoading } = useContext(AuthContext);
  const pathName = useLocation()?.pathname;

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <HashLink smooth to="/#services">
          Services
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#tours">
          Tours
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#reviews">
          Reviews
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="#footer">
          Contact
        </HashLink>
      </li>
      {user?.uid && (
        <li tabIndex={0}>
          <details>
            <summary className="md:text-white md:hover:text-white text-base pt-[6px]">
              Bookings
            </summary>
            <ul className="md:p-2 md:w-[200px] md:bg-black border-2">
              <li className="md:text-white">
                <Link to="/bookings">My Bookings</Link>
              </li>
              <li className="md:text-white">
                <Link>Submenu 2</Link>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost border-0" to="/">
          <img src={logo} alt="travel go logo" className="h-full" />
        </Link>
      </div>
      {/* --------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
      </div>
      {/* ----------------- */}
      <div className="navbar-end">
        {isLoading ? (
          <span className="loading loading-ring loading-lg text-warning"></span>
        ) : (
          <>
            {user?.uid && (
              <div
                className="mr-4"
                style={{ cursor: "pointer", width: "50px" }}
              >
                <>
                  {user?.photoURL ? (
                    <img
                      src={`${user.photoURL}`}
                      style={{
                        width: "100%",
                        borderRadius: "50%",
                      }}
                      title={`${user.email}`}
                    />
                  ) : (
                    <span
                      className="text-3xl font-bold text-white rounded-full bg-green-600 block text-center h-[50px] border-4 border-gray-300 py-1"
                      title={`${user?.email}`}
                    >
                      {(user?.displayName !== null &&
                        user?.displayName[0].toUpperCase()) ||
                        user?.email[0].toUpperCase()}
                    </span>
                  )}
                </>
              </div>
            )}
          </>
        )}

        {user?.uid ? (
          <>
            <button
              className="bg-[#DF6951] text-white px-4 py-3 rounded-xl font-medium btn-transition"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            {pathName.includes("register") ? (
              <Link
                to="/login"
                className="bg-[#DF6951] text-white px-4 py-3 rounded-xl font-medium btn-transition"
              >
                Get In Touch
              </Link>
            ) : (
              <Link
                to="/register"
                className="bg-[#DF6951] text-white px-4 py-3 rounded-xl font-medium btn-transition"
              >
                Sign Up
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
