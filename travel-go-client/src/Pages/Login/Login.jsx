import React, { useContext, useState } from "react";
import "./Login.css";
import Navigation from "../Shared/Navigation/Navigation";
import loginBg from "../../assets/loginBg.png";
import loginSmall from "/loginSmall.png";
import loginSidePic from "../../assets/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { isLoading, signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signIn(email, pass)
      .then((result) => {
        form.reset();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      })
      .catch((err) => setError(err?.code));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err));
  };

  return (
    <div>
      {/* banner */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${loginBg})`,
        }}
        className="booking-banner-container"
      >
        <div>
          <Navigation />
          <div className="home-banner p-2">
            {/* banner text */}
            <div className="banner-text mx-auto md:w-[50%] text-white text-center space-y-3">
              <p className="text-sm font-medium">Welcome Back</p>
              <h1 className="text-6xl" style={{ fontFamily: "var(--curly)" }}>
                Login
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center container mt-20 login-reg-container">
        {/* left side: login form */}
        <div className="md:w-[50%] left-side">
          <form
            action=""
            className="md:w-[90%] md:ml-auto p-4"
            onSubmit={handleLogin}
          >
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--volkhov)" }}
            >
              Login
            </h3>
            <p className="mt-3 text-gray-400">
              Login to access your TravelGo account
            </p>

            <div className="relative float-label-input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-500"
                required
              />
              <label
                htmlFor="email"
                className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker"
              >
                Email
              </label>
            </div>
            {/* ---------- */}
            <div className="relative float-label-input">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-500"
                required
              />
              <label
                htmlFor="password"
                className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker"
              >
                Password
              </label>
            </div>

            {/* error msg */}
            <p className="text-error font-bold pl-2 mb-4">{error}</p>

            {/* -------- */}

            <div className="flex justify-between items-center px-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name=""
                  id="remember"
                  className="h-[16px] w-[16px]"
                />

                <label htmlFor="remember" className="mt-[2px] text-gray-500">
                  Remember Me
                </label>
              </div>

              <div>
                <p className="text-[#FF8682] cursor-pointer">
                  Forgot Password?
                </p>
              </div>
            </div>

            {/* ---------- */}

            <button
              className="btn btn-block bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)] hover:shadow-lg mt-7"
              type="submit"
            >
              Login
            </button>

            <p className="text-sm text-center mt-2 mb-5">
              Don't have an account?{" "}
              <Link to="/register" className="text-[var(--primary-color)]">
                Sign Up
              </Link>
            </p>

            {/* divivder */}
            <div className="flex flex-col w-[90%] mx-auto border-opacity-50">
              <div className="divider text-gray-400">Or login with</div>
            </div>

            <div className="grid grid-cols-3 w-[70%] mx-auto mt-4 mb-10">
              <div
                className="w-[80%] h-[45px] border rounded-md flex justify-center items-center mx-auto hover:shadow-md hover:cursor-pointer transition-all duration-4000 ease-out"
                onClick={handleGoogle}
              >
                <FcGoogle className="text-2xl" />
              </div>
              <div
                className="w-[80%] h-[45px] border rounded-md flex justify-center items-center mx-auto hover:shadow-md hover:cursor-pointer transition-all duration-4000 ease-out"
                onClick={() => alert("Feature will be coming soon...")}
              >
                <BsFacebook className="text-2xl text-primary" />
              </div>
              <div
                className="w-[80%] h-[45px] border rounded-md flex justify-center items-center mx-auto hover:shadow-md hover:cursor-pointer transition-all duration-4000 ease-out"
                onClick={() => alert("Feature will be coming soon...")}
              >
                <BsGithub className="text-2xl" />
              </div>
            </div>
          </form>
        </div>

        {/* right side */}
        <div className="md:w-[40%] right-side">
          <img
            src={loginSidePic}
            alt=""
            className="hidden md:inline w-full h-[600px]"
          />
          <img
            src={loginSmall}
            alt=""
            className="block md:hidden rounded-xl w-[96%] mx-auto mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
