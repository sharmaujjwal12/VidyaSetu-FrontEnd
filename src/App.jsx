import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import SideBar from "./Components/SideBar";
import SignIn from "./Components/SignIn";
import StudyItems from "./Components/StudyItems";
import SignUp from "./Components/signUp";
import PrepSetuContextProvider from "./store/PrepSetuContext";
// import LatestNews from './Components/LatestNews'
import LatestNews from "./Components/LatestNews";
import OurProducts from "./Components/OurProducts";
import Motivations from "./Components/Motivations";
import RoadMaps from "./Components/RoadMaps";
import LiveClass from "./Components/LiveClass";
import PaidTests from "./Components/Paidtests";
import FreeTests from "./Components/FreeTests";
import ClassRecord from "./Components/ClassRecord";
import Customer from "./Components/Customer";
import AddQuotes from "./Components/AddQuotes";
import InnerMock from "./Components/InnerMock";
import {
  signUpToServer,
  loginToServer,
  logoutFromServer,
  getQuoteFromServer,
  addMockToServer,
} from "./services/Backend";
import AddMocks from "./Components/AddMock";
import AddQuestions from "./Components/AddQuestion";
import FreeTestsHost from "./Components/FreeTestsHost";
import AddMockDetails from "./Components/AddMockDetails";
import AddLecture from "./Components/AddLecture";
import AddRoadMaps from "./Components/AddRoadMaps";
import AddMockPaid from "./Components/AddMockPaid";
import AddMockDetailsPaid from "./Components/AddMockDetailsPaid";
import AddPaidQuestions from "./Components/AddPaidQuestion";

function App() {
  let [enterQuestion, setEnterQuestion] = useState(false);
  let [signUpErrors, setSignUpErrors] = useState([]);
  let [loginErrors, setLoginErrors] = useState([]);
  let [loginButton, setLoginButton] = useState(false);
  let [addRoadMaps, setAddRoadMaps] = useState(false);
  let [addMockTest, setAddMockTest] = useState(false);
  let [isLoggedIn, setisLoggedIn] = useState(false);
  let [signUpButton, setSignButton] = useState(false);
  let [useremail, setUserEmail] = useState("");
  let [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === "true") {
      setisLoggedIn(true);
    }
  }, []);
  const getQuotes = (quotes) => {
    setQuotes(quotes);
    // setMotivation(true);
    setAddQuotes(false);
    console.log("Quote From Server : ", quotes);
  };
  useEffect(() => {
    getQuoteFromServer(getQuotes);
  }, []);
  let [homePage, setHomePage] = useState(true);
  let [latestNews, setLatestNews] = useState(false);
  let [innerMock, setInnerMock] = useState(false);
  let [roadMap, setRoadMap] = useState(false);
  let [ourProducts, setOurProducts] = useState(false);
  let [motivation, setMotivation] = useState(false);
  let [liveClass, setLiveClass] = useState(false);
  let [paidTest, setPaidTest] = useState(false);
  let [addPaidTest, setAddPaidTest] = useState(false);
  let [addPaidTestDetails, setAddPaidTestDetails] = useState(false);
  let [freeTest, setFreeTest] = useState(false);
  let [freeTestHost, setFreeTestHost] = useState(false);
  let [recordedClass, setRecordedClass] = useState(false);
  let [customerCare, setCustomerCare] = useState(false);
  let [addQuotes, setAddQuotes] = useState(false);
  let [addEditMock, setAddEditMock] = useState("");
  let [addPaidEditMock, setAddPaidEditMock] = useState("");
  let [addMockDetails, setAddMockDetails] = useState(false);
  let [addPaidQuestion, setAddPaidQuestion] = useState(false);
  let [addLecture, setAddLecture] = useState(false);

  const InnerMocks = () => {
    setInnerMock(true);
    setLoginButton(false);
    setAddMockTest(false);
    setAddQuotes(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setHomePage(false);
    setLatestNews(false);
    setRoadMap(false);
    setOurProducts(false);
    setMotivation(false);
    setSignButton(false);
  };
  const InnerMockClicked = (mockName) => {
    console.log("Name Of Mock : ", mockName);
    InnerMocks();
  };

  const onSuccessSigned = (dataFromBackend, email) => {
    if (
      dataFromBackend === "User Already Exists" ||
      dataFromBackend === "User SignedUp"
    ) {
      login();
    }
  };

  const errorWhileSignedUp = (errors, oldInputs) => {
    setSignUpErrors(errors);
  };
  const onSuccessLogin = (dataFromBackend, email) => {
    setisLoggedIn(dataFromBackend);
    localStorage.setItem("isLoggedIn", "true");
    setUserEmail(email);
    localStorage.setItem("email", email);
    if (dataFromBackend === true) {
      homePageHandler();
    }
  };

  const errorWhileLogin = (errors, oldInputs) => {
    setLoginErrors(errors);
    console.log("Errors : ", errors);
    console.log("OldInputs : ", oldInputs);
  };

  const onLogout = (isLoggedInMessage) => {
    let logout = isLoggedInMessage.message;
    localStorage.removeItem("isLoggedIn");
    setisLoggedIn(logout);
  };
  const logoutClicked = () => {
    const email = localStorage.getItem("email");
    console.log("User Emails : ", email);
    logoutFromServer(onLogout, email);
  };

  const signUpClicked = (
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    gender,
  ) => {
    signUpToServer(
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      gender,
      onSuccessSigned,
      errorWhileSignedUp,
    );
  };
  const LoginClicked = (email, password) => {
    loginToServer(email, password, onSuccessLogin, errorWhileLogin);
    console.log("Value At Login : ", email, password);
  };

  let login = () => {
    setLoginButton(true);
    setAddMockDetails(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddMockTest(false);
    setAddRoadMaps(false);
    setEnterQuestion(false);
    setAddLecture(false);
    setAddPaidQuestion(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    console.log("Login Button in App Clicked", loginButton);
    setHomePage(false);
    setLatestNews(false);
    setRoadMap(false);
    setOurProducts(false);
    setMotivation(false);
    setSignButton(false);
  };
  let lectureHandler = () => {
    setAddLecture(true);
    setLoginButton(false);
    setAddPaidQuestion(false);
    setAddMockDetails(false);
    setAddRoadMaps(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddMockTest(false);
    setEnterQuestion(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    console.log("Login Button in App Clicked", loginButton);
    setHomePage(false);
    setLatestNews(false);
    setRoadMap(false);
    setOurProducts(false);
    setMotivation(false);
    setSignButton(false);
  };
  let mockDetailsHandler = () => {
    setAddMockDetails(true);
    setLoginButton(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setAddMockTest(false);
    setEnterQuestion(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    console.log("Login Button in App Clicked", loginButton);
    setHomePage(false);
    setLatestNews(false);
    setRoadMap(false);
    setOurProducts(false);
    setMotivation(false);
    setSignButton(false);
  };
  let signup = () => {
    setSignButton(true);
    setEnterQuestion(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddRoadMaps(false);
    setFreeTestHost(false);
    setAddLecture(false);
    setAddMockDetails(false);
    setCustomerCare(false);
    setAddMockTest(false);
    setAddQuotes(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    console.log("Sign Button in App Clicked", signUpButton);
    setLoginButton(false);
    setHomePage(false);
    setLatestNews(false);
    setRoadMap(false);
    setOurProducts(false);
    setMotivation(false);
  };
  let addQuestionHandler = () => {
    setEnterQuestion(true);
    setHomePage(false);
    setAddRoadMaps(false);
    setAddLecture(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddMockDetails(false);
    setAddQuotes(false);
    setFreeTestHost(false);
    setAddPaidQuestion(false);
    setAddMockTest(false);
    setCustomerCare(false);
    setAddMockTest(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setLatestNews(false);
    setRoadMap(false);
    setSignButton(false);
    setLoginButton(false);
    setOurProducts(false);
    setMotivation(false);
  };
  let addPaidQuestionHandler = () => {
    setAddPaidQuestion(true);
    setEnterQuestion(false);
    setHomePage(false);
    setAddRoadMaps(false);
    setAddLecture(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddMockDetails(false);
    setAddQuotes(false);
    setFreeTestHost(false);
    setAddMockTest(false);
    setCustomerCare(false);
    setAddMockTest(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setLatestNews(false);
    setRoadMap(false);
    setSignButton(false);
    setLoginButton(false);
    setOurProducts(false);
    setMotivation(false);
  };
  let homePageHandler = () => {
    setHomePage(true);
    setAddQuotes(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddLecture(false);
    setAddPaidQuestion(false);
    setAddRoadMaps(false);
    setAddMockDetails(false);
    setFreeTestHost(false);
    setEnterQuestion(false);
    setAddMockTest(false);
    setCustomerCare(false);
    setAddMockTest(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setLatestNews(false);
    setRoadMap(false);
    setSignButton(false);
    setLoginButton(false);
    setOurProducts(false);
    setMotivation(false);
    console.log("Home Page Button in App Clicked");
  };
  let latestNewsHandler = () => {
    setLatestNews(true);
    setCustomerCare(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddRoadMaps(false);
    setAddLecture(false);
    setAddMockTest(false);
    setAddMockDetails(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setEnterQuestion(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setHomePage(false);
    setMotivation(false);
    console.log("Latest News Button in App Clicked");
  };
  let roadMapHandler = () => {
    setRoadMap(true);
    setAddMockTest(false);
    setAddPaidQuestion(false);
    setAddRoadMaps(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddMockDetails(false);
    setAddLecture(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setEnterQuestion(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setMotivation(false);
    setOurProducts(false);
    setSignButton(false);
    setLoginButton(false);
    setHomePage(false);
    setLatestNews(false);
    console.log("Road Map Button in App Clicked");
  };
  let addMockHandler = () => {
    setAddMockTest(true);
    setRoadMap(false);
    setAddPaidQuestion(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddMockDetails(false);
    setEnterQuestion(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setMotivation(false);
    setOurProducts(false);
    setSignButton(false);
    setLoginButton(false);
    setHomePage(false);
    setLatestNews(false);
    console.log("Road Map Button in App Clicked");
  };
  let ourProductsHandler = () => {
    setOurProducts(true);
    setAddPaidQuestion(false);
    setAddMockDetails(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddQuotes(false);
    setAddRoadMaps(false);
    setAddLecture(false);
    setFreeTestHost(false);
    setCustomerCare(false);
    setEnterQuestion(false);
    setFreeTest(false);
    setAddMockTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setRoadMap(false);
    setHomePage(false);
    setMotivation(false);
    setSignButton(false);
    setLoginButton(false);
    setLatestNews(false);
    console.log("Our Products Button in App Clicked");
  };
  let motivationHandler = () => {
    setMotivation(true);
    setAddPaidQuestion(false);
    setAddMockTest(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setAddMockDetails(false);
    setEnterQuestion(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setLiveClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
    console.log("Motivational Quotes Button in App Clicked");
  };
  let liveClassHandler = () => {
    setLiveClass(true);
    setFreeTestHost(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setAddQuotes(false);
    setAddMockDetails(false);
    setAddMockTest(false);
    setEnterQuestion(false);
    setMotivation(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let RecordedClassHandler = () => {
    setRecordedClass(true);
    setAddMockTest(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddRoadMaps(false);
    setAddMockDetails(false);
    setAddLecture(false);
    setFreeTestHost(false);
    setAddQuotes(false);
    setLiveClass(false);
    setEnterQuestion(false);
    setMotivation(false);
    setCustomerCare(false);
    setFreeTest(false);
    setPaidTest(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let customerCareHandler = () => {
    setCustomerCare(true);
    setAddQuotes(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddRoadMaps(false);
    setAddLecture(false);
    setAddMockDetails(false);
    setFreeTestHost(false);
    setAddMockTest(false);
    setEnterQuestion(false);
    setLiveClass(false);
    setMotivation(false);
    setFreeTest(false);
    setPaidTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let paidTestHandler = () => {
    setPaidTest(true);
    setAddPaidTest(false);
    setAddPaidQuestion(false);
    setAddPaidTestDetails(false);
    setAddMockDetails(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setAddQuotes(false);
    setLiveClass(false);
    setFreeTestHost(false);
    setEnterQuestion(false);
    setMotivation(false);
    setCustomerCare(false);
    setFreeTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let addPaidTestHandler = () => {
    setAddPaidTest(true);
    setPaidTest(false);
    setAddPaidQuestion(false);
    setAddPaidTestDetails(false);
    setAddMockDetails(false);
     setAddMockTest(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setAddQuotes(false);
    setLiveClass(false);
    setFreeTestHost(false);
    setEnterQuestion(false);
    setMotivation(false);
    setCustomerCare(false);
    setFreeTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let addPaidTestDetailsHandler = () => {
    setAddPaidTestDetails(true);
    setAddPaidTest(false);
    setAddPaidTest(false);
    setAddPaidQuestion(false);
    setPaidTest(false);
     setAddMockTest(false);
    setAddMockDetails(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setAddQuotes(false);
    setLiveClass(false);
    setFreeTestHost(false);
    setEnterQuestion(false);
    setMotivation(false);
    setCustomerCare(false);
    setFreeTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let freeTestHandler = () => {
    setFreeTest(true);
    setAddMockDetails(false);
    setAddLecture(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddRoadMaps(false);
    setAddQuotes(false);
    setEnterQuestion(false);
    setAddMockTest(false);
    setLiveClass(false);
    setMotivation(false);
    setCustomerCare(false);
    setPaidTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
    setFreeTestHost(false);
  };
  let freeTestHostHandler = () => {
    setFreeTestHost(true);
    setAddLecture(false);
    setFreeTest(false);
    setAddPaidQuestion(false);
    setAddPaidTest(false);
    setAddPaidTestDetails(false);
    setAddMockDetails(false);
    setAddRoadMaps(false);
    setAddQuotes(false);
    setEnterQuestion(false);
    setAddMockTest(false);
    setLiveClass(false);
    setMotivation(false);
    setCustomerCare(false);
    setPaidTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let addQuotesHandler = () => {
    setAddQuotes(true);
    setFreeTest(false);
    setAddPaidTest(false);
    setAddPaidQuestion(false);
    setAddPaidTestDetails(false);
    setAddLecture(false);
    setAddRoadMaps(false);
    setFreeTestHost(false);
    setAddMockDetails(false);
    setLiveClass(false);
    setEnterQuestion(false);
    setMotivation(false);
    setCustomerCare(false);
    setPaidTest(false);
    setAddMockTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };
  let addRoadMapHandler = () => {
    setAddRoadMaps(true);
    setAddPaidTest(false);
    setAddPaidQuestion(false);
    setAddPaidTestDetails(false);
    setAddQuotes(false);
    setFreeTest(false);
    setAddLecture(false);
    setFreeTestHost(false);
    setAddMockDetails(false);
    setLiveClass(false);
    setEnterQuestion(false);
    setMotivation(false);
    setCustomerCare(false);
    setPaidTest(false);
    setAddMockTest(false);
    setRecordedClass(false);
    setOurProducts(false);
    setRoadMap(false);
    setLoginButton(false);
    setLatestNews(false);
    setHomePage(false);
    setLatestNews(false);
  };

  let addMock = (id, name, noOfMock, editing) => {
    if (editing === true) {
      setAddEditMock({
        type: "editing",
        name: name,
        noOfMock: noOfMock,
        id: id,
      });
    } else if (editing === false) {
      setAddEditMock("addMock");
    }
    addMockHandler();
    console.log(id, name, noOfMock, editing);
  };
  let addPaidMock = (id, name, noOfMock, editing) => {
    console.log("addPaidMock Clicked",editing)
    if (editing === true) {
      setAddPaidEditMock({
        type: "editing",
        name: name,
        noOfMock: noOfMock,
        id: id,
      });
    } else if (editing === false) {
      setAddPaidEditMock("addPaidMock");
    }
    addPaidTestHandler();
    console.log(id, name, noOfMock, editing);
  };
  return (
    <>
      <PrepSetuContextProvider>
        <div className="sideBarNavFooter">
          {isLoggedIn === true && (
            <SideBar
              homePage={homePage}
              homePageHandler={homePageHandler}
              liveClass={liveClass}
              liveClassHandler={liveClassHandler}
              freeTest={freeTest}
              freeTestHandler={freeTestHandler}
              paidTest={paidTest}
              paidTestHandler={paidTestHandler}
              recordedClass={recordedClass}
              RecordedClassHandler={RecordedClassHandler}
              customerCare={customerCare}
              customerCareHandler={customerCareHandler}
              freeTestHost={freeTestHost}
              freeTestHostHandler={freeTestHostHandler}
            />
          )}
          <div className="navFooter">
            <NavBar
              login={login}
              signup={signup}
              logoutClicked={logoutClicked}
              isLoggedIn={isLoggedIn}
              loginButton={loginButton}
              signUpButton={signUpButton}
              latestNews={latestNews}
              latestNewsHandler={latestNewsHandler}
              homePageHandler={homePageHandler}
              homePage={homePage}
              roadMapHandler={roadMapHandler}
              roadMap={roadMap}
              ourProductsHandler={ourProductsHandler}
              ourProducts={ourProducts}
              motivationHandler={motivationHandler}
              motivation={motivation}
              addQuotes={addQuotes}
              addQuotesHandler={addQuotesHandler}
              addMockTest={addMockTest}
              addMock={addMock}
              addQuestionHandler={addQuestionHandler}
              enterQuestion={enterQuestion}
              mockDetailsHandler={mockDetailsHandler}
              addMockDetails={addMockDetails}
              addLecture={addLecture}
              lectureHandler={lectureHandler}
              addRoadMaps={addRoadMaps}
              addRoadMapHandler={addRoadMapHandler}
              addPaidTest={addPaidTest}
              addPaidMock ={addPaidMock}
              addPaidTestDetails={addPaidTestDetails}
              addPaidTestDetailsHandler={addPaidTestDetailsHandler}
              addPaidQuestion={addPaidQuestion}
              addPaidQuestionHandler={addPaidQuestionHandler}
            />
            <div className="BoxesFooter">
              {/* <Sliding/> */}

              {/**isLoggedIn Started */}

              {isLoggedIn === true && (
                <div className="studyItems">
                  {ourProducts === true && <OurProducts />}
                  {addQuotes === true && <AddQuotes />}
                  {enterQuestion === true && <AddQuestions />}
                  {roadMap === true && <RoadMaps />}
                  {motivation === true && <Motivations quotes={quotes} />}
                  {liveClass === true && <LiveClass />}
                  {paidTest === true && <PaidTests />}
                  {freeTest === true && (
                    <FreeTests
                      InnerMockClicked={InnerMockClicked}
                      addMock={addMock}
                    />
                  )}
                  {addRoadMaps === true && <AddRoadMaps />}
                  {addMockDetails === true && <AddMockDetails />}
                  {freeTestHost === true && <FreeTestsHost />}
                  {innerMock === true && <InnerMock />}
                  {recordedClass === true && <ClassRecord />}
                  {addLecture === true && <AddLecture />}
                  {customerCare === true && <Customer />}
                  {addPaidTest===true && <AddMockPaid addPaidEditMock={addPaidEditMock}/>}
                  {addPaidTestDetails===true && <AddMockDetailsPaid/>}
                  {addPaidQuestion===true && <AddPaidQuestions/>}
                  {homePage === true && (
                    <StudyItems
                      latestNewsHandler={latestNewsHandler}
                      motivationHandler={motivationHandler}
                      roadMapHandler={roadMapHandler}
                    />
                  )}
                  {addMockTest === true && (
                    <AddMocks addEditMock={addEditMock} />
                  )}
                  {latestNews === true && <LatestNews />}
                </div>
              )}
              <div>
                {/**isLoggedIn ended */}

                {loginButton === true && (
                  <SignIn
                    LoginClicked={LoginClicked}
                    loginErrors={loginErrors}
                  />
                )}
                {signUpButton === true && (
                  <SignUp
                    signUpClicked={signUpClicked}
                    signUpErrors={signUpErrors}
                  />
                )}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </PrepSetuContextProvider>
    </>
  );
}

export default App;
