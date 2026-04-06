import { useEffect, useState } from "react";
import { getPaidMockDetailsFromServer} from "../services/Backend";
import MockList from "./MockList";
import PaidMockList from "./PaidMockList";
import DynamicLoader from "./DynamicLoader";
function PaidMockLists({mockName,setSelectedMock}){
  let [mocks,setMocks] = useState([]);
  let [loader,setLoader] = useState(true);
  useEffect(()=>{
       const getMockDetail = (exam,duration,questions,marks)=>{
        console.log("PaidMockLists me hu")
         setMocks(exam,duration,questions,marks)
         setLoader(false);
      }
      getPaidMockDetailsFromServer(getMockDetail,mockName);
  },[])
  return <>
  {loader===true && <DynamicLoader/>}
  {mocks.map((item,index) => <PaidMockList key={index} item={item} setSelectedMock={setSelectedMock}/>)}
  </>
}

export default PaidMockLists;