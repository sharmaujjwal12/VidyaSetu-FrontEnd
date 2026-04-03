import { useRef } from "react";
import Loader from "./Loader";
import { useState } from "react";

function SignUp({ signUpClicked, signUpErrors }) {
  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();
  let confirmPassword = useRef();
  let gender = useRef();
  let role = useRef();
  let [loader,setLoader] = useState(false);

  const onSignUpClicked = (action) => {
    action.preventDefault();

    signUpClicked(
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      password.current.value,
      confirmPassword.current.value,
      gender.current.value,
      role.current.value,
    );
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      {/* Card */}
      <div
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl 
      border border-gray-200 rounded-2xl shadow-lg 
      p-6 sm:p-8 bg-white"
      >
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Join us and start your journey 🚀
        </p>
        {/**Loader */}
        <div className="mb-5">{loader === true && <Loader />}</div>
        {/* Errors */}
        {signUpErrors?.length > 0 && (
          <div className="mb-6 rounded-xl border border-red-200 p-4">
            <h3 className="mb-3 text-sm font-semibold text-red-700">
              Please fix the following errors
            </h3>

            <ul className="space-y-2">
              {signUpErrors.map((item, index) => (
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
          {/* First Last */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First Name
              </label>

              <input
                type="text"
                ref={firstName}
                placeholder="First name"
                className="w-full rounded-xl border border-gray-300 
                px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last Name
              </label>

              <input
                type="text"
                ref={lastName}
                placeholder="Last name"
                className="w-full rounded-xl border border-gray-300 
                px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>

            <input
              type="email"
              ref={email}
              placeholder="Email address"
              className="w-full rounded-xl border border-gray-300 
              px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>

              <input
                type="password"
                ref={password}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 
                px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>

              <input
                type="password"
                ref={confirmPassword}
                placeholder="Confirm password"
                className="w-full rounded-xl border border-gray-300 
                px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Gender */}
          <fieldset className="mb-6">
            <legend className="text-sm font-medium text-gray-700 mb-3">
              Gender
            </legend>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  ref={gender}
                  name="gender"
                  value="male"
                />
                Male
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" ref={gender} name="gender" value="female" />
                Female
              </label>
            </div>
          </fieldset>
          {/* Role */}
          <fieldset className="mb-6">
            <legend className="text-sm font-medium text-gray-700 mb-3">
              Role
            </legend>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  ref={role}
                  name="role"
                  value="user"
                />
                User
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" ref={role} name="role" value="host" />
                Host
              </label>
            </div>
          </fieldset>
          {/* Button */}
          <button
            type="submit"
            onClick={(action) => {
              onSignUpClicked(action)
              setLoader(true);
            }}
            className="w-full rounded-xl bg-indigo-500 
            py-2.5 text-white font-semibold 
            hover:bg-indigo-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
