import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../assets/logo.png";

const Navigation = () => {
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
        <HashLink smooth to="/#footer">
          Contact
        </HashLink>
      </li>
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
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* ----------------- */}
      <div className="navbar-end">
        <Link className="bg-[#DF6951] text-white px-4 py-3 rounded-xl font-medium btn-transition">
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
