import React, { useContext, useEffect, useState } from "react";
import "./Bookings.css";
import Navigation from "../Shared/Navigation/Navigation";
import bookingBg from "../../assets/bookingsBg.png";
import profileBg from "../../assets/userProfileBg.png";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "./BookingCard/BookingCard";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user, logOut } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate();

  // flags
  const [isDeleted, setIsDeleted] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // jwt token and bookings data fetch
  useEffect(() => {
    fetch(
      `https://travelgo-server.onrender.com/bookings?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("travelGo-jwt-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
          setIsLoading(false);
        } else {
          Swal.fire(
            "Please Sign In",
            "Your token has expired for the session",
            "warning"
          );
          // logout as the token expires
          logOut()
            .then(() => {
              // navigate after logout
              navigate("/login");
            })
            .catch((err) => console.log(err));
        }
      });
  }, [isConfirmed, isDeleted, user, logOut, navigate]);

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
        fetch(`https://travelgo-server.onrender.com/bookings/${_id}`, {
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

  // confirm booking method
  const handleConfirmBooking = (_id) => {
    fetch(`https://travelgo-server.onrender.com/bookings/${_id}`, {
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
                Your Bookings
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* user profile */}
      <div className="relative h-[310px] md:h-[580px]">
        <img src={profileBg} alt="" className="mt-16 mx-auto block" />

        <div className="absolute bottom-36 md:bottom-40 left-[34%] md:left-[46%] w-[120px] h-[120px] border-4 border-[#ff6e30] rounded-full">
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
        {isLoading ? (
          <progress className="progress progress-error w-1/2 mx-auto block"></progress>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;
