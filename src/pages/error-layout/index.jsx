import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <h1 className="text-9xl font-extrabold animate-bounce">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-100 max-w-md text-center">
        Sorry, the page you're looking for doesn't exist. It might have been
        removed or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-white text-purple-700 font-medium text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default Error;
