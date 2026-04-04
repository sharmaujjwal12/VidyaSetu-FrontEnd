import { useEffect, useState } from "react";
import { getMockData } from "../services/Backend";
import FreeTest from "./FreeTest";
import MockLists from "./MockLists";
import DynamicLoader from "./DynamicLoader";

function FreeTests({}) {
  let [selectedMock, setSelectedMock] = useState(false)
  let [loader,setLoader] = useState(true);
  let [mockData, setMockData] = useState([]);
  useEffect(() => {
    const getMock = (data) => {
       setLoader(false)
      setMockData(data.mock);
    };
    getMockData(getMock);
  }, []);
  return (
    <div className="flex flex-wrap">
      {selectedMock===true || loader===true && <DynamicLoader/>}
      <h1
        className="w-full text-3xl font-bold text-gray-800 text-center mb-8 py-3 rounded-xl shadow-sm tracking-wide"
      >
        📊 Free Mock Tests
      </h1>
       <div>
    </div>
      {selectedMock ? (<MockLists mockName={selectedMock} setSelectedMock={setSelectedMock} setLoader={setLoader}/>) : (<div className="flex flex-wrap">{mockData.map((item) => (
        <FreeTest
          key={item._id}
          item={item} 
          setSelectedMock={setSelectedMock}
          setLoader={setLoader}
        />
      ))}</div>)}
    </div>
    )
}

export default FreeTests;
