import React from "react";
import "./Bookings.css";
import Navigation from "../Shared/Navigation/Navigation";
import bookingBg from "../../assets/bookingsBg.png";

const Bookings = () => {
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
      <p>these are all my booking so farrrrrrr</p>
    </div>
  );
};

export default Bookings;
