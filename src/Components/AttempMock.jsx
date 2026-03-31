import { useEffect, useState } from "react";
import { getMockListFromServer } from "../services/Backend";

function AttemptMock({ examName }) {
  let [questions, setQuestions] = useState([]);
  useEffect(() => {
    const mockQuestions = (data) => {
      console.log("Data1 : ",data);
      console.log("Data2 : ",data[0]);
      console.log("Data2 : ",data[0].question);
      setQuestions(data);
    };
    getMockListFromServer(examName, mockQuestions);
  }, []);
  let [selectedOption, setSelectedOption] = useState("");
  let [nextQuestion, setNextQuestion] = useState(0);
  let [score, setScore] = useState(0);
  return questions.length <= nextQuestion ? (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-[420px] bg-white border border-gray-200 shadow-xl rounded-2xl p-8 text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Test Result</h1>

        {/* Score */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
          <p className="text-gray-600 text-sm mb-1">Your Score</p>

          <h2 className="text-3xl font-bold text-blue-600">
            {score} / {questions.length}
          </h2>
        </div>

        {/* Percentile */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-gray-600 text-sm mb-1">Percentile</p>

          <h2 className="text-3xl font-bold text-green-600">
            {(score / questions.length) * 100}%
          </h2>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-[600px] bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Question */}
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          {questions[nextQuestion].question}
        </h1>

        {/* Options */}
        <ul className="space-y-4">
          {questions[nextQuestion].options.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition"
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={item}
                onChange={(e) => setSelectedOption(e.target.value)}
                checked={selectedOption === item}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
              />

              <label
                htmlFor={`option-${index}`}
                className="text-gray-700 cursor-pointer flex-1"
              >
                {item}
              </label>
            </li>
          ))}
        </ul>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 active:scale-95 transition"
            onClick={() => {
              console.log("Selected Options : ",selectedOption,questions[nextQuestion].correctAnswer )
              if (questions[nextQuestion].correctAnswer === selectedOption) {
                setScore((prev) => prev + 1);
              }
              setNextQuestion((prev) => prev + 1);
              setSelectedOption("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttemptMock;
