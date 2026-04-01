import { useRef ,useState} from "react";
import { addLectureDetailsToServer } from "../services/Backend";

function AddLectureDetails() {
  let [addSuccess,setAddSuccess] = useState('');
  let examName = useRef();
  let lectureType = useRef();
  const onSubmitClick=(action)=>{
    const addedSuccess=(data)=>{
      setAddSuccess(data);
    }
    action.preventDefault();
    addLectureDetailsToServer(examName.current.value,lectureType.current.value,addedSuccess)
    examName.current.value=""
    lectureType.current.value=""
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Lecture Details
      </h1>
       {addSuccess && (
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

        <span className="font-medium">{addSuccess.message}</span>
      </div>
    )}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Exam Name"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ref={examName}
        />
        <input
          type="text"
          placeholder="Lecture Type First Letter Capital"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ref={lectureType}
        />
        <p className="text-sm text-gray-500">
          Eg: Preparation, Maths,GS/GK,etc
        </p>
        <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold" onClick={(action)=>onSubmitClick(action)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddLectureDetails;