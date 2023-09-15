import React, { useEffect, useState } from "react";
import "./Packages.css";
import PackageCard from "../../../components/PackageCard/PackageCard";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

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

      <div className="container grid md:grid-cols-3 gap-7 p-5 md:p-0">
        {packages.map((pkg) => (
          <PackageCard key={pkg._id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
