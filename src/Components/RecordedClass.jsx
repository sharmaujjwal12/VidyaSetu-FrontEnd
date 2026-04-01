import { useState } from "react";
import logo from "./images/VidyaSetuBanner.jpg";

function RecordedClass({ item, setExamName,setChapters }) {
  return (
    <div className="flex flex-col justify-center p-6">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-72 overflow-hidden group">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={logo}
            alt="Course"
            className="h-44 w-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col gap-2 text-center">
          <h2 className="text-xl font-semibold text-gray-800">{item}</h2>

          <p className="text-gray-500 text-sm">
            Live Classes For Shine Preparation
          </p>

          {/* Button */}
          <button
            className="mt-3 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition"
            onClick={() => {
             setChapters(true);
              setExamName(item);
            }}
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordedClass;
