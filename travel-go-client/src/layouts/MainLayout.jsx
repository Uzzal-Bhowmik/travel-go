import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Navigation/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const MainLayout = () => {
  return (
    <div>
      <Outlet />

      {/* scroll to to btn */}
      <ScrollToTop smooth color="#6f00ff"></ScrollToTop>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
