import React, { useState } from "react";
import "./Packages.css";
import PackageCard from "../../../components/PackageCard/PackageCard";
import { useMediaQuery } from "react-responsive";
import CenteredSpinner from "../../../components/CenteredSpinner/CenteredSpinner";
import usePackages from "../../../hooks/usePackages";

const Packages = () => {
  // travel packages data
  const { packages } = usePackages();

  // show 3 packages in mobile devices
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [showAll, setShowAll] = useState(!isMobile);

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-[var(--primary-color)] font-semibold text-sm">
          TRENDY
        </p>
        <h1
          className="text-4xl text-[#181E4B] font-bold mt-2"
          style={{ fontFamily: "var(--volkhov)" }}
        >
          Our Trending Tour <br />
          Packages
        </h1>
      </div>

      {!packages?.length ? (
        <CenteredSpinner />
      ) : (
        <div className="w-[95%] mx-auto md:container grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.slice(0, showAll ? packages.length : 3).map((pkg) => (
            <PackageCard key={pkg._id} pkg={pkg} />
          ))}

          {isMobile && (
            <button
              className="btn btn-error btn-block"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Packages;
