import React, { useEffect, useState } from "react";
import "./Tours.css";
import toursBg from "../../../assets/toursImg.png";
import CenteredSpinner from "../../../components/CenteredSpinner/CenteredSpinner";

const Tours = () => {
  const [tourData, setTourData] = useState([]);
  useEffect(() => {
    fetch("https://travelgo-server.onrender.com/tours")
      .then((res) => res.json())
      .then((data) => setTourData(data));
  }, []);

  return (
    <div className="relative container pb-10 px-4 overflow-hidden min-h-fit">
      <img
        src={toursBg}
        alt=""
        className="absolute top-[20rem] md:top-0 -right-[12rem] md:right-0 -z-10 brightness-50"
      />

      <div className="tour-text md:w-[50%] z-10">
        <p className="text-[var(--primary-color)] font-semibold text-lg">
          Tours
        </p>
        <h3
          className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed text-[rgb(1, 56, 61)]"
          style={{ fontFamily: "var(--volkhov)" }}
        >
          We Provide You The Best Europe Sightseeing Tours
        </h3>
        <p className="md:text-gray-500 text-gray-400">
          Dreaming of a European vacation? We can help you make it a reality
          with our selection of the best sightseeing tours in Europe. Whether
          you're interested in history, culture, food, or nature, we have a tour
          that's perfect for you. Our tours are led by experienced guides who
          will take you to all the must-see attractions, from the Eiffel Tower
          to the Colosseum. You'll also get to experience local culture through
          food tastings, cooking classes, and visits to museums and art
          galleries.
        </p>

        <button className="bg-[#DF6951] text-white text-center w-[184px] h-[53px] rounded-lg mt-10 btn-transition">
          Explore Now
        </button>
      </div>

      {!tourData.length ? (
        <div className="h-[300px] w-[30%] py-20">
          <span className="loading loading-spinner text-warning loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 md:w-[80%] gap-3 z-10 mt-10">
            {tourData?.map((tour) => (
              <div key={tour._id} className="relative btn-transition">
                <span
                  className="badge rounded-full text-white md:w-[83px] absolute top-4 left-4"
                  style={{
                    background:
                      "linear-gradient(100deg, #FF7255 8.93%, #BA4E38 100%)",
                  }}
                >
                  ${tour.price}
                </span>
                <img
                  src={tour.img}
                  alt=""
                  className="shadow-lg border-2 border-error rounded-xl"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tours;
