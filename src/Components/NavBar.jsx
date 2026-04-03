import styles from "./NavBar.module.css";

function NavBar({
  login,
  signup,
  logoutClicked,
  isLoggedIn,
  role,
  latestNews,
  loginButton,
  signUpButton,
  latestNewsHandler,
  homePage,
  homePageHandler,
  roadMapHandler,
  roadMap,
  ourProductsHandler,
  ourProducts,
  motivationHandler,
  motivation,
  addQuotes,
  addQuotesHandler,
  addMockTest,
  addMock,
  addQuestionHandler,
  enterQuestion,
  mockDetailsHandler,
  addMockDetails,
  addLecture,
  lectureHandler,
  addRoadMaps,
  addRoadMapHandler,
  addPaidTest,
  addPaidMock ,
  addPaidTestDetails,
  addPaidTestDetailsHandler,
   addPaidQuestion,
   addPaidQuestionHandler,
   addLectureDetails,
   addLectureDetailsHandler
}) {
  let onlatestNewsClick = () => {
    console.log("Latest News Clicked");
    latestNewsHandler();
  };

  let loginClick = () => {
    console.log("Login Clicked");
    login();
  };

  let signupClick = () => {
    console.log("Sign Up Clicked");
    signup();
  };

  const navItemStyle = (active) =>
    `flex flex-col items-center px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer
     ${active ? "bg-white text-black shadow-md scale-105" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`;

  return (
    <header
      className={`${isLoggedIn === false && 'w-screen'} bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg`}
    >
      {/* Top Navbar */}
      <div className="w-100vw mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 text-white font-bold text-xl tracking-wide hover:scale-105 transition-transform"
        >
          <svg width="40" height="32" role="img">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        {/* Nav Items */}
        <ul className="flex flex-wrap justify-center gap-3 mt-4 lg:mt-0">
          {isLoggedIn===true && role==="user" && <div className="flex flex-wrap">  
            <li>
            <a
              href="#"
              className={navItemStyle(homePage === true)}
              onClick={homePageHandler}
            >
              <svg width="24" height="1">
                <use xlinkHref="#home"></use>
              </svg>
              <span className="text-sm mt-1">Home</span>
            </a>
          </li>
          {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(latestNews === true)}
                onClick={onlatestNewsClick}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                <span className="text-sm mt-1">Latest News</span>
              </a>
            </li>
          )}

          {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(roadMap === true)}
                onClick={roadMapHandler}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#table"></use>
                </svg>
                <span className="text-sm mt-1">RoadMaps</span>
              </a>
            </li>
          )}

          {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(ourProducts === true)}
                onClick={ourProductsHandler}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#grid"></use>
                </svg>
                <span className="text-sm mt-1">Our Products</span>
              </a>
            </li>
          )}

          {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(motivation === true)}
                onClick={motivationHandler}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#people-circle"></use>
                </svg>
                <span className="text-sm mt-1">Motivational Quotes</span>
              </a>
            </li>
          )}
</div>}
          {/**Hosts Section */}
          {isLoggedIn===true && role==="host" && <div className="flex flex-wrap">      
             <li>
            <a
              href="#"
              className={navItemStyle(homePage === true)}
              onClick={homePageHandler}
            >
              <svg width="24" height="1">
                <use xlinkHref="#home"></use>
              </svg>
              <span className="text-sm mt-1">Home</span>
            </a>
          </li>
           {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(addQuotes === true)}
                onClick={addQuotesHandler}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#people-circle"></use>
                </svg>
                <span className="text-sm mt-1">Add Quotes</span>
              </a>
            </li>
          )}
          {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(addLecture === true)}
                onClick={lectureHandler}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#people-circle"></use>
                </svg>
                <span className="text-sm mt-1">Add Lectures</span>
              </a>
            </li>
          )}
          {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(addLectureDetails === true)}
                onClick={addLectureDetailsHandler}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#people-circle"></use>
                </svg>
                <span className="text-sm mt-1">Add Lectures Details</span>
              </a>
            </li>
          )}
          {isLoggedIn === true && (
            <li>
              <a
                href="#"
                className={navItemStyle(addRoadMaps === true)}
                onClick={addRoadMapHandler}
              >
                <svg width="24" height="1">
                  <use xlinkHref="#people-circle"></use>
                </svg>
                <span className="text-sm mt-1">Add RoadMaps</span>
              </a>
            </li>
          )}
          {isLoggedIn ===true && <li>
            <a
              href="#"
              className={navItemStyle(addMockTest === true)}
              onClick={() => addMock("", "", "", false)}
            >
              <svg width="24" height="1">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <span className="text-sm mt-1">Add Free Mocks</span>
            </a>
          </li>}
          {isLoggedIn===true && <li>
            <a
              href="#"
              className={navItemStyle(addMockDetails=== true)}
              onClick={() => mockDetailsHandler()}
            >
              <svg width="24" height="1">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <span className="text-sm mt-1">Add Free Mocks Details</span>
            </a>
          </li>}
          {isLoggedIn===true && <li>
            <a
              href="#"
              className={navItemStyle(addPaidTest === true)}
              onClick={() => addPaidMock ("", "", "", false)}
            >
              <svg width="24" height="1">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <span className="text-sm mt-1">Add Paid Mocks</span>
            </a>
          </li>}
          {isLoggedIn===true && <li>
            <a
              href="#"
              className={navItemStyle(addPaidTestDetails  === true)}
              onClick={() => addPaidTestDetailsHandler()}
            >
              <svg width="24" height="1">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <span className="text-sm mt-1">Add Paid Mocks Details</span>
            </a>
          </li>}
          {isLoggedIn===true && <li>
            <a
              href="#"
              className={navItemStyle(enterQuestion === true)}
              onClick={addQuestionHandler}
            >
              <svg width="24" height="1">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <span className="text-sm mt-1">Add Free Question</span>
            </a>
          </li>}
          {isLoggedIn===true && <li>
            <a
              href="#"
              className={navItemStyle(addPaidQuestion === true)}
              onClick={addPaidQuestionHandler}
            >
              <svg width="24" height="1">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <span className="text-sm mt-1">Add Paid Question</span>
            </a>
          </li>}</div>}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search */}
          <form className="w-full lg:w-1/3" role="search">
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </form>

          {/* Buttons */}
          {isLoggedIn !== true && (
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={loginClick}
                className={`px-5 py-2 rounded-xl font-medium transition-all duration-300
                ${
                  loginButton === true
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={signupClick}
                className={`px-5 py-2 rounded-xl font-medium transition-all duration-300
                ${
                  signUpButton === true
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-900 hover:bg-gray-200"
                }`}
              >
                Sign-up
              </button>
            </div>
          )}

          {/**Logout */}
          {isLoggedIn === true && (
            <button
              type="button"
              onClick={logoutClicked}
              className={`px-5 py-2 rounded-xl font-medium transition-all duration-300
                ${
                  signUpButton === true
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-900 hover:bg-gray-200"
                }`}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
