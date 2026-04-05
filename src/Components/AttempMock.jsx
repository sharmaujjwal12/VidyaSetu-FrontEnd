import { useEffect, useState } from "react";
import { getMockListFromServer } from "../services/Backend";

function AttemptMock({ examName, setLoader }) {
  let [questions, setQuestions] = useState([]);
  useEffect(() => {
    console.log("Free Attempt Loaded")
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
    <div className="flex justify-center items-center min-h-[60vh] px-4 py-8">
      <div className="w-full max-w-xl bg-white border border-gray-200 shadow-2xl rounded-3xl p-6 sm:p-8 text-center backdrop-blur-sm">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Test Result
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5 mb-5">
          <p className="text-gray-600 text-sm mb-2 uppercase tracking-[0.2em]">
            Your Score
          </p>
          <h2 className="text-4xl font-bold text-blue-600">
            {score} / {questions.length}
          </h2>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5">
          <p className="text-gray-600 text-sm mb-2 uppercase tracking-[0.2em]">
            Percentile
          </p>
          <h2 className="text-4xl font-bold text-emerald-600">
            {questions.length
              ? Math.round((score / questions.length) * 100)
              : 0}
            %
          </h2>
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
