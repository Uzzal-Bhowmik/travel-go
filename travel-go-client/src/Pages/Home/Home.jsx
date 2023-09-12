import React from "react";
import "./Home.css";
import bannerBg from "../../assets/homeBannerBg.png";
import bannerVector from "../../assets/Vector 1.png";
import bannerGroup from "../../assets/bannerGroup.png";
import { HashLink } from "react-router-hash-link";
import { BsArrowDownCircle } from "react-icons/bs";
import Brands from "../Brands/Brands";
import Navigation from "../Shared/Navigation/Navigation";
import Packages from "./Packages/Packages";
import libertyBg from "../../assets/libertyBg.png";
import Tours from "./Tours/Tours";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      {/* Top Banner */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${bannerBg})`,
        }}
        className="banner-container"
      >
        <div>
          <Navigation />
          <div className="home-banner p-2">
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

                  <select name="" id="" defaultValue={"Travel Type"}>
                    <option value="Travel Type" disabled>
                      Travel Type
                    </option>
                    <option value="">Bus</option>
                    <option value="">High Speed Train</option>
                    <option value="">Flight</option>
                  </select>

                  <select name="" id="" defaultValue={"Duration"}>
                    <option value="Duration" disabled>
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
        </div>
      </div>
      {/* Top Banner End */}

      {/* Brands */}
      <div>
        <Brands />
      </div>
      {/* Brands End */}

      {/* Packages */}
      <div className="my-20" id="services">
        <Packages />
      </div>
      {/* Packages End */}

      {/* Separator */}
      <div
        className="border flex items-center mb-10"
        style={{
          backgroundImage: `url(${libertyBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          minHeight: "399px",
        }}
      >
        <div className="md:w-[40%] md:ml-32">
          <h3
            className="font-bold text-5xl text-white leading-snug"
            style={{ fontFamily: "var(--volkhov)" }}
          >
            Lets Make Your Next Holiday Amazing !
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="313"
            height="38"
            viewBox="0 0 313 38"
            fill="none"
            className="block ms-auto mt-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M236.065 9.85704C192.36 6.08905 179.848 5.18085 155.509 4.01086C130.287 2.79837 112.203 2.28073 83.4615 1.9486C76.7986 1.87161 69.671 1.72057 61.3214 1.47929C30.6495 0.592914 24.6666 0.569009 14.6533 1.2921C9.69197 1.65055 5.41525 1.81687 3.03433 1.74441C0.91753 1.67981 0.52774 1.73056 0.49436 2.07493C0.464862 2.37926 3.80297 2.97196 5.65828 2.99169C6.32314 2.99896 8.12303 3.03323 9.65815 3.06826C11.1933 3.1031 14.5769 3.12526 17.1772 3.11744C23.3005 3.09876 26.2308 3.18976 36.6996 3.72361C54.2988 4.6211 67.6096 5.13447 83.9808 5.54718C90.014 5.6992 98.0247 5.90113 101.782 5.99581C130.281 6.71372 165.027 8.25864 186.206 9.74977C211.907 11.5589 291.549 18.6756 290.157 19.0384C289.605 19.1823 280.357 19.7538 274.824 19.9861C269.742 20.1995 261.266 20.3963 250.848 20.5427C245.908 20.6124 239.127 20.7141 235.779 20.769C223.203 20.9754 219.063 21.0162 211.931 21.0048C179.072 20.9522 157.303 21.5718 126.909 23.4244C108.842 24.5254 93.944 26.3558 77.2086 29.5305C67.6937 31.3355 66.7456 31.728 67.4877 33.5557C67.9707 34.7449 72.6252 35.3442 82.1211 35.4394C99.4747 35.6138 115.758 36.0228 131.508 36.6798C141.386 37.092 142.697 37.1275 152.769 37.2572C156.531 37.3058 163.026 37.4731 167.202 37.6295L174.795 37.9137L164.778 36.7648C149.599 35.0236 133.287 33.4588 127.888 33.2261C110.012 32.4556 100.268 32.2516 84.3138 32.3139C80.5111 32.3288 77.3071 32.299 77.1936 32.2478C76.0996 31.7526 101.989 28.3813 114.278 27.4189C142.017 25.2461 170.45 24.3748 214.017 24.3621C217.996 24.361 225.989 24.2895 231.781 24.2036C237.572 24.1174 246.7 23.9828 252.066 23.9042C272.719 23.6018 278.889 23.3415 298.847 21.9311C311.629 21.0276 311.698 21.016 312.176 19.6533C312.702 18.1552 311.762 17.3611 308.895 16.8823C306.171 16.4272 254.83 11.4748 236.065 9.85704ZM175.624 37.8378C175.858 37.9075 176.202 37.9391 176.389 37.908C176.577 37.8769 176.386 37.8197 175.965 37.7811C175.544 37.7425 175.391 37.7681 175.624 37.8378Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      {/* Separator End */}

      {/* Tours */}
      <div className="my-40">
        <Tours />
      </div>
      {/* Tours End */}

      {/* Reviews */}
      <div className="mb-40">
        <Reviews />
      </div>
      {/* Reviews End */}
    </div>
  );
};

export default Home;
