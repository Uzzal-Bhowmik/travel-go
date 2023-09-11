import React from "react";
import "./Home.css";
import bannerBg from "../../assets/homeBannerBg.png";
import bannerVector from "../../assets/Vector 1.png";
import bannerGroup from "../../assets/bannerGroup.png";
import { HashLink } from "react-router-hash-link";
import { BsArrowDownCircle } from "react-icons/bs";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      {/* Top Banner */}
      <div
        className="home-banner p-2"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${bannerBg})`,
        }}
      >
        {/* banner text */}
        <div className="banner-text md:ml-20 w-[48%]">
          <img src={bannerVector} alt="" />

          <h1 className="text-5xl text-white font-bold w-[80%] mt-2 mb-10 leading-[55px]">
            No matter where you’re going to, we’ll take you there
          </h1>

          {/* banner input fields */}
          <div className="banner-input-fields flex items-center">
            <div className="grid grid-cols-4">
              <input type="text" name="" id="" placeholder="Where to?" />

              <select name="" id="">
                <option value="" selected disabled>
                  Travel Type
                </option>
                <option value="">Bus</option>
                <option value="">High Speed Train</option>
                <option value="">Flight</option>
              </select>

              <select name="" id="">
                <option value="" selected disabled>
                  Duration
                </option>
                <option value="">1 Day</option>
                <option value="">1 Week</option>
                <option value="">3 Weeks</option>
                <option value="">1 Month</option>
              </select>

              <HashLink to="/#services" smooth>
                <input
                  type="submit"
                  value="Show Services"
                  className="bg-[#DF6951] px-3 py-2 text-white text-center w-[90%] mx-auto block rounded-lg ml-4"
                />
              </HashLink>
            </div>
          </div>

          <div className="md:flex items-center text-white space-x-5 mt-5 ml-1">
            <img src={bannerGroup} alt="" className="h-8" />
            <span className="text-sm">
              2,500 people booked Paris Package in last month
            </span>
          </div>
          {/* scroll icon */}
          <div className="scroll-down-icon">
            <BsArrowDownCircle />
            <span className="text-sm text-white pt-2 block font-[var(--volkhov)] tracking-wider">
              Scroll
            </span>
          </div>
        </div>
      </div>
      {/* Top Banner End */}

      {/* Brands */}
      <div>
        <Brands />
      </div>
      {/* Brands End */}

      <div>
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default Home;
