import React, { useContext } from "react";
import "./DynamicBooking.css";
import { useLoaderData } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";
import bookingBannerBg from "../../assets/bookingBanner.png";
import {
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TiTicket } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

import stars from "../../assets/ratingStars.png";

const DynamicBooking = () => {
  const { name, email } = { name: "uzzal", email: "abc@gmail.com" };

  const bookingDetails = useLoaderData();
  const {
    country,
    place,
    price,
    desc,
    departure,
    departureTime,
    arrivalTime,
    included,
    review,
  } = bookingDetails;
  console.log(bookingDetails);

  return (
    <div className="relative">
      {/* banner */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${bookingBannerBg})`,
        }}
        className="booking-banner-container"
      >
        <div>
          <Navigation />
          <div className="home-banner p-2">
            {/* banner text */}
            <div className="banner-text mx-auto md:w-[50%] text-white text-center space-y-3">
              <p className="text-sm font-medium">Explore</p>
              <h1 className="text-6xl" style={{ fontFamily: "var(--curly)" }}>
                {country}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* booking info container */}
      <div className="spacer h-[900px]"></div>
      <div className="container booking-info-con shadow-2xl">
        <div className="h-[100px] bg-base-200">
          <div className="h-full w-[25%] bg-white flex items-center justify-center space-x-2 ">
            <AiOutlineInfoCircle className="text-lg" />
            <span className="text-lg text-[#343434] font-bold">
              Information
            </span>
          </div>
        </div>

        {/* booking text and inputs */}
        <div className="mt-10 px-8 pt-6 pb-10 flex">
          {/* booking text */}
          <div className="booking-text">
            <div className="flex items-center">
              <h3
                className="text-4xl text-[#181E4B] font-bold"
                style={{ fontFamily: "var(--volkhov)" }}
              >
                {country}
              </h3>
              <p className="text-[var(--primary-color)] ml-[75px] font-bold text-xl">
                {price} ${" "}
                <span className="text-base text-gray-300">/ Per Couple</span>
              </p>
            </div>

            <div className="flex items-center space-x-3 mt-4 mb-8">
              <img src={stars} alt="" />
              <span className="font-md text-gray-400">({review} reviews)</span>
            </div>

            <div>
              <p className="pr-6 font-md text-lg">{desc}</p>
            </div>

            <div className="booking-details">
              <table>
                <tbody>
                  <tr>
                    <td>Destination</td>
                    <td>
                      <span className="pr-3">:</span> {place}, {country}
                    </td>
                  </tr>

                  <tr>
                    <td>Departure</td>
                    <td>
                      <span className="pr-3">:</span> {departure}
                    </td>
                  </tr>

                  <tr>
                    <td>Departure Time</td>
                    <td>
                      <span className="pr-3">:</span> Approximately{" "}
                      {departureTime}
                    </td>
                  </tr>

                  <tr>
                    <td>Return Time</td>
                    <td>
                      <span className="pr-3">:</span> Approximately{" "}
                      {arrivalTime}
                    </td>
                  </tr>
                  <tr>
                    <td>Included</td>
                    <td className="include-items">
                      <span>:</span>
                      <div className="pl-3 grid grid-cols-2 gap-4">
                        {included.map((item) => (
                          <p key={item} className="flex items-center space-x-1">
                            <AiOutlineCheckCircle className="text-xl font-bold" />
                            <span>{item}</span>
                          </p>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* booking inputs */}
          <div className="booking-input">
            <div className="text-center space-y-3">
              <h1
                className="text-4xl text-[#181E4B] font-bold"
                style={{ fontFamily: "var(--volkhov)" }}
              >
                Book This Tour
              </h1>

              <p>
                Unlock the Magic of Travel: Discover, Explore, and Create
                Unforgettable Memories with Our Enchanting Tour!
              </p>
            </div>

            {/* input fields */}
            <form action="" className="mt-10">
              <div className="booking-input-field">
                <FaRegUser />
                <input type="text" name="name" placeholder="Name" required />
              </div>
              {/* -------- */}
              <div className="booking-input-field">
                <AiOutlineMail />
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  required
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field">
                <BsTelephone />
                <input type="text" name="phone" placeholder="Phone" />
              </div>
              {/* -------- */}
              <div className="booking-input-field">
                <AiOutlineCalendar />
                <input type="date" name="date" required />
              </div>
              {/* -------- */}
              <div className="booking-input-field">
                <TiTicket />
                <input
                  type="number"
                  name="ticket"
                  placeholder="Number of tickets"
                />
              </div>

              <button
                className="btn btn-transition w-[225px] h-[25px] bg-[#DF6951] text-white rounded-lg font-medium hover:bg-[#DF6951] mx-auto block mt-10"
                type="submit"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBooking;