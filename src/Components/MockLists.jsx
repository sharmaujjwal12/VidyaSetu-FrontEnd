import { useEffect, useState } from "react";
import { getMockDetailsFromServer, getMockListFromServer } from "../services/Backend";
import MockList from "./MockList";
function MockLists({mockName,setSelectedMock}){
  let [mocks,setMocks] = useState([]);
  useEffect(()=>{
       const getMockDetail = (exam,duration,questions,marks)=>{
         setMocks(exam,duration,questions,marks)
      }
      getMockDetailsFromServer(getMockDetail,mockName);
  },[])
  return <>
  {mocks.map((item,index) => <MockList key={index} item={item} setSelectedMock={setSelectedMock}/>)}
  </>
}

export default MockLists;