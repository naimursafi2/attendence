import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { toast, ToastContainer } from "react-toastify";
const Registation = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const[loading, setLoading] = useState(false)
  const auth = getAuth();
  const db = getDatabase();
  const handelSignUp = () => {
    setLoading(true)
    setErrors({
      fullName: "",
      email: "",
      password: "",
    });
    if (!registerData.fullName) {
      setLoading(false)
      return setErrors((prev) => ({
        ...prev,
        fullName: "Enter your fullname",
      }));
    }
    // console.log(registerData);
    createUserWithEmailAndPassword(
      auth,
      registerData.email,
      registerData.password
    )
      .then((response) => {
        // console.log("registration res",response);
        updateProfile(auth.currentUser, {
          displayName: registerData.fullName,
        })
          .then(() => {
            // console.log(response.user);

            set(ref(db, "users/" + response.user.uid), {
              displayName: response.user.displayName,
              email: response.user.email,
            }).then(() => {
              sendEmailVerification(auth.currentUser).then(() => {
                toast.success("Registration Successfully, please verify your email")
               setTimeout(() => {
                 navigate("/login")
               }, 3000);
              });
            });
          })
          .catch((error) => {});
      })
      .catch((error) => {
        setLoading(false)
        const errorCode = error.code;
        if (errorCode == "auth/invalid-email") {
          return setErrors((prev) => ({
            ...prev,
            email: "A Valid email is required",
          }));
        }
        if (errorCode == "auth/email-already-in-use") {
          return setErrors((prev) => ({
            ...prev,
            email: "Email Already in use",
          }));
        }

        if (errorCode == "auth/missing-password") {
          return setErrors((prev) => ({
            ...prev,
            password: "password is required",
          }));
        }
        if (errorCode == "auth/weak-password") {
          return setErrors((prev) => ({
            ...prev,
            password: "Enter e week password at least 6 character",
          }));
        }
      }).finally(()=>{
       
      })
  };
  // console.log(errors);

  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer position="top-right" />
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
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
              id="fullName"
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="bg-red-600 px-2 rounded text-white mt-1 w-fit">
                {errors.fullName}
              </p>
            )}
            <label
              htmlFor="login"
              className="font-semibold text-sm text-gray-400 mt-4 pb-1 block"
            >
              E-mail
            </label>
            <input
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              id="login"
              type="text"
              className="border rounded-lg px-3 py-2 mt-1  text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="bg-red-600 px-2 rounded text-white mt-1 w-fit">
                {errors.email}
              </p>
            )}
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-400 mt-4 pb-1 block"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              id="password"
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="bg-red-600 px-2 rounded text-white mt-1 w-fit">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <div>
              <button className="flex items-center cursor-pointer mt-4 justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                <FcGoogle />
                <span className="ml-8">Sign in with Google</span>
              </button>
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={handelSignUp}
              type="submit"
              className={`py-2 ${loading ? "bg-blue-600/15" :"bg-blue-600 hover:bg-blue-700"} px-4 cursor-pointer  focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
          disabled={loading}
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
