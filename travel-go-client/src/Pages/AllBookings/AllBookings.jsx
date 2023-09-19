import React, { useEffect, useState } from "react";
import "./AllBookings.css";
import Navigation from "../Shared/Navigation/Navigation";
import bookingBg from "../../assets/bookingsBg.png";
import { useLoaderData } from "react-router-dom";
import BookingCard from "../Bookings/BookingCard/BookingCard";
import Swal from "sweetalert2";

const AllBookings = () => {
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
    Swal.fire({
      title: "Admin Login",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Admin username">
        <input type="password" id="password" class="swal2-input" placeholder="Admin password">`,
      confirmButtonText: "Sign in",
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        }
        return { login: login, password: password };
      },
    }).then((result) => {
      if (
        result.value.login === import.meta.env.VITE_ADMIN_USERNAME &&
        result.value.password === import.meta.env.VITE_ADMIN_PASSWORD
      ) {
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
          title: "Admin Login Failed",
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

      {/* all bookings */}
      <div className="space-y-16">
        {bookings?.map((booking) => (
          <BookingCard
            key={booking._id}
            bookingInfo={booking}
            admin={true}
            handleCancelBooking={handleCancelBooking}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBookings;
