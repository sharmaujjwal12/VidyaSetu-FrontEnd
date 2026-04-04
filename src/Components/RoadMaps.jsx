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
<div className="mb-6">
  <div className="flex items-center justify-between flex-wrap gap-3">
    
    <h1 className="
    text-2xl 
    sm:text-3xl 
    lg:text-4xl 
    font-bold 
    text-gray-800 
    flex 
    items-center 
    gap-3
    ">
      <span className="text-3xl sm:text-4xl">🗺️</span>
      RoadMaps Shown Here
    </h1>

    {/* Optional Badge */}
    <span className="
    text-xs 
    sm:text-sm 
    bg-purple-100 
    text-purple-600 
    px-3 
    py-1 
    rounded-full 
    font-semibold
    ">
      Learning Paths
    </span>

  </div>

  {/* Fancy Underline */}
  <div className="
  mt-3 
  h-[3px] 
  w-24 
  bg-gradient-to-r 
  from-purple-500 
  to-indigo-500 
  rounded-full
  "></div>
</div>
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