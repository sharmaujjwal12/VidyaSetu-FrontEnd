function MiddleLayoutAtLogin({login, signup}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Area - grows to fill space between navbar and footer */}
      <div className="flex-grow flex items-center justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-4xl">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-blue-600">PrepSetu</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600">
                Your comprehensive platform for exam preparation and learning
                excellence.
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-sm md:text-base text-gray-700">
                    Comprehensive study materials
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-sm md:text-base text-gray-700">
                    Live classes and interactive sessions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-sm md:text-base text-gray-700">
                    Practice tests and assessments
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button className="px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base" onClick={()=>signup()}>
                  Sign Up
                </button>
                <button className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 text-sm md:text-base" onClick={()=>login()}>
                  Log In
                </button>
              </div>
            </div>

            {/* Right Side - Illustration/Image Area */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-gray-600 font-medium">
                    Learning Made Easy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 text-center hover:bg-gray-100 transition">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                5000+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Questions</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 text-center hover:bg-gray-100 transition">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                100+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Expert Mentors
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 text-center hover:bg-gray-100 transition col-span-2 md:col-span-1">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                10K+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Active Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleLayoutAtLogin;
