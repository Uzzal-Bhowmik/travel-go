import React, { useContext, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import loginBg from "../../assets/loginBg.png";
import registerPic from "../../assets/signUp.png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { isLoading, signUp, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signUp(email, pass)
      .then((result) => {
        form.reset();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((err) => setError(err?.code));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        navigate("/");
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
              <p className="text-sm font-medium">Be Our Guest</p>
              <h1 className="text-6xl" style={{ fontFamily: "var(--curly)" }}>
                Register
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center container mt-20">
        {/* left side: login form */}
        <div className="w-[50%]">
          <form
            action=""
            className="md:w-[90%] md:ml-auto p-4"
            onSubmit={handleRegister}
          >
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--volkhov)" }}
            >
              Sign Up
            </h3>
            <p className="mt-3 text-gray-400">
              Let’s get you all st up so you can access your personal account.
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
              type="submit"
              className="btn btn-block bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)] hover:shadow-lg mt-7"
            >
              Register
            </button>

            <p className="text-sm text-center mt-2 mb-5">
              Already have an account?{" "}
              <Link to="/login" className="text-[var(--primary-color)]">
                Sign In
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
        <div className="w-[40%]">
          <img src={registerPic} alt="" className="w-full h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Register;
