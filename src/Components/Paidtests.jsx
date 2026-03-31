import PaidTest from "./Paidtest";
import { useEffect, useState } from "react";
import { getPaidMockData } from "../services/Backend";
import Loader from "./Loader";
import PaidMockLists from "./PaidMockLists";
import PaymentPage from "./Payment";

function PaidTests() {
  let [selectedMock, setSelectedMock] = useState(false);
  let [showPayment, setShowPayment] = useState(false);
  let [loader, setLoader] = useState(false);
  let [mockData, setMockData] = useState([]);
  useEffect(() => {
    const getMock = (data) => {
      setMockData(data.mock);
      setLoader(true);
    };
    getPaidMockData(getMock);
  }, []);
  return (
    <div className="flex flex-wrap">
      <h1 className="w-full text-3xl font-bold text-gray-800 text-center mb-8 py-3 rounded-xl shadow-sm tracking-wide">
        📊 Paid Mock Tests
      </h1>
      <div className="flex flex-col justify-center items-center">
        {loader === false && <Loader />}
      </div>
      {showPayment ? (
        <PaymentPage
          selectedMock={selectedMock}
          setShowPayment={setShowPayment}
        />
      ) : selectedMock ? (
        <PaidMockLists
          mockName={selectedMock}
          setSelectedMock={setSelectedMock}
        />
      ) : (
        <div className="flex flex-wrap">
          {mockData.map((item) => (
            <PaidTest
              key={item._id}
              item={item}
              setSelectedMock={setSelectedMock}
              setShowPayment={setShowPayment}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default PaidTests;
