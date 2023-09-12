import React, { useEffect, useState } from "react";
import "./Reviews.css";
import reviewsBg from "../../../assets/reviewsBg.png";
import ReviewCard from "./ReviewCard/ReviewCard";
import Slider from "react-slick";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // react slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    pauseOnHover: true,
  };

  return (
    <div
      style={{
        backgroundImage: `url(${reviewsBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "768px",
      }}
    >
      <div className="text-center pt-36">
        <p className="text-[var(--primary-color)] font-semibold text-lg">
          Reviews
        </p>
        <h3
          className="text-4xl font-bold mb-4 leading-relaxed text-[rgb(1, 56, 61)] md:w-[35%] mx-auto"
          style={{ fontFamily: "var(--volkhov)" }}
        >
          See What Our Clients Say About Us
        </h3>
      </div>

      {/* reviews slider */}
      <div className="w-[90%] md:w-[50%] mx-auto mt-10">
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard key={review._id} userReview={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
