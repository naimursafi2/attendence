import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Registation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto text-white">
          <h2 className="text-3xl text-center font-bold">Registration</h2>
          <div className="mt-5">
            <label
              htmlFor="fullName"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />

            <label
              htmlFor="login"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              E-mail
            </label>
            <input
              id="login"
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center items-center">
            <div>
              <button className="flex items-center cursor-pointer justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                <FcGoogle />
                <span className="ml-8">Sign in with Google</span>
              </button>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign IN
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
