import React from "react";
import "./BookingCard.css";
import { BsFillCalendar2WeekFill, BsFillTelephoneFill } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";

const BookingCard = ({
  bookingInfo,
  handleConfirmBooking,
  handleCancelBooking,
  admin,
  email,
}) => {
  const {
    _id,
    name,
    img,
    country,
    date,
    arrivalTime,
    departureTime,
    price,
    place,
    numOfTickets,
    phone,
  } = bookingInfo;

  return (
    <div className="card card-side bg-base-100 border-2 border-[var(--primary-color)] w-[95%] md:w-[80%] mx-auto hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <figure className="w-[95%] md:w-[33%] mx-auto pt-2 md:pt-0">
        <img src={img} alt={place + " " + country} className="h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl md:text-3xl font-bold w-full block">
          <span className="text-[var(--primary-color)]">{place}, </span>
          <span>{country}</span>
        </h2>

        <span className="text-gray-400">
          Booked by <span>{email || name}</span>
        </span>

        {/* booking icons info */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center booking-card-icons">
              <BsFillCalendar2WeekFill />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-400 font-medium">Date</p>
              <p className="leading-none pt-[2px]">{date}</p>
            </div>
          </div>
          {/* -------- */}
          <div className="flex items-center">
            <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center booking-card-icons">
              <IoTicketSharp />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-400 font-medium">Tickets</p>
              <p className="leading-none pt-[2px]">{numOfTickets}</p>
            </div>
          </div>
          {/* -------- */}
          <div className="flex items-center">
            <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center booking-card-icons">
              <AiFillDollarCircle />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-400 font-medium">Price</p>
              <p className="leading-none pt-[2px]">$ {price}</p>
            </div>
          </div>
          {/* -------- */}
          <div className="flex items-center">
            <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center booking-card-icons">
              <BsFillTelephoneFill />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-400 font-medium">Phone</p>
              <p className="leading-none pt-[2px]">{phone}</p>
            </div>
          </div>
          {/* -------- */}
        </div>

        {/* booking timings */}
        <div>
          <div className="flex justify-between items-center mt-8 w-full md:w-[85%] md:px-2">
            <div>
              <p className="text-gray-400 font-medium">Departure Time</p>
              <p className="pt-[2px] text-lg font-bold">{departureTime}</p>
            </div>
            <span className="bg-[var(--primary-color)] h-[2px] w-[20px] md:w-[44px]"></span>
            <div>
              <p className="text-gray-400 font-medium">Arrival Time</p>
              <p className="pt-[2px] text-lg font-bold">{arrivalTime}</p>
            </div>
          </div>
        </div>

        {/* bookings buttons */}
        <div className="md:w-[65%] grid grid-cols-2 gap-x-6 mt-5">
          <button
            className="btn btn-error text-white"
            onClick={() => handleCancelBooking(_id)}
          >
            Cancel
          </button>

          {!admin && (
            <button
              className="btn btn-success text-white"
              onClick={() => handleConfirmBooking(_id)}
              disabled={bookingInfo?.confirm === true}
            >
              {bookingInfo?.confirm ? "Booking Confirmed" : "Confirm Booking"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
