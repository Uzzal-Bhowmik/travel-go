import React from "react";
import "./Brands.css";
import brand1 from "../../assets/brands logo/image 909.png";
import brand2 from "../../assets/brands logo/image 911.png";
import brand3 from "../../assets/brands logo/image 912-1.png";
import brand4 from "../../assets/brands logo/image 912.png";
import brand5 from "../../assets/brands logo/image 913.png";

const Brands = () => {
  return (
    <div className="brands md:flex items-center justify-evenly mb-10">
      <img src={brand1} alt="" />
      <img src={brand2} alt="" />
      <img src={brand3} alt="" />
      <img src={brand4} alt="" />
      <img src={brand5} alt="" />
    </div>
  );
};

export default Brands;
