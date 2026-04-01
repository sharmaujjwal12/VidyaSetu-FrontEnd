import { useState } from "react";
import Chapter from "./Chapter";
import VideosPage from "./VideosPage";
import { useEffect } from "react";
import { getLectureDetailsFromServer } from "../services/Backend";

function Chapters({examName}){
    let [vidoesPage, setVideosPage] = useState(false);
    let [lectureDetails, setLectureDetails] = useState([]);
    let [lectureType, setLectureType] = useState('');
    useEffect(()=>{
      const getDetails=(data)=>{
        setLectureDetails(data);
      }
      getLectureDetailsFromServer(examName,getDetails)
    },[])
  return (
    <div>
        {vidoesPage === true ? (
        <VideosPage examName={examName} lectureType={lectureType}/>
      ) : <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-slate-900">
          Chapters & Lectures
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">
          Select a subject to explore video lectures
        </p>
        <div className="flex">
        {lectureDetails.map(item=><Chapter key={item._id} item={item} setLectureType={setLectureType} setVideosPage={setVideosPage}/>)}</div></div>}
      
    </div>
  )
}

export default Chapters;