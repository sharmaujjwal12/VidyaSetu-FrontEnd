import { useEffect, useState } from "react";
import logo from "./images/VidyaSetuBanner.jpg";
import { getRoadMapFromServer } from "../services/Backend";

function RoadMap({ item }) {
  const [loading, setLoading] = useState(false);
 const onViewDetailClicked = (action, roadMapType) => {
  action.preventDefault();

  getRoadMapFromServer(roadMapType).then((data) => {
    if (!data || data.length === 0 || !data[0]?.roadMapPdf) {
      alert("No roadmap found!");
      return;
    }

    let fileUrl = data[0].roadMapPdf;

    // If your backend returns relative path, convert to absolute
    if (!fileUrl.startsWith("http")) {
      fileUrl = `${window.location.origin}/${fileUrl.replace(/^\/+/, "")}`;
    }

    // Direct download / open
    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank"; // open in new tab
    link.download = fileUrl.split("/").pop().split("?")[0];
    document.body.appendChild(link);
    link.click();
    link.remove();
  }).catch((err) => {
    console.error("Error opening PDF:", err);
    alert("Something went wrong while opening the PDF.");
  });
};
  return (
    <div className="p-6 bg-gray-100">
      {/* Roadmaps Container */}
      <div className="">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden">
          {/* Image */}
          <img src={logo} className="w-full h-40 object-cover" alt="RoadMaps" />

          {/* Content */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {item} RoadMap
            </h2>

            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={(action) => onViewDetailClicked(action, item)}
            >
              View Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
