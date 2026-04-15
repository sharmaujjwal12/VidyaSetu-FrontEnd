import { useEffect, useState } from "react";
import { getVideosFromServer } from "../services/Backend";
import DynamicLoader from "./DynamicLoader";

function VideosPage({ examName,lectureType }) {
  let [video, setVideo] = useState([]);
  let [loader, setLoader] = useState(true);
  let [videoSeries, setVideoSeries] = useState(1);

  useEffect(() => {
    const videosMethod = (data) => {
      setVideo(data);
      setLoader(false);
    };
    getVideosFromServer(examName,lectureType, videosMethod);
  }, [examName]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {examName} Videos
      </h1>
      {loader===true && <DynamicLoader/>}
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {video.map(item => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-sm p-3"
          >
            {/* Video */}
            <video
              src={item.videoUrl}
              controls
              className="w-full rounded-lg"
            />

            {/* Title */}
            <p className="mt-2 text-sm text-gray-700">
              {`${item.examType} ${videoSeries}`}
            </p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {video.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No videos available
        </p>
      )}
      
    </div>
  );
}

export default VideosPage;
