import React, { useContext } from "react";
import "./AddPackage.css";
import bookingBannerBg from "../../assets/bookingBanner.png";
import Navigation from "../Shared/Navigation/Navigation";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { RiAdminFill } from "react-icons/ri";

const AddPackage = () => {
  // admin status from authProvider
  const { handleAdminLogin, handleAdminLogout, admin } =
    useContext(AuthContext);

  const handleAddPackage = (e) => {
    e.preventDefault();

    const form = e.target;

    const country = form.country.value;
    const place = form.place.value;
    const countryCode = form.countryCode.value;
    const img = form.img.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const people = form.people.value;
    const departure = form.departure.value;
    const departureTime = form.departureTime.value;
    const arrivalTime = form.arrivalTime.value;
    const review = form.review.value;
    const desc = form.desc.value;

    const packageInfo = {
      country,
      place,
      img,
      price,
      duration,
      people,
      countryCode,
      departure,
      departureTime,
      arrivalTime,
      review,
      desc,
      included: ["Mountain hiking", "Wildlife safari", "Scenic drives"],
    };

    if (admin === "true") {
      fetch("https://travelgo-server.onrender.com/packages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(packageInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your package has been added successfully",
              showConfirmButton: false,
              timer: 2500,
            });

            form.reset();
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
            <div className="banner-text mx-auto md:w-[50%] text-white text-center">
              <h1 className="text-6xl" style={{ fontFamily: "var(--curly)" }}>
                Add New Packages
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* booking info container */}
      <div className="spacer h-[1800px] bg-white border-4"></div>
      <div className="container booking-info-con shadow-2xl">
        <div className="h-[100px] bg-base-200">
          <div className="h-full w-[50%] md:w-[25%] bg-white flex items-center justify-center space-x-2">
            <AiOutlinePlusCircle className="text-lg" />
            <span className="text-lg text-[#343434] font-bold">
              New Package
            </span>
          </div>
        </div>

        {/* admin button */}
        <div className="text-end pt-8 w-[80%] mx-auto">
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

        {/* booking inputs */}
        <div className="add-package px-4 md:px-6 pt-6 pb-16 flex justify-center items-center">
          <div className="booking-input">
            <div className="text-center space-y-4">
              <h1
                className="text-4xl text-[#181E4B] font-bold"
                style={{ fontFamily: "var(--volkhov)" }}
              >
                Build A New Package
              </h1>

              <p className="md:px-8">
                Don't forget to fill all the fields with relevant and necessary
                information because this package will be exhibited on the home
                page.
              </p>
            </div>

            {/* input fields */}
            <form
              action=""
              className="mt-10 new-package-input"
              onSubmit={handleAddPackage}
            >
              <div className="booking-input-field add-package-input">
                <input type="text" name="country" placeholder="Country Name" />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input type="text" name="place" placeholder="Place Name" />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Country Code (e.g BD)"
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input type="text" name="img" placeholder="Image Link" />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input type="number" name="price" placeholder="Price" />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input
                  type="number"
                  name="duration"
                  placeholder="Duration in Days (in number)"
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input
                  type="number"
                  name="people"
                  placeholder="Maximum People (in number)"
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input
                  type="text"
                  name="departure"
                  placeholder="Airport (e.g Hazrat Shajalal Airport, Bangladesh)"
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input
                  type="text"
                  name="departureTime"
                  placeholder="Departure Time (e.g 10:30 AM)"
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input
                  type="text"
                  name="arrivalTime"
                  placeholder="Arrival Time (e.g 8:30 PM)"
                />
              </div>
              {/* -------- */}
              <div className="booking-input-field add-package-input">
                <input
                  type="text"
                  name="review"
                  placeholder="Review (in thousand. e.g 2.1k)"
                />
              </div>
              {/* -------- */}

              <div className="add-package-input">
                <textarea
                  name="desc"
                  rows="6"
                  placeholder="Description"
                  className="mx-auto block px-14 py-7 outline-none"
                ></textarea>
              </div>

              <button
                className="btn btn-transition w-[225px] h-[25px] bg-[#DF6951] text-white rounded-lg font-medium hover:bg-[#DF6951] mx-auto block mt-10"
                type="submit"
              >
                ADD PACKAGE
              </button>
            </form>
          </div>
          {/* ------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
