import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();
  const handleSignIn = () => {
    setErrors({
      email: "",
      password: "",
    });
    // console.log(logData);
    signInWithEmailAndPassword(auth, logData.email, logData.password)
      .then((res) => {
        if (!res.user.emailVerified) {
          return toast.error("Email is not Verified");
        } else {
          toast.success("Log in successfull");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode == "auth/invalid-email") {
          return setErrors((prev) => ({
            ...prev,
            email: "A valid email is required",
          }));
        }
        if (errorCode == "auth/missing-password") {
          return setErrors((prev) => ({
            ...prev,
            password: "correct the password",
          }));
        }
      });
  };
  console.log(errors);

  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer />
      <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto text-white">
          <h2 className="text-3xl text-center font-bold">Log in</h2>
          <div className="mt-5">
            <label
              htmlFor="login"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              E-mail
            </label>
            <input
              onChange={(e) =>
                setLogData((prev) => ({ ...prev, email: e.target.value }))
              }
              id="login"
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setLogData((prev) => ({ ...prev, password: e.target.value }))
              }
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
          <div className="mt-1">
            <button
              onClick={handleSignIn}
              type="submit"
              className="py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Sign IN
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              to="/registation"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
