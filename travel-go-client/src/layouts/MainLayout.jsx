import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Navigation/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import usePackages from "../hooks/usePackages";
import { Triangle } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  // initial package loading state for spinner
  const { packagesLoading } = usePackages();

  // scroll to top upon route change
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div>
      {packagesLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Triangle
            visible={true}
            height="100"
            width="1000"
            color="#ff825c"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div>
          {console.log("hello")}
          <Outlet />

          {/* scroll to to btn */}
          <ScrollToTop smooth color="#6f00ff"></ScrollToTop>

          <footer id="footer">
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
