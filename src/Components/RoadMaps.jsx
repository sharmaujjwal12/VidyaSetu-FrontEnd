import { useEffect, useState } from "react";
import RoadMap from "./RoadMap";
import { getRoadMapFromServer, getRoadMapWithoutCondition } from "../services/Backend";
import Loader from "./Loader";
import DynamicLoader from "./DynamicLoader";

function RoadMaps(){
  let [data,setData]  = useState([]);
  let [loader,setLoader]  = useState(false);
  const methodData=(data)=>{
     setData(data);
     setLoader(true);
     console.log(data);
  }
  useEffect(()=>{
    getRoadMapWithoutCondition(methodData)
  },[])
  return (
    <div>
       {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        RoadMaps Shown Here
      </h1>
        <div>
      {loader===false && <DynamicLoader/>}
    </div>
      <div className="flex flex-wrap">
      {data.map(item=><RoadMap item={item.roadmapType}/>)}
      </div>
    </div>
  )
}

export default RoadMaps;