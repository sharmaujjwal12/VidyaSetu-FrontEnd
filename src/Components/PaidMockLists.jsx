import { useEffect, useState } from "react";
import { getPaidMockDetailsFromServer} from "../services/Backend";
import MockList from "./MockList";
import PaidMockList from "./PaidMockList";
function PaidMockLists({mockName,setSelectedMock}){
  let [mocks,setMocks] = useState([]);
  useEffect(()=>{
       const getMockDetail = (exam,duration,questions,marks)=>{
        console.log("PaidMockLists me hu")
         setMocks(exam,duration,questions,marks)
      }
      getPaidMockDetailsFromServer(getMockDetail,mockName);
  },[])
  return <>
  {mocks.map((item,index) => <PaidMockList key={index} item={item} setSelectedMock={setSelectedMock}/>)}
  </>
}

export default PaidMockLists;