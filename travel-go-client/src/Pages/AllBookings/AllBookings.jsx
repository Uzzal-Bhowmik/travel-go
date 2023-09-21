import React, { useContext, useEffect, useState } from "react";
import "./AllBookings.css";
import Navigation from "../Shared/Navigation/Navigation";
import bookingBg from "../../assets/bookingsBg.png";
import { useLoaderData } from "react-router-dom";
import BookingCard from "../Bookings/BookingCard/BookingCard";
import Swal from "sweetalert2";
import { RiAdminFill } from "react-icons/ri";
import { AuthContext } from "../../providers/AuthProvider";
import { HashLink } from "react-router-hash-link";

const AllBookings = () => {
  const { handleAdminLogin, handleAdminLogout, admin } =
    useContext(AuthContext);

  // flags
  const [isDeleted, setIsDeleted] = useState(false);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allBookings`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [isDeleted]);

  const handleCancelBooking = (_id) => {
    if (admin === "true") {
      Swal.fire({
        title: "Are you sure?",
        text: "This booking will be deleted.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                setIsDeleted(!isDeleted);
                Swal.fire(
                  "Cancelled!",
                  "This bookings has been successfully deleted",
                  "success"
                );
              }
            });
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Admin Not Logged In",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      {/* banner */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${bookingBg})`,
        }}
        className="booking-banner-container"
      >
        <div>
          <Navigation />
          <div className="home-banner p-2">
            {/* banner text */}
            <div className="banner-text mx-auto md:w-[50%] text-white text-center space-y-3">
              <h1 className="text-6xl" style={{ fontFamily: "var(--curly)" }}>
                Manage All Bookings
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* section header */}
      <div className="text-center my-10">
        <p className="text-[var(--primary-color)] font-semibold text-sm">
          Explore Us
        </p>
        <h1
          className="text-4xl text-[#181E4B] font-bold mt-2"
          style={{ fontFamily: "var(--volkhov)" }}
        >
          All Our Bookings
        </h1>
      </div>

      <div className="text-end mb-8 w-[80%] mx-auto">
        {admin === "true" ? (
          <button
            className="btn btn-outline btn-error btn-wide"
            onClick={handleAdminLogout}
          >
            <RiAdminFill className="text-lg" /> Admin Logout
          </button>
        ) : (
          <button
            className="btn btn-outline btn-success btn-wide"
            onClick={handleAdminLogin}
          >
            <RiAdminFill className="text-lg" /> Admin Login
          </button>
        )}
      </div>

      {/* all bookings */}
      {bookings.length ? (
        <div className="space-y-16">
          {bookings?.map((booking) => (
            <BookingCard
              key={booking._id}
              bookingInfo={booking}
              admin={true}
              email={booking.email}
              handleCancelBooking={handleCancelBooking}
            />
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center">
          <p>
            Explore our services and bookings{" "}
            <HashLink
              to={"/#packages"}
              smooth
              className="text-[var(--primary-color)] font-bold underline"
            >
              here
            </HashLink>
          </p>
        </div>
      )}
    </div>
  );
};

export default AllBookings;
