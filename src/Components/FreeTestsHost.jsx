import { useEffect, useState } from "react";
import { getMockData } from "../services/Backend";
import FreeTestHost from "./FreeTestHost";
import Loader from "./Loader";

function FreeTestsHost({ InnerMockClicked, addMock }) {
  let [mockData, setMockData] = useState([]);
  let [loader, setLoader] = useState(false);
  useEffect(() => {
    const getMock = (data) => {
      setMockData(data.mock);
      setLoader(true);
    };
    getMockData(getMock);
  }, []);
  return (
    <div class="flex flex-wrap">
      <div>{loader === false && <Loader />}</div>
      {mockData.map((item) => (
        <FreeTestHost
          key={item._id}
          item={item}
          InnerMockClicked={InnerMockClicked}
          addMock={addMock}
        />
      ))}
    </div>
  );
}

export default FreeTestsHost;
