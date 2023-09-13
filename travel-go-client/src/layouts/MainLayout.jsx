import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Navigation/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      {/* Footer */}
      <footer id="footer">
        <Footer />
      </footer>
      {/* Footer End */}
    </div>
  );
};

export default MainLayout;
