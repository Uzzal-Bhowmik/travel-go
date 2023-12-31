import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DynamicBooking from "./Pages/DynamicBooking/DynamicBooking.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Bookings from "./Pages/Bookings/Bookings.jsx";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute.jsx";
import AllBookings from "./Pages/AllBookings/AllBookings.jsx";
import AddPackage from "./Pages/AddPackage/AddPackage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "packages/:id",
        loader: async ({ params }) =>
          await fetch(
            `https://travelgo-server.onrender.com/packages/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <DynamicBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "/allBookings",
        element: (
          <PrivateRoute>
            <AllBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/addPackage",
        element: (
          <PrivateRoute>
            <AddPackage />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
