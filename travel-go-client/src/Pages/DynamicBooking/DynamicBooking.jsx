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
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const DynamicBooking = () => {
  const { user } = useContext(AuthContext);

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
    img,
  } = bookingDetails;

  const handleBookPackage = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const numOfTickets = form.tickets.value;

    const bookedPackage = {
      name,
      email: user?.email,
      phone,
      date,
      numOfTickets,
      country,
      place,
      price,
      departureTime,
      arrivalTime,
      img,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Booking Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

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
      <div className="spacer h-[2000px] md:h-[900px]"></div>
      <div className="container booking-info-con shadow-2xl">
        {/* header */}
        <div className="h-[100px] bg-base-200">
          <div className="h-full w-[50%] md:w-[25%] bg-white flex items-center justify-center space-x-2 ">
            <AiOutlineInfoCircle className="text-lg" />
            <span className="text-lg text-[#343434] font-bold">
              Information
            </span>
          </div>
        </div>

        {/* booking text and inputs */}
        <div className="booking-container mt-10 px-2 md:px-8 pt-6 pb-10 flex">
          {/* booking text */}
          <div className="booking-text">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <h3
                className="text-4xl text-[#181E4B] font-bold"
                style={{ fontFamily: "var(--volkhov)" }}
              >
                {country}
              </h3>
              <p className="text-[var(--primary-color)] md:ml-[75px] mt-2 md:mt-0 font-bold text-xl">
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
                      <span className="pr-3 hidden md:inline">:</span> {place},{" "}
                      {country}
                    </td>
                  </tr>

                  <tr>
                    <td>Departure</td>
                    <td>
                      <span className="pr-3 hidden md:inline">:</span>{" "}
                      {departure}
                    </td>
                  </tr>

                  <tr>
                    <td>Departure Time</td>
                    <td>
                      <span className="pr-3 hidden md:inline">:</span>{" "}
                      Approximately {departureTime}
                    </td>
                  </tr>

                  <tr>
                    <td>Return Time</td>
                    <td>
                      <span className="pr-3 hidden md:inline">:</span>{" "}
                      Approximately {arrivalTime}
                    </td>
                  </tr>
                  <tr>
                    <td>Included</td>
                    <td className="include-items">
                      <span className="hidden md:inline">:</span>
                      <div className="pl-3 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          {/* ---------------------- */}

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
            <form action="" className="mt-10" onSubmit={handleBookPackage}>
              <div className="booking-input-field">
                <FaRegUser />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={user?.displayName && user?.displayName}
                  required
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field">
                <AiOutlineMail />
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
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
                  name="tickets"
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
          {/* ------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default DynamicBooking;
