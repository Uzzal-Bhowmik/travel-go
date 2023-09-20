import React from "react";
import quoteIcon from "../../../../assets/quote.png";
import "./ReviewCard.css";

const ReviewCard = ({ userReview }) => {
  const { img, name, profession, review } = userReview;
  return (
    <div className="relative h-[600px] md:h-[377px] flex items-end">
      <img
        src={img}
        alt=""
        className="review-img shadow-2xl rounded-full absolute top-0 left-[40%]  w-[30%] md:w-auto"
        style={{ border: "10px solid #fff" }}
      />
      <div className="bg-white md:h-[77%] pt-12 md:pt-24 rounded-3xl mb-[13rem] md:mb-0">
        <div className="px-4 md:px-16 review-text relative">
          <img src={quoteIcon} alt="" className="absolute -top-9 left-9" />
          <p className="text-sm md:text-base">{review}</p>
          <p
            className="font-extrabold text-center my-6"
            style={{ fontFamily: "var(--volkhov)" }}
          >
            <span className="text-[#ff825c]">{name}</span> - {profession}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
