import { useRef, useState } from "react";
import { postRoadmapToServer } from "../services/Backend";
import Loader from "./Loader";

function AddRoadMaps() {
  let [roadmap, setRoadmap] = useState(null);
  let [messagefromBackend, setMessagefrombackend] = useState("");
  let roadMapType = useRef();
  let [loader,setLoader] = useState(false);
  const postedSuccess = (data) => {
    setMessagefrombackend(data);
    setLoader(false);
  };
  const onSubmitClicked = (action) => {
    action.preventDefault();
    postRoadmapToServer(roadMapType.current.value, roadmap, postedSuccess);
     roadMapType.current.value = "";
     setRoadmap(null);
  };
  return (
    <div className="min-h-screen flex items-start justify-center px-4 pt-8 pb-8">
      {/* Card */}
      <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
          Upload Roadmap
        </h1>

        {/* Success Message */}
        {messagefromBackend.message ? (
          <div className="mb-5 flex items-center gap-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-sm animate-pulse">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span className="font-medium">{messagefromBackend.message}</span>
          </div>
        ) : (
          ""
        )}

        <p className="text-sm text-gray-500 text-center mb-6">
          Share roadmaps that help students grow in their career 🚀
        </p>

        {/**Loader */}
        <div className="mb-5">{loader === true && <Loader />}</div>
        {/* Form */}
        <form
          method="POST"
          encType="multipart/form-data"
          onSubmit={onSubmitClicked}
          className="flex flex-col gap-4"
        >
          {/* Roadmap Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Roadmap Name
            </label>
            <input
              type="text"
              placeholder="Enter roadmap (e.g. CGL, UPSC, IT)"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              ref={roadMapType}
            />
            <p className="text-xs text-gray-400 mt-1">
              Example: CGL, UPSC, IT etc.
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Upload File
            </label>
            <input
              type="file"
              className="w-full mt-1 p-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition"
              name="roadMapPdf"
              onChange={(e) => setRoadmap(e.target.files[0])}
            />
          </div>

          {/* Button */}
          <button
            className="mt-3 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
            type="submit" onClick={()=>setLoader(true)}
          >
            + Add Roadmap
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRoadMaps;
