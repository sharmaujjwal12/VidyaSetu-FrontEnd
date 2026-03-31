import { useContext, useRef } from "react";
import { PrepSetuContext } from "../store/PrepSetuContext";
import { useState } from "react";

function AddQuestions(){
   let {addQuestion} = useContext(PrepSetuContext);
   let {questionAdded} = useContext(PrepSetuContext);
   let [options,setOptions] = useState([]);
  let examName = useRef();
  let question = useRef();
  let optionOne = useRef();
  let optionTwo = useRef();
  let optionThree = useRef();
  let optionFour = useRef();
  let correctAnswer = useRef();
  const onAddButtonClicked = (action) =>{
     action.preventDefault();
     let options = [optionOne.current.value,optionTwo.current.value,optionThree.current.value,optionFour.current.value]
     setOptions(options)
     addQuestion(examName.current.value,question.current.value,options,correctAnswer.current.value)
    examName.current.value=""
     question.current.value=""
     optionOne.current.value=""
     optionTwo.current.value=""
     optionThree.current.value=""
     correctAnswer.current.value=""
     optionFour.current.value=""
  }

  return (
   <div className="min-h-screen flex items-start justify-center px-4 pt-8 pb-8">
       
  <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md md:max-w-lg lg:max-w-2xl flex flex-col gap-4">

    <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-4">
      Add New Question
    </h1>

    {/* Success Message */}
    {questionAdded.message ? (
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

        <span className="font-medium">{questionAdded.message}</span>
      </div>
    ) : ""}

    <input
      type="text"
      placeholder="Enter Type Of Question"
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      ref={examName}
    />

    <input
      type="text"
      placeholder="Enter Question Here"
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      ref={question}
    />

    {/* Options */}
    <div className="flex flex-col gap-3">

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter Option 1"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ref={optionOne}
        />

        <input
          type="text"
          placeholder="Enter Option 2"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ref={optionTwo}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter Option 3"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ref={optionThree}
        />

        <input
          type="text"
          placeholder="Enter Option 4"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ref={optionFour}
        />
      </div>

      <input
        type="text"
        placeholder="Enter Correct Answer"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        ref={correctAnswer}
      />

    </div>

    <button
      className="bg-indigo-500 text-white font-semibold p-3 rounded-lg hover:bg-indigo-600 transition duration-300"
      onClick={(action)=>onAddButtonClicked(action)}
    >
      Add Question
    </button>

  </div>

</div>
  )
}

export default AddQuestions;