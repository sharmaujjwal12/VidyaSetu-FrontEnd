import { useRef } from "react";
import Loader from "./Loader";
import { useState } from "react";

function SignIn({ LoginClicked, loginErrors }) {
  let email = useRef();
  let password = useRef();
  let [loader,setLoader] = useState(false);
  const onLoggedInClicked = (action) => {
    action.preventDefault();
    LoginClicked(email.current.value, password.current.value);
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      
      {/* Card */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg 
      border border-gray-200 rounded-2xl shadow-lg 
      p-6 sm:p-8 bg-white">

        {/* Logo */}
        <div className="flex justify-center mb-6">
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-2">
          Please Sign In
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back! Login to continue 🚀
        </p>

         {/**Loader */}
        <div className="mb-5">{loader === true && <Loader/>}</div>

        {/* Errors */}
        {loginErrors?.length > 0 && (
          <div className="mb-6 rounded-xl border border-red-200 p-4">
            <h3 className="mb-3 text-sm font-semibold text-red-700">
              Please fix the following errors
            </h3>

            <ul className="space-y-2">
              {loginErrors.map((item, index) => (
                <li
                  key={index}
                  className="rounded-lg px-3 py-2 text-sm text-red-600 border"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Form */}
        <form>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>

            <input
              type="email"
              ref={email}
              placeholder="name@example.com"
              className="w-full rounded-xl border border-gray-300 
              px-4 py-2 focus:ring-2 focus:ring-blue-500 
              focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>

            <input
              ref={password}
              type="password"
              placeholder="Enter password"
              className="w-full rounded-xl border border-gray-300 
              px-4 py-2 focus:ring-2 focus:ring-blue-500 
              focus:outline-none transition"
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-500"
            />

            <label className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            onClick={(action) => {
              onLoggedInClicked(action)
              setLoader(true);
            }}
            className="w-full rounded-xl bg-blue-500 
            py-2.5 text-white font-semibold 
            hover:bg-blue-600 
            transition duration-300"
          >
            Sign In
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-400">
            © 2025 VidyaSetu. All rights reserved.
          </p>

        </form>
      </div>

    </div>
  );
}

export default SignIn;