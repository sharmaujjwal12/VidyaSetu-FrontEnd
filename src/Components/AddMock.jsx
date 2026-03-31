import { useContext, useRef } from "react";
import { PrepSetuContext } from "../store/PrepSetuContext";

function AddMocks({ addEditMock }) {
  let { addMockClicked } = useContext(PrepSetuContext);
  let { mockAdded } = useContext(PrepSetuContext);
  let { editMock } = useContext(PrepSetuContext);
  let mockName = useRef();
  console.log("Add Hu Bhai", addEditMock);
  let noOfMock = useRef();
  let onButtonClicked = (action) => {
    action.preventDefault();
    console.log("Editing Varible : ", addEditMock.type);
    if (addEditMock.type === "editing") {
      editMock(addEditMock.id, noOfMock.current.value);
    } else {
      console.log("ButtonClicked");
      addMockClicked(mockName.current.value, noOfMock.current.value);
    }
    mockName.current.value = "";
    noOfMock.current.value = "";
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[420px]">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {addEditMock === "addMock" ? "Add Mock Test" : "Edit Mock Test"}
        </h1>
        {mockAdded && (
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

            <span className="font-medium">{mockAdded.message}</span>
          </div>
        )}
        <form
          action=""
          method="POST"
          className="flex flex-col gap-5"
          encType="multipart/form-data"
        >
          <input
            type="text"
            placeholder="Enter Exam Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            ref={mockName}
            defaultValue={addEditMock.name != null ? addEditMock.name : ""}
          />
          <input
            type="number"
            placeholder="Enter How Many Mocks You Insert"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            ref={noOfMock}
            defaultValue={
              addEditMock.noOfMock != null ? addEditMock.noOfMock : ""
            }
          />

          <button
            className="bg-indigo-500 text-white font-semibold p-3 rounded-lg hover:bg-indigo-600 transition"
            onClick={(action) => onButtonClicked(action)}
          >
            {addEditMock === "addMock" ? "Add Mock" : "Update Mock"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMocks;
