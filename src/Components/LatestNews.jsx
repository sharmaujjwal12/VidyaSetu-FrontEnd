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
      <h1 className="text-2xl font-semibold text-gray-800 mb-5">
        📰 Today's Breaking News
      </h1>
    <div>
      {loader===false && <DynamicLoader/>}
    </div>
      <div className="flex flex-col">
      {latestNews.map(news =><LatestNew key={news._id} news={news} />
      )}
      </div>
       </div>
    </>
  );
}

export default LatestNews;
