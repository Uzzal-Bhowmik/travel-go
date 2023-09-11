import React from "react";
import "./PackageCard.css";

const PackageCard = ({ pkg }) => {
  const { country } = pkg;
  return (
    <div>
      <p>this is a single card: {country}</p>
    </div>
  );
};

export default PackageCard;
