import StudyItem from "./StudyItem";
import { useContext } from "react";
import { useState } from "react";
import {PrepSetuContext} from "../store/PrepSetuContext";
import FrontPage from "./FrontPage";
import VideosPage from "./VideosPage";
import MockLists from "./MockLists";

function StudyItems({latestNewsHandler,motivationHandler,roadMapHandler}) {
  let {studyMaterial} = useContext(PrepSetuContext);
  let [mainPage,setMainPage] = useState(true);
  let [liveClassClicked,setLiveClassClicked]=useState(false);
  let [submitClick,setSubmitClick] = useState(false);
  let [pageType,setPageType] = useState('');
  let [mockClicked,setMockClicked] = useState(false);
  return (
    <>
     {liveClassClicked && <VideosPage examName={pageType}/>}
     {mockClicked && <MockLists mockName={pageType}/>}
    {submitClick ? <FrontPage title={pageType} latestNewsHandler={latestNewsHandler} motivationHandler={motivationHandler} setLiveClassClicked={setLiveClassClicked}  setSubmitClick={setSubmitClick} setMainPage={setMainPage} roadMapHandler={roadMapHandler} setMockClicked={setMockClicked}/> : (mainPage===true && <div className="flex flex-wrap">  {studyMaterial.map(item=><StudyItem item={item} setSubmitClick={setSubmitClick} setPageType={setPageType}/>)}</div>)}
    </>
  );
}

export default StudyItems;