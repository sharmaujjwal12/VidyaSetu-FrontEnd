import RecordedClass from "./RecordedClass";
import { useEffect, useState } from "react";
import { getMockData } from "../services/Backend";
import Loader from "./Loader";
import Chapters from "./Chapters";
import DynamicLoader from "./DynamicLoader";

function ClassRecord() {
  const [totalCourses, setTotalCourses] = useState([]);
  const [chapters, setChapters] = useState(false);
  let [loader, setLoader] = useState(false);
  let [examName, setExamName] = useState("");
  const exams = (data) => {
    setTotalCourses(data.mock);
    setLoader(false);
  };
  useEffect(() => {
    getMockData(exams);
    setLoader(true);
  }, []);
  return (
    <div className="">
      {loader === true && <DynamicLoader />}
      {chapters === true ? (
        <Chapters examName={examName} setLoader={setLoader}/>
      ) : (
        <div className="flex flex-wrap">
          {" "}
          {totalCourses.map((item) => (
              <RecordedClass
                key={item._id}
                item={item.name}
                setExamName={setExamName}
                setChapters={setChapters}
                setLoader={setLoader}
              />
          ))}
        </div>
      )}
    </div>
  );
}

export default ClassRecord;
