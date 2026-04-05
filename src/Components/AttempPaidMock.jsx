import { useEffect, useState } from "react";
import { getPaidMockListFromServer } from "../services/Backend";

function AttemptPaidMock({ examName }) {
  let [questions, setQuestions] = useState([]);
  useEffect(() => {
    console.log("Paid Attempt Loaded");
    if (!examName) return; // wait until examName is set
    const questionsLists = (data) => {
      console.log("Attempt me hu");
      if (!data || data.length === 0) {
        console.error("No questions received from backend!");
        setQuestions([]);
        return;
      }
      setQuestions(data);
    };
    getPaidMockListFromServer(examName, questionsLists);
  }, [examName]);
  let [selectedOption, setSelectedOption] = useState("");
  let [nextQuestion, setNextQuestion] = useState(0);
  let [score, setScore] = useState(0);

  const ResultScreen = () => (
    <div className="flex justify-center items-center h-screen px-4">
      {console.log("Attempt me ", examName)}
      <div className="w-full max-w-md bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl rounded-3xl p-6 md:p-8 text-center transform transition-all duration-500 hover:scale-105">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Test Result
        </h1>

        {/* Score */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-5 shadow-md">
          <p className="text-gray-600 text-sm mb-1">Your Score</p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
            {score} / {questions.length}
          </h2>
        </div>

        {/* Percentile */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4 shadow-md">
          <p className="text-gray-600 text-sm mb-1">Percentile</p>
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            {((score / questions.length) * 100).toFixed(1)}%
          </h2>
        </div>
      </div>
    </div>
  );

  const QuestionScreen = () => (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-3xl p-6 md:p-8 border border-gray-200 transform transition-all duration-500 hover:scale-105">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6 shadow-inner">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
            style={{
              width: `${((nextQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
        <p className="text-center text-gray-600 mb-4">
          Question {nextQuestion + 1} of {questions.length}
        </p>

        {/* Question */}
        <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
          {questions[nextQuestion]?.question}
        </h1>

        {/* Options */}
        <ul className="space-y-3 md:space-y-4">
          {questions[nextQuestion].options.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 md:p-4 border rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:border-blue-400 transition-all duration-200 shadow-sm"
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
                className="text-gray-700 cursor-pointer flex-1 text-sm md:text-base"
              >
                {item}
              </label>
            </li>
          ))}
        </ul>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 active:scale-95 transition-all duration-200 shadow-lg"
            onClick={() => {
              console.log(
                "Selected Options : ",
                selectedOption,
                questions[nextQuestion]?.correctAnswer,
              );
              if (questions[nextQuestion]?.correctAnswer === selectedOption) {
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

  return questions.length <= nextQuestion ? (
    <ResultScreen />
  ) : (
    <QuestionScreen />
  );
}

export default AttemptPaidMock;
