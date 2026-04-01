import { useContext, useState } from "react";
import logo from "./images/VidyaSetuBanner.jpg";
import { PrepSetuContext } from "../store/PrepSetuContext";
import Loader from "./Loader";

function FreeTestHost({ item, InnerMockClicked, addMock }) {
  let { deleteMock } = useContext(PrepSetuContext);
  // let [deleteMockMessage,setDeleteMockMessage] = useState('')
  // let [loader, setLoader] = useState(false);
  return (
    <div className="m-5">
      <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={logo}
            alt="VidyaSetu"
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h1 className="mb-4 text-lg font-semibold text-gray-800 line-clamp-2">
            {item.name}
          </h1>
          <div className="flex flex-col">
            <button
              className="w-62 rounded-xl bg-blue-500 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-blue-600 hover:shadow-md active:scale-95"
              onClick={() => InnerMockClicked(item.name)}
            >
              View Details
            </button>
            <div>
              <button
                className="mt-2 w-30 rounded-xl bg-red-400 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-red-600 hover:shadow-md active:scale-95"
                onClick={() => {
                  setLoader(true);
                  deleteMock(item._id,setDeleteMockMessage);
                }}
              >
                Delete
              </button>
              <button
                className="ml-2 mt-2 w-30 rounded-xl bg-yellow-500 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-yellow-600 hover:shadow-md active:scale-95"
                onClick={() =>
                  addMock(item._id, item.name, item.noOfMock, true)
                }
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeTestHost;
