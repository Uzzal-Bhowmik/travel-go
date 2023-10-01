import React from "react";

const CenteredSpinner = ({ height }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        height ? "h-[60vh]" : "h-screen"
      }`}
    >
      <span className="loading loading-spinner text-warning loading-lg block"></span>
    </div>
  );
};

export default CenteredSpinner;
