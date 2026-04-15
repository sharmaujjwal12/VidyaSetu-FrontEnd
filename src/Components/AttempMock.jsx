import { useEffect, useState } from "react";
import { getMockListFromServer } from "../services/Backend";

function AttemptMock({ examName, setLoader }) {
  let [questions, setQuestions] = useState([]);
  useEffect(() => {
    console.log("Free Attempt Loaded");
    const mockQuestions = (data) => {
      console.log("Data1 : ", data);
      console.log("Data2 : ", data[0]);
      console.log("Data2 : ", data[0].question);
      setQuestions(data);
      setLoader(false);
    };
    getMockListFromServer(examName, mockQuestions);
  }, [examName, setLoader]);

  let [selectedOption, setSelectedOption] = useState("");
  let [nextQuestion, setNextQuestion] = useState(0);
  let [score, setScore] = useState(0);

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] px-4 bg-gradient-to-br from-slate-100 via-white to-slate-200">
        <div className="w-full max-w-md bg-white/90 border border-gray-200 shadow-2xl rounded-3xl p-8 text-center backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Loading your mock test
          </h2>
          <p className="text-sm text-slate-500">
            Please wait while we fetch the exam questions.
          </p>
        </div>
      </div>
    );
  }

  const progress = questions.length
    ? ((nextQuestion + 1) / questions.length) * 100
    : 0;

  return questions.length <= nextQuestion ? (
    <div className="flex justify-center items-center min-h-[60vh] px-4 py-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="w-full max-w-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-gradient-to-r from-blue-200 to-emerald-200 shadow-2xl rounded-3xl p-6 sm:p-10 md:p-12 text-center backdrop-blur-sm">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2 tracking-tight">
            Test Result
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <p className="text-gray-600 text-xs sm:text-sm mb-3 uppercase font-semibold tracking-widest">
              📊 Your Score
            </p>
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {score}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 font-medium">
              out of {questions.length}
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <p className="text-gray-600 text-xs sm:text-sm mb-3 uppercase font-semibold tracking-widest">
              🎯 Percentile
            </p>
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              {questions.length
                ? Math.round((score / questions.length) * 100)
                : 0}
              %
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 font-medium">
              Success Rate
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-3xl p-4 sm:p-6">
            <p className="text-gray-700 font-semibold text-sm sm:text-base">
              {score >= questions.length * 0.8
                ? "🌟 Excellent performance! You've mastered this topic!"
                : score >= questions.length * 0.6
                  ? "👍 Good job! Keep practicing to improve further."
                  : score >= questions.length * 0.4
                    ? "📚 Nice effort! Review the concepts and try again."
                    : "💪 Keep learning! Practice makes perfect."}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-[60vh] px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border border-gray-200 transition-all duration-300">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">
              Question
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {questions[nextQuestion].question}
            </h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">
              {nextQuestion + 1} of {questions.length}
            </p>
          </div>
        </div>

        <div className="h-3 rounded-full bg-slate-200 overflow-hidden mb-6">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul className="space-y-4">
          {questions[nextQuestion].options.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedOption(item)}
              className={`flex items-center gap-3 p-4 border rounded-3xl cursor-pointer transition-all duration-200 ${selectedOption === item ? "border-blue-400 bg-blue-50 shadow-sm" : "border-slate-200 bg-white hover:bg-slate-50"}`}
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={item}
                onChange={(e) => setSelectedOption(e.target.value)}
                checked={selectedOption === item}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />

              <label
                htmlFor={`option-${index}`}
                className="text-slate-700 cursor-pointer flex-1 text-sm sm:text-base"
              >
                {item}
              </label>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-500">
            Select an answer and click submit to continue the mock exam.
          </div>
          <button
            disabled={!selectedOption}
            className={`px-6 py-3 rounded-3xl font-semibold transition-all duration-200 ${selectedOption ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg hover:from-emerald-600 hover:to-blue-700" : "bg-slate-300 text-slate-600 cursor-not-allowed"}`}
            onClick={() => {
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
