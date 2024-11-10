import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center text-xl font-bold mb-5">Logo</div>
        <div className="max-w-lg  w-full p-8 bg-white rounded-lg shadow-md text-center">
          <h2 className="mb-6 text-xl font-semibold text-gray-800">Sign Up</h2>
          <div className="flex flex-row space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Surname"
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button className="w-full p-3 mb-4 text-white font-bold bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Sign Up
          </button>
          <Link to="/signin" className="text-blue-500 hover:underline">Already have an account? </Link>
        </div>
      </div>
        );
};

export default SignUp;
