import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div id="error-page">
        <h1 className="text-5xl text-error font-bold">Oops!</h1>
        <p className="mt-6 mb-8 text-gray-500">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-lg">
          <i>
            <span className="text-red-600 font-bold">{error.status}</span>,{" "}
            {error.error.message}
          </i>
        </p>

        <Link to="/" className="mt-10 block">
          <button className="btn btn-active btn-link"> Go back home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
