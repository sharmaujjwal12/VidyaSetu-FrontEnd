import newsLogo from "./images/Newss.png";
import motivationLogo from "./images/Motivation.png";
import RecordedClassLogo from "./images/RecordedClass.png";
import liveClassLogo from "./images/LiveClasses.png";
import mockTestLogo from "./images/MockTest.png";
import RoadmapLogo from "./images/RoadMaps.png";
import { useState } from "react";

function FrontPage({ title,latestNewsHandler,motivationHandler,setLiveClassClicked,setSubmitClick,setMainPage,roadMapHandler,setMockClicked,setRecordedClass}) {
  return (
    <>
    <div className="p-6min-h-screen">
       
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Overview About <span className="text-blue-600">{title}</span>
      </h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">

        {/* News */}
        <div className="bg-white w-64 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden mr-20 ml-10">
          <img src={newsLogo} alt="News" className="h-40 w-full object-cover" />
          <div className="p-4 text-center">
            <h1 className="text-lg font-semibold text-gray-700 mb-3">
              Latest News Shown Here
            </h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-5" onClick={latestNewsHandler}>
              Click to View
            </button>
          </div>
        </div>

        {/* Quotes */}
        <div className="bg-white w-64 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden mr-20 ml-10">
          <img src={motivationLogo} alt="Quotes" className="h-40 w-full object-cover" />
          <div className="p-4 text-center">
            <h1 className="text-lg font-semibold text-gray-700 mb-3">
              Motivational Quotes Shown Here
            </h1>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition" onClick={motivationHandler}>
              Click to View
            </button>
          </div>
        </div>

        {/* Recorded Class */}
        <div className="bg-white w-64 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden mr-20 ml-10">
          <img src={RecordedClassLogo} alt="Recorded Class" className="h-40 w-full object-cover" />
          <div className="p-4 text-center">
            <h1 className="text-lg font-semibold text-gray-700 mb-3">
              Recorded Classes Shown Here
            </h1>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={()=>{
              setMainPage(false)
              setRecordedClass(true)
              setSubmitClick(false);
              }}>
              Click to View
            </button>
          </div>
        </div>

        {/* Live Class
        <div className="bg-white w-64 rounded-2xl shadow-md hover:shadow-xl transition duration-300 mr-20 ml-10 hover:-translate-y-2 overflow-hidden">
          <img src={liveClassLogo} alt="Live Class" className="h-40 w-full object-cover" />
          <div className="p-4 text-center">
            <h1 className="text-lg font-semibold text-gray-700 mb-3">
              Live Classes Shown Here
            </h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition" onClick={()=>{
              setSubmitClick(false)
              setLiveClassClicked(true)
              setMainPage(false)}}>
              Click to View
            </button>
          </div>
        </div> */}

        {/* MockTests */}
        <div className="bg-white w-64 rounded-2xl shadow-md hover:shadow-xl transition duration-300 mr-20 ml-10 hover:-translate-y-2 overflow-hidden">
          <img src={mockTestLogo} alt="Recorded Class" className="h-40 w-full object-cover" />
          <div className="p-4 text-center">
            <h1 className="text-lg font-semibold text-gray-700 mb-3">
              MockTests Shown Here
            </h1>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={()=>{
              setMockClicked(true)
              setSubmitClick(false)
              setMainPage(false)
              }}>
              Click to View
            </button>
          </div>
        </div>

        {/* RoadMaps */}
        <div className="bg-white w-64 rounded-2xl shadow-md hover:shadow-xl transition duration-300 mr-20 ml-10 hover:-translate-y-2 overflow-hidden">
          <img src={RoadmapLogo} alt="Mock Tests" className="h-40 w-full object-cover" />
          <div className="p-4 text-center">
            <h1 className="text-lg font-semibold text-gray-700 mb-3">
              RoadMaps Shown Here
            </h1>
            <button className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition" onClick={()=>roadMapHandler()}>
              Click to View
            </button>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default FrontPage;