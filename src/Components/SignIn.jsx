import { useRef } from "react";

function SignIn({LoginClicked,loginErrors}) {
  let email = useRef();
  let password = useRef();
  const onLoggedInClicked = (action)=>{
    action.preventDefault();
    LoginClicked(email.current.value,password.current.value);
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br w-2xl from-blue-50 via-white to-blue-100 px-4">
      
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-2xl">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="72"
            height="57"
            className="drop-shadow-md"
          />
        </div>

        {/* Heading */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
          Please sign in
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Welcome back! Login to continue
        </p>

         {/* Errors */}
          {loginErrors?.length > 0 && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 animate-fade-in">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs">
                !
              </span>
              Please fix the following errors
            </h3>

            <ul className="space-y-2">
              {loginErrors.map((item, index) => (
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
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="floatingInput"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              ref={email}
              name="email"
              id="floatingInput"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="floatingPassword"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              ref={password}
              type="password"
              name="password"
              id="floatingPassword"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="checkDefault"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="checkDefault"
              className="ml-2 text-sm text-gray-600"
            >
              Remember me
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-500 py-2.5 text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-md active:scale-95"
            onClick={(action)=>{onLoggedInClicked(action) }}
          >
            Sign in
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-400">
            © 2017–2025
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;