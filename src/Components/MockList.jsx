import { useState } from "react";
import AttemptMock from "./AttempMock";
import DynamicLoader from "./DynamicLoader";

function MockList({ item, setSelectedMock }) {
  let [nextComponent, setNextComponent] = useState(false);
  let [loader, setLoader] = useState(false);
  let [examName, setExamName] = useState("");

  return (
    <>
      {loader && <DynamicLoader />}

      {nextComponent ? (<div className="flex flex-col justify-center items-center">
        <AttemptMock examName={examName} setLoader={setLoader}/></div>
      ) : (
        <div className="flex flex-col item-center justify-center w-72 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          
          {/* Exam Title */}
          <h1 className="text-lg font-semibold text-gray-800 mb-1">
            {item.exam} <span className="text-gray-500">(March 2026)</span>
          </h1>

          <p className="text-sm text-gray-500 mb-4">
            Remaining Attempts - 1
          </p>

          {/* Stats */}
          <div className="flex justify-between text-center mb-5">
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                {item.duration}
              </h2>
              <p className="text-xs text-gray-500">Minutes</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-600">
                {item.marks}
              </h2>
              <p className="text-xs text-gray-500">Marks</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-purple-600">
                {item.questions}
              </h2>
              <p className="text-xs text-gray-500">Questions</p>
            </div>
          </div>

          {/* Button */}
          <button
            className="w-full rounded-lg bg-blue-500 py-2 text-white font-medium hover:bg-blue-600 mb-2"
            onClick={() => {
              setLoader(true);
              setExamName(item.exam);
              setNextComponent(true);
            }}
          >
            Give Mock
          </button>

          <button
            className="w-full rounded-lg bg-orange-500 py-2 text-white"
            onClick={() => setSelectedMock(false)}
          >
            Back Page
          </button>
        </div>
      )}
    </>
  );
}

export default MockList;