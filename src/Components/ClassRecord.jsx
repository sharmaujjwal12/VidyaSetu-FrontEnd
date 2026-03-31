import RecordedClass from "./RecordedClass";
import { useEffect, useState } from "react";
import { getMockData } from "../services/Backend";
import VideosPage from "./VideosPage";
import Loader from "./Loader";

function ClassRecord() {
  const [totalCourses, setTotalCourses] = useState([]);
  let [loader,setLoader] = useState(false);
  let [vidoesPage, setVideosPage] = useState(false);
  let [examName, setExamName] = useState('');
  const exams = (data) => {
    setTotalCourses(data.mock);
    setLoader(true);
  };
  useEffect(() => {
    getMockData(exams);
  }, []);
  return (
    <div className="">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-700 mb-8">
       {`Explore the ${vidoesPage?"Videos" : "Courses 📚"}`} 
      </h1>
       <div>
      {loader===false && <Loader
      />}
    </div>
      {vidoesPage === true ? (
        <VideosPage examName={examName}/>
      ) : (
        <div className="flex">
          {" "}
          {totalCourses.map((item) => (
            <RecordedClass key={item._id} item={item.name}  setVideosPage={setVideosPage} setExamName={setExamName}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClassRecord;
