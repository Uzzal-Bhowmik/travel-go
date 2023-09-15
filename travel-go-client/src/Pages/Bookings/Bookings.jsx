import React, { useContext, useEffect, useState } from "react";
import "./Bookings.css";
import Navigation from "../Shared/Navigation/Navigation";
import bookingBg from "../../assets/bookingsBg.png";
import profileBg from "../../assets/userProfileBg.png";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

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
          className="text-center mt-[72px]"
          style={{ fontFamily: "var(--volkhov)" }}
        >
          <p className="font-bold text-xl mb-2">{user?.displayName}</p>
          <p className="font-bold text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* user booking information */}
      <div className="container">
        <h1 className="bg-base-100 border text-dark text-3xl py-4 pl-10 rounded-xl shadow-lg font-bold flex items-center">
          <FaRegPaperPlane />
          <span className="ml-5">Bookings</span>
        </h1>
      </div>

      <div className="container mt-10">
        {/* row */}
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {bookings?.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
