import React from "react";

const CenteredSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner text-warning loading-lg block"></span>
    </div>
  );
};

export default CenteredSpinner;
