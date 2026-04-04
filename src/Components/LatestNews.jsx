import { useEffect, useState } from "react";
import { getNewsFromServer } from "../services/Backend";
import LatestNew from "./LatestNew";
import Loader from "./Loader";
import DynamicLoader from "./DynamicLoader";
function LatestNews() {
  let [latestNews, setLatestNews] = useState([]);
  let [loader,setLoader]= useState(false);
  useEffect(() => {
    const getNews = (news) => {
      setLatestNews(news);
      setLoader(true);
    };
    getNewsFromServer(getNews);
  }, []);
  return (
    <>
    <div>
      {/* Heading */}
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
      <span className="text-3xl sm:text-4xl">📰</span>
      Today's Breaking News
    </h1>

    {/* Optional Right Badge */}
    <span className="
    text-xs 
    sm:text-sm 
    bg-blue-100 
    text-blue-600 
    px-3 
    py-1 
    rounded-full 
    font-semibold
    ">
      Live Updates
    </span>

  </div>

  {/* Fancy Underline */}
  <div className="
  mt-3 
  h-[3px] 
  w-24 
  bg-gradient-to-r 
  from-blue-500 
  to-indigo-500 
  rounded-full
  "></div>
</div>
    <div>
      {loader===false && <DynamicLoader/>}
    </div>
      <div className="flex flex-wrap gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {latestNews.map(news =><LatestNew key={news._id} news={news} />
      )}
      </div>
       </div>
    </>
  );
}

export default LatestNews;
