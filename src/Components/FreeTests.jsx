import { useEffect, useState } from "react";
import { getMockData } from "../services/Backend";
import FreeTest from "./FreeTest";
import MockLists from "./MockLists";
import Loader from "./Loader";
import DynamicLoader from "./DynamicLoader";

function FreeTests({}) {
  let [selectedMock, setSelectedMock] = useState(false);
  let [loader,setLoader] = useState(false);
  let [mockData, setMockData] = useState([]);
  useEffect(() => {
    const getMock = (data) => {
      setMockData(data.mock);
      setLoader(true)
    };
    getMockData(getMock);
  }, []);
  return (
    <div className="flex flex-wrap">
      <h1
        className="w-full text-3xl font-bold text-gray-800 text-center mb-8 py-3 rounded-xl shadow-sm tracking-wide"
      >
        📊 Free Mock Tests
      </h1>
       <div>
      {loader===false && <DynamicLoader/>}
    </div>
      {selectedMock ? (<MockLists mockName={selectedMock} setSelectedMock={setSelectedMock}/>) : (<div className="flex flex-wrap">{mockData.map((item) => (
        <FreeTest
          key={item._id}
          item={item} 
          setSelectedMock={setSelectedMock}
        />
      ))}</div>)}
    </div>
    )
}

export default FreeTests;
