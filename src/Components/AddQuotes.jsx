import { useContext, useRef, useState } from "react";
import styles from "./AddQuotes.module.css";
import { PrepSetuContext } from "../store/PrepSetuContext";
import Loader from "./Loader";

function AddQuotes() {
  let { addQuotes } = useContext(PrepSetuContext);
  let [loader, setLoader] = useState(true);
  let { quoteAdded } = useContext(PrepSetuContext);
  let quote = useRef();
  let writtenBy = useRef();
  const onSubmitClick = (action) => {
    action.preventDefault();
    addQuotes(quote.current.value, writtenBy.current.value,setLoader);
    quote.current.value = "";
    writtenBy.current.value = "";
  };
  return (
    <>
      <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
        {quoteAdded.message ? (
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

            <span className="font-medium">{quoteAdded.message}</span>
          </div>
        ) : (
          ""
        )}

        {/**Loader */}
        <div>
          {quoteAdded.message ? "" : loader===false && <Loader />}</div>

        {/* Quote Field */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">
            Enter Quote
          </label>

          <textarea
            rows="5"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Enter Quote"
            ref={quote}
          ></textarea>
        </div>

        {/* Author Field */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">Written By</label>

          <input
            type="text"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Name"
            ref={writtenBy}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={onSubmitClick}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddQuotes;
