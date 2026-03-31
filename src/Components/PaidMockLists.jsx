import { useEffect, useState } from "react";
import { getPaidMockDetailsFromServer} from "../services/Backend";
import MockList from "./MockList";
function PaidMockLists({mockName,setSelectedMock}){
  let [mocks,setMocks] = useState([]);
  useEffect(()=>{
       const getMockDetail = (exam,duration,questions,marks)=>{
         setMocks(exam,duration,questions,marks)
      }
      getPaidMockDetailsFromServer(getMockDetail,mockName);
  },[])
  return <>
  {mocks.map((item,index) => <MockList key={index} item={item} setSelectedMock={setSelectedMock}/>)}
  </>
}

export default PaidMockLists;