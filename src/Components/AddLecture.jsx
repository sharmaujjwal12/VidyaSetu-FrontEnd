import { useRef, useState } from "react";
import { uploadVideoToServer } from "../services/Backend";

function AddLecture() {
  const [video, setVideo] = useState(null);
  const [videoUploaded, setVideoUploaded] = useState('');
  const examType = useRef();

  const uploadBackendMessage = (data) => {
    setVideoUploaded(data.message);
    console.log("Video Uploaded : ",data.message);
  };
  const onUploadClick = async (action) => {
    action.preventDefault();
    if(!video){
        alert("Please Select A video")
        return;
    }
    await uploadVideoToServer(video,examType.current.value, uploadBackendMessage);
    examType.current.value=""
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-100">
      <form action="" method="POST" encType="multipart/form-data">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h1 className="mb-5 text-2xl font-semibold text-gray-700 text-center">
            Upload Lectures Here
          </h1>
         {/**Error Or Success */}
           {videoUploaded && <div className="mb-5 flex items-center gap-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-sm animate-pulse">
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

            <span className="font-medium">videoUploaded</span>
          </div>
}

          <div className="flex flex-col gap-5">
            {/* Exam Type Input */}
            <input
              type="text"
              placeholder="Enter Exam Type (e.g. UPSC, SSC)"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
             ref={examType}/>

            {/* File Upload */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-5 cursor-pointer hover:border-blue-400 transition">
              <span className="text-gray-500 text-sm">
                {video ? `Selected : ${video.name}`:"Click to upload file"}
              </span>

              <input
                type="file"
                className="hidden border border-gray-400 rounded-lg p-2" onChange={(e)=>setVideo(e.target.files[0])}
              />
            </label>

            {/* Button */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition shadow-md"
              onClick={(action) => onUploadClick(action)}
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddLecture;
