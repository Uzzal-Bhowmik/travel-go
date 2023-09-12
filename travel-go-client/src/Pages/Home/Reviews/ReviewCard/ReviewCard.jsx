import React from "react";
import quoteIcon from "../../../../assets/quote.png";
import "./ReviewCard.css";

const ReviewCard = ({ userReview }) => {
  const { img, name, profession, review } = userReview;
  return (
    <div className="relative h-[377px] flex items-end">
      <img
        src={img}
        alt=""
        className="shadow-2xl rounded-full absolute top-0 left-[40%]"
        style={{ border: "10px solid #fff" }}
      />
      <div className="bg-white h-[77%] pt-24 rounded-3xl">
        <div className="px-16 review-text relative">
          <img src={quoteIcon} alt="" className="absolute -top-9 left-9" />
          <p>{review}</p>
          <p
            className="font-extrabold text-center mt-6"
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
