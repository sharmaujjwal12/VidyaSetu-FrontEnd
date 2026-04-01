import RecordedClass from "./RecordedClass";
import { useEffect, useState } from "react";
import { getMockData } from "../services/Backend";
import Loader from "./Loader";
import Chapters from "./Chapters";

function ClassRecord() {
  const [totalCourses, setTotalCourses] = useState([]);
  const [chapters,setChapters] = useState(false);
  let [loader,setLoader] = useState(false);
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
       <div>
      {loader===false && <Loader
      />}
    </div>
    {chapters === true ? (
      <Chapters examName={examName}/> ) : <div className="flex">
          {" "}
          {totalCourses.map((item) => (
            <RecordedClass key={item._id} item={item.name} setExamName={setExamName} setChapters={setChapters}/>
          ))}
        </div>}
    </div>
  );
}

export default ClassRecord;
