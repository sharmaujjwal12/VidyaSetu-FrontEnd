import { useRef } from "react";

function SignUp({ signUpClicked, signUpErrors }) {
  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();
  let confirmPassword = useRef();
  let gender = useRef();
  const onSignUpClicked = (action) => {
    action.preventDefault();
    signUpClicked(
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      password.current.value,
      confirmPassword.current.value,
      gender.current.value,
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4 w-3xl">
      {console.log("Signed Up Errors Bhai : ", signUpErrors)}

      {/* Card */}
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Create an Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Join us and start your journey 🚀
        </p>

        {/* Errrors */}
        {signUpErrors?.length > 0 && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 animate-fade-in">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs">
                !
              </span>
              Please fix the following errors
            </h3>

            <ul className="space-y-2">
              {signUpErrors.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 rounded-lg bg-white px-3 py-2 text-sm text-red-600 shadow-sm transition hover:shadow-md"
                >
                  <span className="mt-0.5 text-red-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Form */}
        <form>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                ref={firstName}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 transition"
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
                name="lastName"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="inputEmail3"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              ref={email}
              id="inputEmail3"
              name="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="inputPassword3"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="inputPassword3"
                ref={password}
                name="password"
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 transition"
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
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          {/* Gender */}
          <fieldset className="mb-6">
            <legend className="text-sm font-medium text-gray-700 mb-3">
              Gender
            </legend>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="radio"
                  name="gender"
                  id="gridRadios1"
                  ref={gender}
                  value="male"
                  defaultChecked
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                Male
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="radio"
                  name="gender"
                  id="gridRadios2"
                  ref={gender}
                  value="female"
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                Female
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="other"
                  disabled
                />
                Other
              </label>
            </div>
          </fieldset>

          {/* Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="gridCheck1"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="gridCheck1" className="ml-2 text-sm text-gray-600">
              Allows Terms & Condition
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-500 py-2.5 text-white font-semibold transition-all duration-300 hover:bg-indigo-600 hover:shadow-md active:scale-95"
            onClick={(action) => onSignUpClicked(action)}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
