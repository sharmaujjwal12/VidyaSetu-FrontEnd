import { useContext, useRef } from "react";
import { PrepSetuContext } from "../store/PrepSetuContext";

function AddMockDetails() {
  let { mockDetails } = useContext(PrepSetuContext);
  let { mockDetailAdded } = useContext(PrepSetuContext);
  let exam = useRef();
  let duration = useRef();
  let questions = useRef();
  let marks = useRef();
  const onButtonClicked = (action) => {
    action.preventDefault();
    mockDetails(
      exam.current.value,
      duration.current.value,
      questions.current.value,
      marks.current.value,
    );
    //  exam.current.value=""
    //  duration.current.value=""
    //  questions.current.value=""
    //  marks.current.value=""
  };
  return (
    <div className="flex flex-col gap-4 max-w-md p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-gray-800 text-center border-b pb-2 mb-2">
        Add Free Mock Details
      </h1>
      {mockDetailAdded.message ? (
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

          <span className="font-medium">{mockDetailAdded.message}</span>
        </div>
      ) : (
        ""
      )}
      <input
        type="text"
        placeholder="Enter Exam"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={exam}
      />

      <input
        type="text"
        placeholder="Enter Mock Duration"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={duration}
      />

      <input
        type="text"
        placeholder="Enter No of Questions"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={questions}
      />

      <input
        type="text"
        placeholder="Enter Marks"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={marks}
      />

      <button
        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={(action) => onButtonClicked(action)}
      >
        Submit
      </button>
    </div>
  );
}

export default AddMockDetails;
