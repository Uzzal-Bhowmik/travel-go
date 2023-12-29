import React, { useEffect, useState } from "react";

const usePackages = () => {
  // fetch packages data
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(true);
  useEffect(() => {
    setPackagesLoading(true);
    fetch("https://travelgo-server.onrender.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        if (packages) {
          setPackagesLoading(false);
        }
      });
  }, []);

  return { packages, packagesLoading };
};

export default usePackages;
