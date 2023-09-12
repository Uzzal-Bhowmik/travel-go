import React from "react";
import "./Footer.css";
import logo from "../../../../assets/logoBlack.png";
import footerSocial from "../../../../assets/footerSocial.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div
      className="pt-14 pb-10 mt-24"
      style={{
        backgroundColor: "#fcd9c9",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-5 border-b-2 border-b-black pb-8">
        <div>
          <img src={logo} alt="" />
          <p className="mt-1 mb-5">
            TravelGo makes traveling so much fun and affordable.
          </p>
          <img src={footerSocial} alt="" />
        </div>

        <div>
          <p className="text-lg font-bold ">Explore Us</p>
          <div className="mt-3 space-y-2">
            <p>
              <HashLink to="/">Home</HashLink>
            </p>
            <p>
              <HashLink to="/#services">Services</HashLink>
            </p>
            <p>
              <HashLink to="/#tours">Tours</HashLink>
            </p>
            <p>
              <HashLink to="/#reviews">Reviews</HashLink>
            </p>
            <p>
              <HashLink to="/#footer">Contact</HashLink>
            </p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold ">Destinations</p>
          <div className="mt-3 space-y-2">
            <p>
              <HashLink to="/#services">Germany</HashLink>
            </p>
            <p>
              <HashLink to="/#services">Switzerland</HashLink>
            </p>
            <p>
              <HashLink to="/#services">Egypt</HashLink>
            </p>
            <p>
              <HashLink to="/#services">Maldives</HashLink>
            </p>
            <p>
              <HashLink to="/#services">Brazil</HashLink>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Join Our Newsletter</h4>
          <div className="join mt-5 mb-4">
            <input
              className="input input-bordered join-item bg-[#eef]"
              placeholder="Your Email Address"
            />
            <button className="btn join-item rounded-2xl bg-[var(--primary-color)] text-white font-normal hover:bg-black">
              Subscribe
            </button>
          </div>
          <p>* Will send you weekly updates for your better tour packages.</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Copyright &copy;Uzzal Bhowmik 2023. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
