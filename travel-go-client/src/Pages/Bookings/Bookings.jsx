import React, { useContext, useEffect, useState } from "react";
import "./Bookings.css";
import Navigation from "../Shared/Navigation/Navigation";
import bookingBg from "../../assets/bookingsBg.png";
import profileBg from "../../assets/userProfileBg.png";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "./BookingCard/BookingCard";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // flags
  const [isDeleted, setIsDeleted] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [isConfirmed, isDeleted, user]);

  console.log(bookings);

  // cancel booking method
  const handleCancelBooking = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This booking will be cancelled.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
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
                "Your booking has been cancelled successfully",
                "success"
              );
            }
          });
      }
    });
  };

  const handleConfirmBooking = (_id) => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ confirm: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setIsConfirmed(!isConfirmed);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your booking has been confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
                Bookings
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* user profile */}
      <div className="relative min-h-[580px]">
        <img src={profileBg} alt="" className="mt-16 mx-auto block" />

        <div className="absolute bottom-40 left-[46%] w-[120px] h-[120px] border-4 border-[#ff6e30] rounded-full">
          {user?.photoURL ? (
            <>
              <img
                src={user?.photoURL}
                alt=""
                className="w-full h-full rounded-full"
              />
            </>
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
        </div>

        <div
          className="text-center mt-[80px]"
          style={{ fontFamily: "var(--volkhov)" }}
        >
          {user?.displayName && (
            <p className="font-bold text-xl mb-2">{user?.displayName}</p>
          )}
          <p className="font-bold text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* user booking information */}
      <div className="container">
        {bookings.length ? (
          <div className="container space-y-16">
            {bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                bookingInfo={booking}
                handleCancelBooking={handleCancelBooking}
                handleConfirmBooking={handleConfirmBooking}
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
    </div>
  );
};

export default Bookings;
