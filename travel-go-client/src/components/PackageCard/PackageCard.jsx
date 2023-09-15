import React from "react";
import "./PackageCard.css";
import { BsCalendarEvent, BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import ratingStars from "../../assets/ratingStars.png";
import { Link } from "react-router-dom";

const PackageCard = ({ pkg }) => {
  const {
    _id,
    country,
    countryCode,
    desc,
    duration,
    img,
    people,
    place,
    price,
  } = pkg;
  return (
    <div className="package-card">
      {/* card img */}
      <div className="card-img-container">
        <img src={img} alt="" className="place-img w-[95%] mx-auto md:w-full" />
        <img
          src={`https://hatscripts.github.io/circle-flags/flags/${countryCode.toLowerCase()}.svg`}
          alt=""
          className="flag-img"
        />
      </div>

      <div className="package-desc">
        {/* duration */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center space-x-2 text-base">
            <BsCalendarEvent />
            <span>{duration} days</span>
          </div>
          <div className="flex items-center space-x-2 text-base">
            <BsPeople />
            <span>{people} People Going</span>
          </div>
        </div>

        {/* title and desc */}
        <div>
          <div className="flex justify-between items-center space-x-4 mb-3">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--volkhov)" }}
            >
              {place}
            </h3>
            <img src={ratingStars} alt="" />
          </div>

          <div className="flex items-center space-x-2">
            <GoLocation className="text-xl text-gray-500" />
            <span className="text-gray-400 font-bold">{country}</span>
          </div>

          <h3 className="text-[var(--primary-color)] mt-4 mb-5 text-2xl font-bold">
            {price} $
          </h3>

          <p>{desc}</p>

          <Link to={`/packages/${_id}`}>
            <button className="bg-[#DF6951] text-white text-center w-[134px] h-[43px] rounded-lg mt-6 btn-transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
